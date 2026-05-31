import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { MODULES } from '../../data/modules';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function LearningZone() {
  const [progress] = useLocalStorage('draftlab-progress', {});

  // Find the first module with progress started but not finished
  const activeModule = MODULES.find((m) => {
    const done = progress[m.id]?.completedLessons?.length ?? 0;
    return done > 0 && done < m.lessons.length;
  }) ?? MODULES[0]; // fall back to first module if nothing started

  const completed = progress[activeModule.id]?.completedLessons?.length ?? 0;
  const total = activeModule.lessons.length;
  const pct = total ? Math.round((completed / total) * 100) : 0;

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

      <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
        <p className="text-xs text-zinc-500 mb-1">{activeModule.category}</p>
        <h4 className="text-sm font-medium text-white mb-3">{activeModule.title}</h4>
        <div className="flex justify-between text-xs text-zinc-400 mb-2">
          <span>Lesson {completed} of {total}</span>
          {pct > 0 && <span className="text-yellow-400">{pct}%</span>}
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-4">
          <div
            className="bg-yellow-400 h-1.5 rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <Link
          to="/learning"
          className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white rounded-lg transition-colors"
        >
          {pct > 0 ? 'Continue Lesson' : 'Start Learning'} <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
