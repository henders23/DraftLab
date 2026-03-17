import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

export default function LearningZone() {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <BookOpen className="text-yellow-400" size={20} /> Learning Zone
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Active module */}
        <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
          <h4 className="text-sm font-medium text-white mb-3">Mastering the Passive Voice</h4>
          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>Module 3 of 4</span>
            <span className="text-yellow-400">80%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5">
            <div className="bg-yellow-400 h-1.5 rounded-full w-4/5" />
          </div>
          <button className="mt-4 w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white rounded-lg transition-colors">
            Continue Lesson
          </button>
        </div>

        {/* Explore card */}
        <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl border-dashed flex flex-col justify-center items-center text-center">
          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
            <Plus size={20} className="text-zinc-400" />
          </div>
          <p className="text-sm font-medium text-zinc-300">Explore new topics</p>
          <p className="text-xs text-zinc-500 mt-1">Grammar, Structure &amp; Flow</p>
        </div>
      </div>
    </section>
  );
}
