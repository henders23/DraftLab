import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const STATUS_STYLES = {
  'Drafting':             'text-zinc-400 bg-zinc-400/10',
  'Awaiting Peer Review': 'text-emerald-400 bg-emerald-400/10',
  'AI Feedback Ready':    'text-yellow-400 bg-yellow-400/10',
  'Complete':             'text-sky-400 bg-sky-400/10',
};

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function wordCount(text) {
  return text?.trim() ? text.trim().split(/\s+/).length : 0;
}

export default function ActiveDrafts() {
  const [docs] = useLocalStorage('draftlab-docs', []);

  const recent = docs
    .filter((d) => d.status !== 'Complete')
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3);

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

      {recent.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-sm text-zinc-500">No active drafts yet.</p>
          <Link to="/docs?new=1" className="text-sm text-yellow-400 hover:text-yellow-300 mt-2 inline-block transition-colors">
            Start a new draft →
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {recent.map((doc) => (
            <Link
              key={doc.id}
              to="/docs"
              className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer group"
            >
              <div className="min-w-0">
                <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                  {doc.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Updated {timeAgo(doc.updatedAt)} · {wordCount(doc.content).toLocaleString()} words
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_STYLES[doc.status] ?? STATUS_STYLES.Drafting}`}>
                  {doc.status}
                </span>
                <ArrowRight size={16} className="text-zinc-600 group-hover:text-yellow-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
