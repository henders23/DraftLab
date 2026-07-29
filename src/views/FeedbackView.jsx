import React, { useEffect, useState, useCallback } from 'react';
import { Icon, Avatar, Btn, Chip } from '../components/CommonsUI';
import { useAuth } from '../context/AuthContext';
import { supabase, initialsOf, variantOf, timeAgo } from '../lib/supabase';

const GOOD_FEEDBACK_TIPS = [
  'Start with what works — momentum before correction.',
  'Be specific: point to the sentence, not the soul.',
  'End with one thing, not ten.',
];

function ReqItem({ r, on, mine, onClick }) {
  const author = r.profiles?.full_name || 'A member';
  return (
    <button className={`req-item${on ? ' on' : ''}${mine ? ' mine' : ''}`} onClick={onClick}>
      <div className="between" style={{ marginBottom: 9 }}>
        <span className="mono small muted" style={{ fontSize: 11 }}>{timeAgo(r.created_at)}</span>
        <span className="small" style={{ color: r.reviews?.length ? 'var(--brick)' : 'var(--muted)', fontWeight: 500 }}>
          {r.reviews?.length ?? 0} responses
        </span>
      </div>
      <div className="row gap-10" style={{ alignItems: 'flex-start' }}>
        <Avatar initials={initialsOf(author)} variant={variantOf(r.author_id)} size={30} />
        <div className="grow">
          <div className="serif" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>{r.title}</div>
          <div className="small muted" style={{ marginTop: 3 }}>{mine ? 'You' : author}{r.profiles?.discipline ? ` · ${r.profiles.discipline}` : ''}</div>
        </div>
      </div>
      {!mine && <div className="small" style={{ color: 'var(--ink-soft)', marginTop: 10, textAlign: 'right' }}>Give feedback →</div>}
    </button>
  );
}

function ResponseCard({ rv }) {
  const name = rv.profiles?.full_name || 'A member';
  const FIELDS = [
    ["What's working", rv.working, 'var(--brick)'],
    ["What's unclear", rv.unclear, 'var(--sand-deep)'],
    ['One suggestion', rv.suggestion, 'var(--ink-soft)'],
  ].filter(([, text]) => text);
  return (
    <div className="card card-pad">
      <div className="row gap-10 center" style={{ marginBottom: 14 }}>
        <Avatar initials={initialsOf(name)} variant={variantOf(rv.reviewer_id)} size={34} />
        <div className="small">
          <strong className="serif" style={{ fontSize: 15 }}>{name}</strong>
          {rv.profiles?.discipline && <span className="muted"> · {rv.profiles.discipline}</span>}
        </div>
        <span className="mono small muted" style={{ marginLeft: 'auto' }}>{timeAgo(rv.created_at)}</span>
      </div>
      <div className="col gap-14">
        {FIELDS.map(([label, text, c]) => (
          <div key={label}>
            <div className="gfield-label"><span className="dot" style={{ background: c }} />{label}</div>
            <p style={{ margin: 0, fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.5 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RequestForm({ me, onDone, onCancel }) {
  const [title, setTitle] = useState('');
  const [ask, setAsk] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  async function submit() {
    if (!title.trim() || !excerpt.trim()) { setError('A title and a passage are needed.'); return; }
    setBusy(true);
    setError(null);
    const words = excerpt.trim().split(/\s+/).length;
    const { error: err } = await supabase.from('review_requests').insert({
      author_id: me, title: title.trim(), ask: ask.trim(), excerpt: excerpt.trim(), word_count: words,
    });
    setBusy(false);
    if (err) { setError(err.message); return; }
    onDone();
  }

  return (
    <div className="card card-pad">
      <h3 className="serif h-sm" style={{ marginBottom: 4 }}>Share for feedback</h3>
      <p className="small muted" style={{ marginBottom: 16 }}>Tell readers what kind of response would help most.</p>
      <div className="col gap-14">
        <div>
          <div className="gfield-label"><span className="dot" style={{ background: 'var(--brick)' }} />Title</div>
          <textarea className="gtext" rows={1} placeholder="e.g. Chapter 3 — opening paragraphs" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <div className="gfield-label"><span className="dot" style={{ background: 'var(--sand-deep)' }} />The passage</div>
          <textarea className="gtext" rows={5} placeholder="Paste your draft excerpt…" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        </div>
        <div>
          <div className="gfield-label"><span className="dot" style={{ background: 'var(--ink-soft)' }} />What you'd like</div>
          <textarea className="gtext" rows={2} placeholder="e.g. is my argument clear?" value={ask} onChange={(e) => setAsk(e.target.value)} />
        </div>
      </div>
      {error && <p className="small" style={{ color: 'var(--brick-deep)', margin: '10px 0 0' }}>{error}</p>}
      <div className="row gap-10" style={{ justifyContent: 'flex-end', marginTop: 16 }}>
        <Btn variant="ghost" size="sm" onClick={onCancel}>Cancel</Btn>
        <Btn variant="primary" size="sm" iconR="arrow" onClick={submit} disabled={busy} style={busy ? { opacity: 0.6 } : {}}>
          {busy ? 'Posting…' : 'Post request'}
        </Btn>
      </div>
    </div>
  );
}

function RespondForm({ request, me, onDone }) {
  const [working, setWorking] = useState('');
  const [unclear, setUnclear] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  async function submit() {
    if (!working.trim() && !unclear.trim() && !suggestion.trim()) {
      setError('Write at least one of the three prompts.');
      return;
    }
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.from('reviews').insert({
      request_id: request.id,
      reviewer_id: me,
      working: working.trim() || null,
      unclear: unclear.trim() || null,
      suggestion: suggestion.trim() || null,
      feedback: [working, unclear, suggestion].filter(Boolean).join('\n\n'),
      status: 'submitted',
      completed_at: new Date().toISOString(),
    });
    setBusy(false);
    if (err) { setError(err.message); return; }
    setWorking(''); setUnclear(''); setSuggestion('');
    onDone();
  }

  return (
    <div className="card card-pad">
      <h3 className="serif h-sm" style={{ marginBottom: 4 }}>Your response</h3>
      <p className="small muted" style={{ marginBottom: 16 }}>Structured, kind, specific. Three quick prompts.</p>
      <div className="col gap-14">
        {[["What's working", working, setWorking, "Name one real strength…", 'var(--brick)'],
          ["What's unclear", unclear, setUnclear, 'Where did you stumble?', 'var(--sand-deep)'],
          ['One suggestion', suggestion, setSuggestion, 'A single concrete next step…', 'var(--ink-soft)']]
          .map(([label, val, set, ph, c]) => (
          <div key={label}>
            <div className="gfield-label"><span className="dot" style={{ background: c }} />{label}</div>
            <textarea className="gtext" placeholder={ph} rows={2} value={val} onChange={(e) => set(e.target.value)} />
          </div>
        ))}
      </div>
      {error && <p className="small" style={{ color: 'var(--brick-deep)', margin: '10px 0 0' }}>{error}</p>}
      <Btn variant="primary" block iconR="arrow" style={{ marginTop: 16 }} onClick={submit} disabled={busy}>
        {busy ? 'Sending…' : 'Send response'}
      </Btn>
    </div>
  );
}

export default function FeedbackView() {
  const { user } = useAuth();
  const [tab, setTab] = useState('All');
  const [requests, setRequests] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [responses, setResponses] = useState([]);
  const [composing, setComposing] = useState(false);
  const [stats, setStats] = useState({ given: 0, received: 0 });

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('review_requests')
      .select('*, profiles(full_name, discipline), reviews(id)')
      .eq('status', 'open')
      .order('created_at', { ascending: false });
    setRequests(data ?? []);
    if (user?.id) {
      const [{ count: given }, { data: myReqs }] = await Promise.all([
        supabase.from('reviews').select('id', { count: 'exact', head: true }).eq('reviewer_id', user.id),
        supabase.from('review_requests').select('reviews(id)').eq('author_id', user.id),
      ]);
      const received = (myReqs ?? []).reduce((n, r) => n + (r.reviews?.length ?? 0), 0);
      setStats({ given: given ?? 0, received });
    }
  }, [user?.id]);

  useEffect(() => { load(); }, [load]);

  const list = (requests ?? []).filter((r) =>
    tab === 'All' ? true : tab === 'Mine' ? r.author_id === user?.id : r.author_id !== user?.id
  );
  const active = (requests ?? []).find((r) => r.id === activeId) || list[0] || null;
  const isMine = active?.author_id === user?.id;

  useEffect(() => {
    if (!active?.id) { setResponses([]); return; }
    supabase
      .from('reviews')
      .select('*, profiles(full_name, discipline)')
      .eq('request_id', active.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => setResponses(data ?? []));
  }, [active?.id, requests]);

  const iRespondedAlready = responses.some((rv) => rv.reviewer_id === user?.id);

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      <header className="between" style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <div>
          <p className="eyebrow">Give and get response</p>
          <h1 className="display h-lg" style={{ marginTop: 12 }}>Feedback exchange</h1>
          <p className="lead" style={{ marginTop: 8, maxWidth: '48ch' }}>
            Drafts from across the Commons, waiting for a generous reader. Respond to one — it's how the Commons keeps giving back.
          </p>
        </div>
        <div className="card card-sand card-pad" style={{ minWidth: 268 }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Your exchange</p>
          <div className="between" style={{ marginBottom: 8 }}>
            <span className="small"><strong className="serif" style={{ fontSize: 20 }}>{stats.given}</strong> given</span>
            <span className="small"><strong className="serif" style={{ fontSize: 20 }}>{stats.received}</strong> received</span>
          </div>
          <p className="small muted" style={{ marginTop: 10 }}>Giving feedback keeps the exchange generous for everyone.</p>
        </div>
      </header>

      {requests === null ? (
        <div className="card card-pad" style={{ textAlign: 'center', padding: '56px 32px' }}>
          <span className="small muted">Loading the exchange…</span>
        </div>
      ) : !active && !composing ? (
        <div className="card card-pad" style={{ textAlign: 'center', padding: '64px 40px' }}>
          <Icon name="write" style={{ width: 32, height: 32, color: 'var(--sand-deep)' }} />
          <h2 className="serif h-md" style={{ margin: '16px 0 8px' }}>No drafts in the exchange yet</h2>
          <p className="lead muted" style={{ maxWidth: '44ch', margin: '0 auto 24px' }}>
            When members share drafts, they appear here for generous, structured response.
            Be the first — share a passage and say what kind of reading would help.
          </p>
          <Btn variant="primary" size="lg" icon="plus" onClick={() => setComposing(true)}>Request feedback</Btn>
          <div className="col gap-10" style={{ maxWidth: 360, margin: '32px auto 0', textAlign: 'left' }}>
            <p className="eyebrow" style={{ marginBottom: 4 }}>Good feedback here</p>
            {GOOD_FEEDBACK_TIPS.map((t, i) => (
              <div key={i} className="row gap-10" style={{ alignItems: 'flex-start' }}>
                <Icon name="check" sm style={{ color: 'var(--brick)', marginTop: 2 }} />
                <span className="small" style={{ color: 'var(--ink-soft)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 344px', gap: 26, alignItems: 'start' }}>
          {/* LEFT — queue */}
          <aside className="col gap-14" style={{ position: 'sticky', top: 88 }}>
            <Btn variant="primary" block icon="plus" onClick={() => setComposing(true)}>Request feedback</Btn>
            <div className="row gap-6 wrap-x">
              {['All', 'Others', 'Mine'].map((tb) => (
                <Chip key={tb} on={tab === tb} onClick={() => setTab(tb)}>{tb}</Chip>
              ))}
            </div>
            <div className="col gap-10">
              {list.map((r) => (
                <ReqItem key={r.id} r={r} on={r.id === active?.id && !composing} mine={r.author_id === user?.id}
                  onClick={() => { setActiveId(r.id); setComposing(false); }} />
              ))}
              {list.length === 0 && <span className="small muted">Nothing here yet.</span>}
            </div>
          </aside>

          {/* CENTER — the draft or the new request */}
          <main className="col gap-20">
            {composing ? (
              <RequestForm me={user?.id} onCancel={() => setComposing(false)}
                onDone={() => { setComposing(false); load(); }} />
            ) : active && (
              <>
                <article className="card card-pad" style={{ padding: 32 }}>
                  <div className="between" style={{ marginBottom: 18 }}>
                    <div className="row gap-14 center">
                      <Avatar initials={initialsOf(active.profiles?.full_name)} variant={variantOf(active.author_id)} size={44} />
                      <div>
                        <div className="serif" style={{ fontSize: 16, fontWeight: 600 }}>{isMine ? 'Your draft' : active.profiles?.full_name || 'A member'}</div>
                        <div className="small muted">
                          {active.profiles?.discipline ? `${active.profiles.discipline} · ` : ''}shared {timeAgo(active.created_at)}
                        </div>
                      </div>
                    </div>
                    <span className="mono small muted">{active.word_count} words</span>
                  </div>

                  <h2 className="display h-md" style={{ marginBottom: 16 }}>{active.title}</h2>

                  {active.ask && (
                    <div className="card" style={{ background: 'var(--brick-soft)', borderColor: 'var(--brick)', padding: '14px 18px', marginBottom: 24 }}>
                      <span className="mono small" style={{ color: 'var(--brick-deep)', letterSpacing: '0.04em' }}>THEY'RE ASKING</span>
                      <p className="serif italic" style={{ margin: '6px 0 0', fontSize: 17, color: 'var(--ink)' }}>"{active.ask}"</p>
                    </div>
                  )}

                  <div className="draft-body">
                    {active.excerpt.split(/\n\n+/).map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </article>

                <div className="col gap-14">
                  <div className="between">
                    <h3 className="serif h-sm">Responses · {responses.length}</h3>
                    <span className="small muted">Newest first</span>
                  </div>
                  {responses.length === 0 && (
                    <p className="small muted">No responses yet — yours could be the first.</p>
                  )}
                  {responses.map((rv) => <ResponseCard key={rv.id} rv={rv} />)}
                </div>
              </>
            )}
          </main>

          {/* RIGHT — compose */}
          <aside className="col gap-20" style={{ position: 'sticky', top: 88 }}>
            {!composing && active && !isMine && !iRespondedAlready && (
              <RespondForm request={active} me={user?.id} onDone={load} />
            )}
            {!composing && active && !isMine && iRespondedAlready && (
              <div className="card card-pad">
                <div className="row gap-10 center">
                  <Icon name="check" sm style={{ color: 'var(--brick)' }} />
                  <span className="small" style={{ color: 'var(--ink-soft)' }}>You've responded to this one. Thank you.</span>
                </div>
              </div>
            )}
            <div className="card card-pad">
              <p className="eyebrow" style={{ marginBottom: 12 }}>Good feedback here</p>
              <div className="col gap-10">
                {GOOD_FEEDBACK_TIPS.map((t, i) => (
                  <div key={i} className="row gap-10" style={{ alignItems: 'flex-start' }}>
                    <Icon name="check" sm style={{ color: 'var(--brick)', marginTop: 2 }} />
                    <span className="small" style={{ color: 'var(--ink-soft)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
