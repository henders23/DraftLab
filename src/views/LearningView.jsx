import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { TOPICS } from '../data/learningContent';
import { useProgress } from '../context/ProgressContext';

export default function LearningView() {
  const { topicProgress } = useProgress();

  const inProgress = TOPICS.filter((t) => {
    const p = topicProgress[t.slug];
    return p && p.completed > 0 && p.completed < p.total;
  }).length;

  const completed = TOPICS.filter((t) => {
    const p = topicProgress[t.slug];
    return p && p.total > 0 && p.completed === p.total;
  }).length;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
            <BookOpen size={28} /> Learning Zone
          </h2>
          <p className="text-zinc-400">A curriculum for doctoral writers — across every discipline.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-zinc-500">In progress</p>
            <p className="text-xl font-semibold text-white">{inProgress}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-zinc-500">Completed</p>
            <p className="text-xl font-semibold text-white">{completed}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-zinc-500">Topics</p>
            <p className="text-xl font-semibold text-white">{TOPICS.length}</p>
          </div>
        </div>
      </div>

      {/* Topic grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {TOPICS.map((topic) => {
          const progress = topicProgress[topic.slug] ?? { completed: 0, total: topic.lessons.length };
          const pct = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
          const isInProgress = progress.completed > 0 && progress.completed < progress.total;
          const isDone = progress.total > 0 && progress.completed === progress.total;
          const totalMins = topic.lessons.reduce((sum, l) => sum + l.durationMins, 0);

          return (
            <Link
              key={topic.slug}
              to={`/learning/${topic.slug}`}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-zinc-700 transition-colors group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-medium">
                  {topic.lessons.length} lessons
                </span>
                {isDone && <CheckCircle size={16} className="text-white shrink-0" />}
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-base font-medium text-white leading-snug group-hover:text-zinc-100 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{topic.description}</p>
              </div>

              {/* Progress */}
              {isInProgress ? (
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                    <span>{progress.completed} of {progress.total} lessons</span>
                    <span className="text-zinc-300">{pct}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full transition-all bg-white" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-zinc-600">
                  {isDone ? `${progress.total} lessons · Completed` : `${progress.total} lessons · Not started`}
                </p>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Clock size={11} /> ~{totalMins} min total
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {isDone ? 'Review' : isInProgress ? 'Continue' : 'Start'} <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
