import React, { useState } from 'react';
import {
  Users, Coins, FileText, CheckCircle, Clock,
  ChevronDown, ChevronUp, X, Send, Plus,
} from 'lucide-react';
import { PEER_REQUESTS } from '../data/modules';
import { useToast } from '../context/ToastContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

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

const SEED_REQUESTS = [...PEER_REQUESTS, ...EXTRA_REQUESTS];

const SEED_REVIEWS = [
  { id: 'r1', title: 'Theoretical Framework', author: 'Keiko H.', credits: 12, date: '2d ago', status: 'Completed' },
  { id: 'r2', title: 'Conclusion Draft', author: 'Oluwaseun A.', credits: 10, date: 'Today', status: 'In Progress' },
];

// ─── Request Feedback Modal ───────────────────────────────────────────────────

function RequestModal({ onClose, onSubmit }) {
  const [excerpt, setExcerpt] = useState('');
  const [title, setTitle] = useState('');
  const [need, setNeed] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) return;
    onSubmit({ title: title.trim(), excerpt: excerpt.trim(), need: need.trim() });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-medium text-white">Request Feedback</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-1.5">Document title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Introduction – draft 2"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-zinc-500 transition-all placeholder:text-zinc-600"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-1.5">
              What kind of feedback do you need?
            </label>
            <input
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              placeholder="e.g. Is my argument clear? Does my structure flow?"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-zinc-500 transition-all placeholder:text-zinc-600"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-1.5">Paste your excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={6}
              placeholder="Paste up to ~1000 words…"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-zinc-500 transition-all placeholder:text-zinc-600"
            />
            <p className="text-xs text-zinc-600 mt-1">
              {excerpt.trim().split(/\s+/).filter(Boolean).length} words
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim() || !excerpt.trim()}
              className="flex-1 py-2.5 text-sm font-semibold bg-yellow-400 hover:bg-yellow-300 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-black rounded-xl transition-colors"
            >
              Submit request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Inline feedback form ─────────────────────────────────────────────────────

function FeedbackForm({ request, onSubmit, onCancel }) {
  const [clarity, setClarity] = useState('');
  const [structure, setStructure] = useState('');
  const [language, setLanguage] = useState('');

  const canSubmit = clarity.trim() || structure.trim() || language.trim();

  return (
    <div className="mt-4 pt-4 border-t border-zinc-800 space-y-4">
      <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Your feedback</p>
      {[
        { label: 'Clarity & argument', value: clarity, set: setClarity, placeholder: 'Is the argument clear and well-reasoned?' },
        { label: 'Structure & flow', value: structure, set: setStructure, placeholder: 'Does the writing flow logically from point to point?' },
        { label: 'Language & expression', value: language, set: setLanguage, placeholder: 'Any language, grammar, or phrasing suggestions?' },
      ].map(({ label, value, set, placeholder }) => (
        <div key={label}>
          <label className="text-xs text-zinc-500 block mb-1">{label}</label>
          <textarea
            value={value}
            onChange={(e) => set(e.target.value)}
            rows={3}
            placeholder={placeholder}
            className="w-full bg-black/60 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-700 resize-none focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>
      ))}
      <div className="flex items-center gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-xl transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => canSubmit && onSubmit({ clarity, structure, language })}
          disabled={!canSubmit}
          className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-yellow-400 hover:bg-yellow-300 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-black rounded-xl transition-colors"
        >
          <Send size={13} /> Submit feedback (+{request.credits} credits)
        </button>
      </div>
    </div>
  );
}

// ─── Main view ────────────────────────────────────────────────────────────────

export default function PeerReviewView() {
  const toast = useToast();
  const [credits, setCredits] = useLocalStorage('draftlab-credits', 32);
  const [activeTab, setActiveTab] = useState('give');
  const [openRequests, setOpenRequests] = useState(SEED_REQUESTS);
  const [reviews, setReviews] = useState(SEED_REVIEWS);
  const [myRequests, setMyRequests] = useLocalStorage('draftlab-my-requests', []);
  const [activeFormId, setActiveFormId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleAccept(id) {
    setActiveFormId((prev) => (prev === id ? null : id));
  }

  function handleSubmitFeedback(request, feedback) {
    setOpenRequests((prev) => prev.filter((r) => r.id !== request.id));
    setReviews((prev) => [
      {
        id: `done-${request.id}`,
        title: request.title,
        author: request.author,
        credits: request.credits,
        date: 'Just now',
        status: 'Completed',
      },
      ...prev,
    ]);
    setCredits((c) => c + request.credits);
    setActiveFormId(null);
    toast(`Feedback submitted — +${request.credits} credits added!`);
  }

  function handleRequestSubmit({ title, excerpt, need }) {
    const newReq = {
      id: `mine-${Date.now()}`,
      title,
      excerpt,
      need,
      date: 'Just now',
      status: 'Open',
    };
    setMyRequests((prev) => [newReq, ...prev]);
    setShowModal(false);
    toast('Feedback request posted — we\'ll notify you when someone responds.');
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      {showModal && (
        <RequestModal onClose={() => setShowModal(false)} onSubmit={handleRequestSubmit} />
      )}

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-light text-white mb-1">Peer Review Hub</h2>
          <p className="text-zinc-400 text-sm">Help fellow PhD writers and earn credits for your own reviews.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2">
            <Coins size={14} className="text-zinc-400" />
            <span className="text-sm font-medium text-white">{credits} credits</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold rounded-full transition-colors shadow-lg shadow-yellow-400/20"
          >
            <Plus size={15} /> Request Feedback
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1 w-fit">
        {[
          { id: 'give', label: `Give Feedback${openRequests.length ? ` (${openRequests.length})` : ''}` },
          { id: 'mine', label: `My Requests${myRequests.length ? ` (${myRequests.length})` : ''}` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-yellow-400 text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'give' ? (
        <>
          {/* Open requests */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-base font-medium text-white mb-5 flex items-center gap-2">
              <FileText size={16} className="text-zinc-400" /> Open Requests
            </h3>
            {openRequests.length === 0 ? (
              <p className="text-sm text-zinc-500 text-center py-6">No open requests right now — check back soon.</p>
            ) : (
              <div className="space-y-3">
                {openRequests.map((req) => (
                  <div key={req.id} className="bg-black/50 border border-zinc-800/50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
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
                          <span className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-700">
                            <Coins size={11} /> +{req.credits} credits
                          </span>
                          <button
                            onClick={() => handleAccept(req.id)}
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                          >
                            {activeFormId === req.id ? <><ChevronUp size={13} /> Cancel</> : <><ChevronDown size={13} /> Accept review</>}
                          </button>
                        </div>
                      </div>
                    </div>

                    {activeFormId === req.id && (
                      <FeedbackForm
                        request={req}
                        onSubmit={(fb) => handleSubmitFeedback(req, fb)}
                        onCancel={() => setActiveFormId(null)}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Review history */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-base font-medium text-white mb-5 flex items-center gap-2">
              <CheckCircle size={16} className="text-zinc-400" /> My Reviews
            </h3>
            <div className="space-y-3">
              {reviews.map((rev) => (
                <div key={rev.id} className="flex items-center justify-between p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-zinc-200">{rev.title}</p>
                    <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                      <Clock size={10} /> {rev.date}
                      {rev.author && <> · {rev.author}</>}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-700">
                      <Coins size={10} /> {rev.credits}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      rev.status === 'Completed'
                        ? 'text-emerald-400 bg-emerald-400/10'
                        : 'text-zinc-400 bg-zinc-800'
                    }`}>
                      {rev.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* My Requests tab */
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-base font-medium text-white mb-5 flex items-center gap-2">
            <Users size={16} className="text-zinc-400" /> Feedback Requests I've Sent
          </h3>
          {myRequests.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-sm text-zinc-500 mb-3">You haven't requested feedback yet.</p>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 mx-auto px-4 py-2 text-sm font-medium bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors"
              >
                <Plus size={14} /> Request feedback now
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {myRequests.map((req) => (
                <div key={req.id} className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                    <h4 className="text-sm font-medium text-white">{req.title}</h4>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      req.status === 'Open' ? 'text-yellow-400 bg-yellow-400/10' : 'text-emerald-400 bg-emerald-400/10'
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  {req.need && <p className="text-xs text-zinc-500 mt-1">{req.need}</p>}
                  <p className="text-xs text-zinc-600 mt-1 flex items-center gap-1">
                    <Clock size={10} /> {req.date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
