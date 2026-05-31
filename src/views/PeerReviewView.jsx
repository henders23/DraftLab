import React, { useCallback, useEffect, useState } from 'react';
import {
  Users, Coins, FileText, CheckCircle, Clock, Plus, Loader2, Star, X, Send,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

function countWords(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function timeAgo(iso) {
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}

function Avatar({ name }) {
  const s = (name || '').trim();
  const initials = s
    ? s.split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase()
    : '?';
  return (
    <div className="w-9 h-9 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs font-bold shrink-0">
      {initials}
    </div>
  );
}

// --- New request form ----------------------------------------------------
function NewRequestForm({ onCreated, onClose, balance }) {
  const toast = useToast();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [credits, setCredits] = useState(10);
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.rpc('create_review_request', {
      p_title: title,
      p_excerpt: excerpt,
      p_word_count: countWords(excerpt),
      p_credits: Number(credits),
      p_document_id: null,
    });
    setBusy(false);
    if (error) return toast(error.message);
    toast('Request posted to the community.');
    onCreated();
  }

  const inputClass =
    'w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600';

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-medium text-white">Request a review</h3>
        <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What is this? e.g. Methodology chapter, section 3"
          className={inputClass}
        />
        <textarea
          required
          rows={6}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Paste the writing you'd like reviewed, and say what kind of feedback you want."
          className={inputClass}
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-zinc-500">{countWords(excerpt).toLocaleString()} words</p>
          <label className="flex items-center gap-2 text-sm text-zinc-400">
            Offer
            <input
              type="number"
              min={1}
              max={balance}
              required
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              className="w-20 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-zinc-500"
            />
            credits
          </label>
        </div>
        <p className="text-xs text-zinc-600">
          Credits are held until a reviewer completes your request. You have {balance}.
        </p>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={busy || Number(credits) > balance}
            className="bg-white hover:bg-zinc-100 text-black text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors disabled:opacity-60"
          >
            {busy ? <Loader2 size={16} className="animate-spin" /> : 'Post request'}
          </button>
        </div>
      </form>
    </section>
  );
}

// --- Submit-feedback box for a claimed review ----------------------------
function ReviewWorkbench({ review, onDone }) {
  const toast = useToast();
  const [feedback, setFeedback] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit() {
    setBusy(true);
    const { error } = await supabase.rpc('submit_review', {
      p_review_id: review.id,
      p_feedback: feedback,
    });
    setBusy(false);
    if (error) return toast(error.message);
    toast(`Review submitted — +${review.request?.credits ?? 0} credits earned!`);
    onDone();
  }

  return (
    <div className="mt-3 space-y-2">
      <textarea
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback…"
        className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-zinc-500 placeholder:text-zinc-600"
      />
      <div className="flex justify-end">
        <button
          onClick={submit}
          disabled={busy || !feedback.trim()}
          className="bg-white hover:bg-zinc-100 text-black text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-60"
        >
          {busy ? <Loader2 size={14} className="animate-spin" /> : <><Send size={13} /> Submit feedback</>}
        </button>
      </div>
    </div>
  );
}

function Stars({ value, onRate }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          disabled={!onRate}
          onClick={onRate ? () => onRate(n) : undefined}
          className={onRate ? 'cursor-pointer' : 'cursor-default'}
        >
          <Star
            size={15}
            className={n <= value ? 'text-white fill-white' : 'text-zinc-600'}
          />
        </button>
      ))}
    </div>
  );
}

export default function PeerReviewView() {
  const { user, profile, refreshProfile } = useAuth();
  const toast = useToast();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [myRequests, setMyRequests] = useState([]);

  const load = useCallback(async () => {
    const [openRes, reviewsRes, requestsRes] = await Promise.all([
      supabase
        .from('review_requests')
        .select('id, title, excerpt, word_count, credits, created_at, author:profiles!review_requests_author_id_fkey(full_name, discipline, native_language)')
        .eq('status', 'open')
        .neq('author_id', user.id)
        .order('created_at', { ascending: false }),
      supabase
        .from('reviews')
        .select('id, feedback, status, created_at, request:review_requests!reviews_request_id_fkey(title, excerpt, word_count, credits, author:profiles!review_requests_author_id_fkey(full_name))')
        .eq('reviewer_id', user.id)
        .order('created_at', { ascending: false }),
      supabase
        .from('review_requests')
        .select('id, title, status, credits, word_count, created_at, reviews(id, feedback, status, rating, reviewer:profiles!reviews_reviewer_id_fkey(full_name))')
        .eq('author_id', user.id)
        .order('created_at', { ascending: false }),
    ]);
    if (openRes.error) console.error(openRes.error.message);
    if (reviewsRes.error) console.error(reviewsRes.error.message);
    if (requestsRes.error) console.error(requestsRes.error.message);
    setOpen(openRes.data ?? []);
    setMyReviews(reviewsRes.data ?? []);
    setMyRequests(requestsRes.data ?? []);
    setLoading(false);
  }, [user.id]);

  useEffect(() => {
    load();
  }, [load]);

  async function refreshAll() {
    await Promise.all([load(), refreshProfile()]);
  }

  async function accept(requestId) {
    const { error } = await supabase.rpc('accept_review_request', { p_request_id: requestId });
    if (error) return toast(error.message);
    toast('Review accepted — find it under "My Reviews".');
    refreshAll();
  }

  async function cancel(requestId) {
    const { error } = await supabase.rpc('cancel_review_request', { p_request_id: requestId });
    if (error) return toast(error.message);
    toast('Request cancelled and credits refunded.');
    refreshAll();
  }

  async function rate(reviewId, rating) {
    const { error } = await supabase.rpc('rate_review', { p_review_id: reviewId, p_rating: rating });
    if (error) return toast(error.message);
    toast('Thanks for rating your reviewer!');
    load();
  }

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
          <span className="text-sm font-medium text-white">{profile?.credits ?? 0} credits</span>
        </div>
      </div>

      {showForm ? (
        <NewRequestForm
          balance={profile?.credits ?? 0}
          onClose={() => setShowForm(false)}
          onCreated={() => {
            setShowForm(false);
            refreshAll();
          }}
        />
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white rounded-2xl transition-colors text-sm font-medium"
        >
          <Plus size={16} /> Request a review on your writing
        </button>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 size={22} className="animate-spin text-zinc-600" />
        </div>
      ) : (
        <>
          {/* Open requests */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-white mb-5 flex items-center gap-2">
              <FileText size={18} /> Open Requests
            </h3>
            {open.length === 0 ? (
              <p className="text-sm text-zinc-500 py-2">
                No open requests right now. Check back soon — or post one of your own.
              </p>
            ) : (
              <div className="space-y-3">
                {open.map((req) => (
                  <div key={req.id} className="flex items-start gap-4 p-4 bg-black/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors">
                    <Avatar name={req.author?.full_name} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h4 className="text-sm font-medium text-white">{req.title}</h4>
                        <span className="text-xs text-zinc-500 shrink-0">{req.word_count.toLocaleString()} words</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {req.author?.full_name || 'A writer'}
                        {req.author?.discipline ? ` · ${req.author.discipline}` : ''}
                      </p>
                      <p className="text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-3">{req.excerpt}</p>
                      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                        <span className="flex items-center gap-1 text-xs text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-700">
                          <Coins size={11} /> +{req.credits} credits
                        </span>
                        <button
                          onClick={() => accept(req.id)}
                          className="text-xs font-medium px-3 py-1.5 bg-white hover:bg-zinc-100 text-black rounded-lg transition-colors"
                        >
                          Accept Review
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* My reviews (as reviewer) */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-white mb-5 flex items-center gap-2">
              <CheckCircle size={18} /> My Reviews
            </h3>
            {myReviews.length === 0 ? (
              <p className="text-sm text-zinc-500 py-2">
                You haven't accepted any reviews yet. Accepting a request earns you credits.
              </p>
            ) : (
              <div className="space-y-3">
                {myReviews.map((rev) => (
                  <div key={rev.id} className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-zinc-200">{rev.request?.title}</p>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        rev.status === 'submitted'
                          ? 'text-white bg-white/10 border border-white/20'
                          : 'text-zinc-400 bg-zinc-800'
                      }`}>
                        {rev.status === 'submitted' ? 'Submitted' : 'In progress'}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                      <Clock size={10} /> {timeAgo(rev.created_at)} · for {rev.request?.author?.full_name || 'a writer'}
                    </p>
                    {rev.status === 'in_progress' ? (
                      <>
                        {rev.request?.excerpt && (
                          <p className="text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-4 border-l-2 border-zinc-800 pl-3">
                            {rev.request.excerpt}
                          </p>
                        )}
                        <ReviewWorkbench review={rev} onDone={refreshAll} />
                      </>
                    ) : (
                      <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{rev.feedback}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* My requests (as author) */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-white mb-5 flex items-center gap-2">
              <FileText size={18} /> My Requests
            </h3>
            {myRequests.length === 0 ? (
              <p className="text-sm text-zinc-500 py-2">
                You haven't requested any reviews yet.
              </p>
            ) : (
              <div className="space-y-3">
                {myRequests.map((req) => {
                  const review = req.reviews?.[0];
                  return (
                    <div key={req.id} className="p-4 bg-black/50 border border-zinc-800/50 rounded-xl">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className="text-sm font-medium text-zinc-200">{req.title}</p>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-xs text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-700">
                            <Coins size={10} /> {req.credits}
                          </span>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${
                            req.status === 'completed'
                              ? 'text-white bg-white/10 border border-white/20'
                              : 'text-zinc-400 bg-zinc-800'
                          }`}>
                            {req.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                        <Clock size={10} /> {timeAgo(req.created_at)}
                      </p>

                      {req.status === 'open' && (
                        <button
                          onClick={() => cancel(req.id)}
                          className="text-xs text-zinc-400 hover:text-white mt-2 transition-colors"
                        >
                          Cancel & refund
                        </button>
                      )}

                      {review?.status === 'submitted' && (
                        <div className="mt-3 border-t border-zinc-800 pt-3">
                          <p className="text-xs text-zinc-500 mb-1">
                            Feedback from {review.reviewer?.full_name || 'your reviewer'}:
                          </p>
                          <p className="text-sm text-zinc-300 leading-relaxed">{review.feedback}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-xs text-zinc-500">
                              {review.rating ? 'Your rating:' : 'Rate this review:'}
                            </span>
                            <Stars
                              value={review.rating ?? 0}
                              onRate={review.rating ? null : (n) => rate(review.id, n)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
