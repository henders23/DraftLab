import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { TOPICS } from '../data/learningContent';

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

export function ProgressProvider({ children }) {
  const [completedMap, setCompletedMap] = useState(loadFromStorage);

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

  const markLessonComplete = useCallback((topicSlug, lessonSlug) => {
    setCompletedMap((prev) => {
      const updated = {
        ...prev,
        [topicSlug]: { ...prev[topicSlug], [lessonSlug]: true },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <ProgressContext.Provider value={{ topicProgress, isLessonComplete, markLessonComplete }}>
      {children}
    </ProgressContext.Provider>
  );
}
