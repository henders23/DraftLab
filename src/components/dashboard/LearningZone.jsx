import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { TOPICS } from '../../data/learningContent';
import { useProgress } from '../../context/ProgressContext';

export default function LearningZone() {
  const { topicProgress, isLessonComplete } = useProgress();

  const inProgressTopic = TOPICS.find((t) => {
    const p = topicProgress[t.slug];
    return p && p.completed > 0 && p.completed < p.total;
  });

  const nextLesson = inProgressTopic?.lessons.find(
    (l) => !isLessonComplete(inProgressTopic.slug, l.slug)
  );

  const continueLink =
    nextLesson ? `/learning/${inProgressTopic.slug}/${nextLesson.slug}` : '/learning';

  const progress = inProgressTopic ? topicProgress[inProgressTopic.slug] : null;
  const pct = progress ? Math.round((progress.completed / progress.total) * 100) : 0;

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <BookOpen size={20} /> Learning
        </h3>
        <Link to="/learning" className="text-sm text-zinc-400 hover:text-white transition-colors">
          All topics
        </Link>
      </div>

      {inProgressTopic && nextLesson ? (
        <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
          <p className="text-xs text-zinc-500 mb-1">{inProgressTopic.title}</p>
          <h4 className="text-sm font-medium text-white mb-3">{nextLesson.title}</h4>
          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>{progress.completed} of {progress.total} lessons</span>
            <span className="text-zinc-300">{pct}%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-4">
            <div className="bg-white h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <Link
            to={continueLink}
            className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white rounded-lg transition-colors"
          >
            Continue Lesson <ArrowRight size={12} />
          </Link>
        </div>
      ) : (
        <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl text-center">
          <p className="text-xs text-zinc-500 mb-3">No lessons in progress yet.</p>
          <Link
            to="/learning"
            className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white rounded-lg transition-colors"
          >
            Browse topics <ArrowRight size={12} />
          </Link>
        </div>
      )}
    </section>
  );
}
