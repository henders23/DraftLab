import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { PEER_REQUESTS } from '../../data/modules';

export default function PeerRequests() {
  const request = PEER_REQUESTS[0];

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

      <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs font-bold shrink-0">
              {request.initials}
            </div>
            <span className="text-sm font-medium text-zinc-300">{request.author}</span>
          </div>
          <span className="text-xs text-zinc-500">~{request.wordCount} words</span>
        </div>

        <p className="text-sm text-white font-medium mb-1">"{request.title}"</p>
        <p className="text-xs text-zinc-400 mb-4 line-clamp-2">{request.message}</p>

        <Link
          to="/peer"
          className="flex items-center justify-center gap-2 w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors border border-white/20"
        >
          Review to earn +{request.credits} Credits <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
