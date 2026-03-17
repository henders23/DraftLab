import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const DRAFTS = [
  {
    title: 'Methodology Chapter v2',
    status: 'Awaiting Peer Review',
    time: 'Updated 2h ago',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    title: 'Conference Abstract',
    status: 'AI Feedback Ready',
    time: 'Updated 1d ago',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    title: 'Lit Review Outline',
    status: 'Drafting',
    time: 'Updated 3d ago',
    color: 'text-zinc-400',
    bg: 'bg-zinc-400/10',
  },
];

export default function ActiveDrafts() {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <FileText className="text-yellow-400" size={20} /> Active Drafts
        </h3>
        <button className="text-sm text-yellow-400 hover:text-yellow-300">View all</button>
      </div>

      <div className="space-y-3">
        {DRAFTS.map((draft, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer group"
          >
            <div>
              <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                {draft.title}
              </h4>
              <p className="text-xs text-zinc-500 mt-1">{draft.time}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${draft.color} ${draft.bg}`}>
                {draft.status}
              </span>
              <ArrowRight size={16} className="text-zinc-600 group-hover:text-yellow-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
