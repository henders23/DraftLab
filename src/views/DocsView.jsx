import React, { useState } from 'react';
import { FileText, Plus, ArrowRight, Pencil, Share2, Trash2, ArrowUpDown } from 'lucide-react';
import { DRAFTS } from '../data/drafts';
import { useToast } from '../context/ToastContext';

const SORT_OPTIONS = ['Date modified', 'Status', 'Word count'];

export default function DocsView() {
  const toast = useToast();
  const [sort, setSort] = useState('Date modified');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
            <FileText className="text-zinc-300" size={28} /> My Documents
          </h2>
          <p className="text-zinc-400">{DRAFTS.length} drafts · all your writing in one place.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold rounded-xl transition-colors shrink-0">
          <Plus size={16} /> New Draft
        </button>
      </div>

      {/* Sort bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-zinc-500 flex items-center gap-1"><ArrowUpDown size={11} /> Sort by:</span>
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setSort(opt)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-colors font-medium ${sort === opt ? 'bg-zinc-700 text-white' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'}`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Document list */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        {DRAFTS.length === 0 ? (
          <div className="text-center py-16">
            <FileText size={36} className="text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">No drafts yet. Start your first one.</p>
            <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold rounded-xl transition-colors mx-auto">
              <Plus size={16} /> New Draft
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {DRAFTS.map((draft) => (
              <div
                key={draft.id}
                className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-zinc-700 transition-colors">
                    <FileText size={14} className="text-zinc-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                      {draft.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {draft.updatedAt} · {draft.wordCount.toLocaleString()} words
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className={`hidden sm:inline text-xs px-2.5 py-1 rounded-full font-medium ${draft.color} ${draft.bg}`}>
                    {draft.status}
                  </span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => toast(`Opening "${draft.title}" for editing…`)} className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors" title="Edit">
                      <Pencil size={13} />
                    </button>
                    <button onClick={() => toast(`Share link copied for "${draft.title}"!`)} className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors" title="Share">
                      <Share2 size={13} />
                    </button>
                    <button onClick={() => toast(`"${draft.title}" moved to trash.`)} className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-rose-400 transition-colors" title="Delete">
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <ArrowRight size={15} className="text-zinc-600 group-hover:text-yellow-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
