import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { DRAFTS } from '../../data/drafts';

export default function ActiveDrafts() {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <FileText className="text-yellow-400" size={20} /> Active Drafts
        </h3>
        <Link to="/docs" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
          View all
        </Link>
      </div>

      <div className="space-y-3">
        {DRAFTS.map((draft) => (
          <div
            key={draft.id}
            className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer group"
          >
            <div>
              <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                {draft.title}
              </h4>
              <p className="text-xs text-zinc-500 mt-1">{draft.updatedAt} · {draft.wordCount.toLocaleString()} words</p>
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
