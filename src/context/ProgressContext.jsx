import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { TOPICS } from '../data/learningContent';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const STORAGE_KEY = 'draftlab_learning_progress';

const ProgressContext = createContext(null);

export function useProgress() {
  return useContext(ProgressContext);
}

function loadFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

// Turn DB rows into the nested { [topicSlug]: { [lessonSlug]: true } } shape the UI uses.
function rowsToMap(rows) {
  const map = {};
  for (const row of rows) {
    map[row.topic_slug] = { ...map[row.topic_slug], [row.lesson_slug]: true };
  }
  return map;
}

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [completedMap, setCompletedMap] = useState({});

  // Load progress from Supabase, migrating any legacy localStorage progress on first run.
  useEffect(() => {
    if (!user) return;
    let active = true;

    (async () => {
      const { data, error } = await supabase
        .from('learning_progress')
        .select('topic_slug, lesson_slug')
        .eq('user_id', user.id);

      if (error) {
        console.error('Failed to load learning progress:', error.message);
        return;
      }

      const legacy = loadFromStorage();
      const hasLegacy = Object.keys(legacy).length > 0;

      // One-time migration: push localStorage progress up if the account has none yet.
      if (data.length === 0 && hasLegacy) {
        const rows = [];
        for (const [topicSlug, lessons] of Object.entries(legacy)) {
          for (const [lessonSlug, done] of Object.entries(lessons || {})) {
            if (done) {
              rows.push({
                user_id: user.id,
                topic_slug: topicSlug,
                lesson_slug: lessonSlug,
              });
            }
          }
        }
        if (rows.length > 0) {
          const { error: upErr } = await supabase
            .from('learning_progress')
            .upsert(rows, { onConflict: 'user_id,topic_slug,lesson_slug' });
          if (!upErr) {
            localStorage.removeItem(STORAGE_KEY);
            if (active) setCompletedMap(legacy);
            return;
          }
          console.error('Progress migration failed:', upErr.message);
        }
      }

      if (active) setCompletedMap(rowsToMap(data));
    })();

    return () => {
      active = false;
    };
  }, [user]);

  // { [topicSlug]: { completed: n, total: n } }
  const topicProgress = useMemo(() => {
    return Object.fromEntries(
      TOPICS.map((topic) => {
        const topicCompleted = topic.lessons.filter(
          (l) => completedMap[topic.slug]?.[l.slug]
        ).length;
        return [topic.slug, { completed: topicCompleted, total: topic.lessons.length }];
      })
    );
  }, [completedMap]);

  const isLessonComplete = useCallback(
    (topicSlug, lessonSlug) => !!completedMap[topicSlug]?.[lessonSlug],
    [completedMap]
  );

  const markLessonComplete = useCallback(
    (topicSlug, lessonSlug) => {
      // Optimistic local update.
      setCompletedMap((prev) => ({
        ...prev,
        [topicSlug]: { ...prev[topicSlug], [lessonSlug]: true },
      }));

      if (!user) return;
      supabase
        .from('learning_progress')
        .upsert(
          { user_id: user.id, topic_slug: topicSlug, lesson_slug: lessonSlug },
          { onConflict: 'user_id,topic_slug,lesson_slug' }
        )
        .then(({ error }) => {
          if (error) console.error('Failed to save progress:', error.message);
        });
    },
    [user]
  );

  return (
    <ProgressContext.Provider value={{ topicProgress, isLessonComplete, markLessonComplete }}>
      {children}
    </ProgressContext.Provider>
  );
}
