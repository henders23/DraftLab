import React from 'react';
import { Users, Coins, FileText, CheckCircle, Clock } from 'lucide-react';
import { PEER_REQUESTS } from '../data/modules';
import { useToast } from '../context/ToastContext';

const EXTRA_REQUESTS = [
  {
    id: 3,
    author: 'Priya S.',
    initials: 'PS',
    title: 'Discussion Chapter – Findings',
    message: 'Looking for feedback on how well I link my results back to the literature.',
    wordCount: 1200,
    credits: 15,
  },
  {
    id: 4,
    author: 'Marcus T.',
    initials: 'MT',
    title: 'Abstract Revision',
    message: 'Is my abstract concise and does it cover all the key elements?',
    wordCount: 320,
    credits: 6,
  },
];

const ALL_REQUESTS = [...PEER_REQUESTS, ...EXTRA_REQUESTS];

const MY_REVIEWS = [
  { id: 1, title: 'Theoretical Framework – Keiko H.', status: 'Completed', credits: 12, date: '2d ago' },
  { id: 2, title: 'Conclusion Draft – Oluwaseun A.', status: 'In Progress', credits: 10, date: 'Today' },
];

export default function PeerReviewView() {
  const toast = useToast();
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
            <Users size={28} /> Peer Review Hub
          </h2>
          <p className="text-zinc-400">Help fellow academics and earn credits for your own reviews.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 shrink-0">
          <Coins size={14} className="text-zinc-400" />
          <span className="text-sm font-medium text-white">32 credits</span>
        </div>
      </div>

      {/* Open requests */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-lg font-medium text-white mb-5 flex items-center gap-2">
          <FileText size={18} /> Open Requests
        </h3>
        <div className="space-y-3">
          {ALL_REQUESTS.map((req) => (
            <div
              key={req.id}
              className="flex items-start gap-4 p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs font-bold shrink-0">
                {req.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4 className="text-sm font-medium text-white">{req.title}</h4>
                  <span className="text-xs text-zinc-500 shrink-0">{req.wordCount.toLocaleString()} words</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">{req.author}</p>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{req.message}</p>
                <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                  <span className="flex items-center gap-1 text-xs text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-700">
                    <Coins size={11} /> +{req.credits} credits
                  </span>
                  <button
                    onClick={() => toast(`Review accepted — +${req.credits} credits incoming!`)}
                    className="text-xs font-medium px-3 py-1.5 bg-white hover:bg-zinc-100 text-black rounded-lg transition-colors"
                  >
                    Accept Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My reviews */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-lg font-medium text-white mb-5 flex items-center gap-2">
          <CheckCircle size={18} /> My Reviews
        </h3>
        <div className="space-y-3">
          {MY_REVIEWS.map((rev) => (
            <div key={rev.id} className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
              <div>
                <p className="text-sm font-medium text-zinc-200">{rev.title}</p>
                <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                  <Clock size={10} /> {rev.date}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="flex items-center gap-1 text-xs text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-700">
                  <Coins size={10} /> {rev.credits}
                </span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  rev.status === 'Completed'
                    ? 'text-white bg-white/10 border border-white/20'
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {rev.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
