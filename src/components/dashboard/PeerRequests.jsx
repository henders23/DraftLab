import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function PeerRequests() {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <MessageSquare className="text-yellow-400" size={20} /> Peer Requests
        </h3>
      </div>

      <div className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-xs font-bold">
              JD
            </div>
            <span className="text-sm font-medium text-zinc-300">Javier D.</span>
          </div>
          <span className="text-xs text-zinc-500">~800 words</span>
        </div>

        <p className="text-sm text-white font-medium mb-1">"Results Chapter Excerpt"</p>
        <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
          Looking for feedback on the clarity of my data interpretation. English is my second language.
        </p>

        <button className="w-full py-2 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 text-xs font-medium rounded-lg transition-colors border border-yellow-400/20">
          Review to earn +10 Credits
        </button>
      </div>
    </section>
  );
}
