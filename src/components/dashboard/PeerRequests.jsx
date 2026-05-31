import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

function initialsFrom(name) {
  const s = (name || '').trim();
  if (!s) return '?';
  return s.split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();
}

export default function PeerRequests() {
  const { user } = useAuth();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from('review_requests')
        .select('id, title, excerpt, word_count, credits, author:profiles!review_requests_author_id_fkey(full_name)')
        .eq('status', 'open')
        .neq('author_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);
      if (!active) return;
      if (error) console.error('Failed to load peer request:', error.message);
      else setRequest(data?.[0] ?? null);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <MessageSquare size={20} /> Peer Requests
        </h3>
        <Link to="/peer" className="text-sm text-zinc-400 hover:text-white transition-colors">
          View all
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-6">
          <Loader2 size={18} className="animate-spin text-zinc-600" />
        </div>
      ) : !request ? (
        <div className="text-center py-6">
          <p className="text-sm text-zinc-500 mb-3">No open requests right now.</p>
          <Link to="/peer" className="text-sm text-white hover:underline">
            Request a review →
          </Link>
        </div>
      ) : (
        <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs font-bold shrink-0">
                {initialsFrom(request.author?.full_name)}
              </div>
              <span className="text-sm font-medium text-zinc-300">
                {request.author?.full_name || 'A writer'}
              </span>
            </div>
            <span className="text-xs text-zinc-500">~{request.word_count} words</span>
          </div>

          <p className="text-sm text-white font-medium mb-1">"{request.title}"</p>
          <p className="text-xs text-zinc-400 mb-4 line-clamp-2">{request.excerpt}</p>

          <Link
            to="/peer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors border border-white/20"
          >
            Review to earn +{request.credits} Credits <ArrowRight size={12} />
          </Link>
        </div>
      )}
    </section>
  );
}
