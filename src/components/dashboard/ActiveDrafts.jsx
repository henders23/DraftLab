import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Plus, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  return `${days}d ago`;
}

export default function ActiveDrafts() {
  const { user } = useAuth();
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    let active = true;

    (async () => {
      const { data, error } = await supabase
        .from('documents')
        .select('id, title, status, word_count, updated_at')
        .order('updated_at', { ascending: false })
        .limit(4);
      if (!active) return;
      if (error) console.error('Failed to load drafts:', error.message);
      else setDrafts(data);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [user]);

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <FileText size={20} /> Active Drafts
        </h3>
        <Link to="/docs" className="text-sm text-zinc-400 hover:text-white transition-colors">
          View all
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 size={20} className="animate-spin text-zinc-600" />
        </div>
      ) : drafts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-zinc-500 mb-4">
            No drafts yet. Start your first piece of writing.
          </p>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
          >
            <Plus size={15} /> New Draft
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {drafts.map((draft) => (
            <Link
              key={draft.id}
              to="/docs"
              className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer group"
            >
              <div>
                <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {draft.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Updated {timeAgo(draft.updated_at)} · {draft.word_count.toLocaleString()} words
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded-full font-medium text-zinc-400 bg-zinc-800">
                  {draft.status}
                </span>
                <ArrowRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
