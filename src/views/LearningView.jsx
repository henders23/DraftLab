import React from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { MODULES } from '../data/modules';

const LEVEL_COLORS = {
  Beginner: 'text-emerald-400 bg-emerald-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced: 'text-rose-400 bg-rose-400/10',
};

export default function LearningView() {
  const inProgress = MODULES.filter((m) => m.progress > 0 && m.progress < 100).length;
  const completed = MODULES.filter((m) => m.progress === 100).length;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
            <BookOpen className="text-yellow-400" size={28} /> Learning Modules
          </h2>
          <p className="text-zinc-400">Build your academic writing skills, one module at a time.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-zinc-500">In progress</p>
            <p className="text-xl font-semibold text-yellow-400">{inProgress}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-zinc-500">Completed</p>
            <p className="text-xl font-semibold text-emerald-400">{completed}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-zinc-500">Total</p>
            <p className="text-xl font-semibold text-white">{MODULES.length}</p>
          </div>
        </div>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {MODULES.map((mod) => {
          const isInProgress = mod.progress > 0 && mod.progress < 100;
          const isDone = mod.progress === 100;

          return (
            <div
              key={mod.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-zinc-700 transition-colors"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-medium">
                    {mod.category}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${LEVEL_COLORS[mod.level] ?? 'text-zinc-400 bg-zinc-400/10'}`}>
                    {mod.level}
                  </span>
                </div>
                {isDone && <CheckCircle size={16} className="text-emerald-400 shrink-0" />}
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-white leading-snug">{mod.title}</h3>

              {/* Progress */}
              {isInProgress ? (
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                    <span>Lesson {mod.completedLessons} of {mod.totalLessons}</span>
                    <span className="text-yellow-400">{mod.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div
                      className="bg-yellow-400 h-1.5 rounded-full transition-all"
                      style={{ width: `${mod.progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-zinc-500">
                  {isDone ? `${mod.totalLessons} lessons · Completed` : `${mod.totalLessons} lessons · Not started`}
                </p>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Clock size={11} /> {mod.estimatedMins} min
                </span>
                <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors">
                  {isDone ? 'Review' : isInProgress ? 'Continue' : 'Start'} <ArrowRight size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
