import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Avatar, Btn, Tag, DateBox } from '../components/CommonsUI';
import { useAuth } from '../context/AuthContext';
import { supabase, initialsOf, variantOf, eventLabels, timeAgo } from '../lib/supabase';

const KIND_META = {
  feedback: { tag: 'feedback', variant: 'brick', action: 'is asking for feedback' },
  win:      { tag: 'milestone', variant: 'ink', action: 'posted a milestone' },
  question: { tag: 'question', variant: '', action: 'asked the Commons' },
  note:     { tag: 'note', variant: '', action: 'shared with the Commons' },
  event:    { tag: 'event', variant: '', action: 'shared an event' },
};

function CompactEvent({ ev }) {
  const navigate = useNavigate();
  const l = eventLabels(ev.starts_at);
  return (
    <button
      onClick={() => navigate('/events')}
      className="card"
      style={{ display: 'flex', gap: 13, padding: 12, textAlign: 'left', cursor: 'pointer', width: '100%', alignItems: 'center', background: 'none' }}
    >
      <DateBox mon={l.mon} day={l.day} />
      <div className="grow">
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--muted)', letterSpacing: '0.05em' }}>
          {l.dow} {l.time} · {ev.type}
        </div>
        <div className="serif" style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.15, margin: '3px 0 6px' }}>{ev.title}</div>
        <div className="between">
          <span className="small muted">{ev.host_label}</span>
          <span className="tag brick">join</span>
        </div>
      </div>
    </button>
  );
}

function Post({ p, me, onDelete }) {
  const navigate = useNavigate();
  const meta = KIND_META[p.kind] || KIND_META.note;
  const author = p.profiles?.full_name || 'A member';

  return (
    <article className="post">
      <div className="row gap-14" style={{ alignItems: 'flex-start' }}>
        <Avatar initials={initialsOf(author)} variant={variantOf(p.author_id)} size={42} />
        <div className="grow">
          <div className="between" style={{ alignItems: 'baseline' }}>
            <div>
              <span className="serif" style={{ fontSize: 16, fontWeight: 600 }}>{author}</span>
              {p.profiles?.discipline && <span className="muted small"> · {p.profiles.discipline}</span>}
            </div>
            <span className="mono small muted">{timeAgo(p.created_at)}</span>
          </div>
          <div className="small" style={{ color: 'var(--ink-soft)', marginTop: 2 }}>
            <Tag variant={meta.variant} style={{ marginRight: 8 }}>{meta.tag}</Tag>
            {meta.action}
          </div>

          <p className="post-quote">{p.body}</p>

          <div className="post-actions">
            {p.kind === 'feedback' && (
              <span style={{ color: 'var(--brick)', fontWeight: 600 }} onClick={() => navigate('/feedback')}>
                <Icon name="write" sm />Give feedback
              </span>
            )}
            {p.author_id === me && (
              <span onClick={() => onDelete(p.id)} style={{ cursor: 'pointer' }}>Delete</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Composer({ onPosted }) {
  const { user, profile } = useAuth();
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('');
  const [kind, setKind] = useState('note');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  async function post() {
    if (!body.trim()) return;
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.from('posts').insert({ author_id: user.id, kind, body: body.trim() });
    setBusy(false);
    if (err) { setError(err.message); return; }
    setBody('');
    setOpen(false);
    onPosted();
  }

  return (
    <div className="card card-pad" style={{ marginBottom: 22 }}>
      <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
        <Avatar initials={initialsOf(profile?.full_name)} variant={variantOf(user?.id)} size={40} />
        {!open ? (
          <>
            <button className="searchpill grow" style={{ justifyContent: 'flex-start', minWidth: 0 }} onClick={() => setOpen(true)}>
              Share a draft, a win, or a question…
            </button>
            <Btn variant="primary" size="sm" icon="plus" onClick={() => setOpen(true)}>Post</Btn>
          </>
        ) : (
          <span className="serif" style={{ fontSize: 16, fontWeight: 600 }}>New post</span>
        )}
      </div>
      {open && (
        <div className="col gap-14" style={{ marginTop: 14 }}>
          <div className="row gap-6 wrap-x">
            {[['note', 'Share'], ['question', 'Question'], ['win', 'Milestone'], ['feedback', 'Feedback ask']].map(([k, label]) => (
              <button key={k} className={`chip${kind === k ? ' on' : ''}`} onClick={() => setKind(k)}>{label}</button>
            ))}
          </div>
          <textarea
            className="gtext" rows={3} autoFocus
            placeholder="What's on your mind? A milestone, a question, a passage you're wrestling with…"
            value={body} onChange={(e) => setBody(e.target.value)}
          />
          {error && <span className="small" style={{ color: 'var(--brick-deep)' }}>{error}</span>}
          <div className="row gap-10" style={{ justifyContent: 'flex-end' }}>
            <Btn variant="ghost" size="sm" onClick={() => { setOpen(false); setError(null); }}>Cancel</Btn>
            <Btn variant="primary" size="sm" iconR="arrow" onClick={post} disabled={busy || !body.trim()} style={busy || !body.trim() ? { opacity: 0.6 } : {}}>
              {busy ? 'Posting…' : 'Post'}
            </Btn>
          </div>
        </div>
      )}
    </div>
  );
}

function todayLabel() {
  return new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
}

function greeting(name) {
  const h = new Date().getHours();
  const base = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  const first = name ? name.trim().split(/\s+/)[0] : null;
  return first ? `${base}, ${first}.` : `${base}.`;
}

export default function HomeView() {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [feedFilter, setFeedFilter] = useState('All');
  const [posts, setPosts] = useState(null);
  const [events, setEvents] = useState([]);

  const loadPosts = useCallback(async () => {
    const { data } = await supabase
      .from('posts')
      .select('*, profiles(full_name, discipline)')
      .order('created_at', { ascending: false })
      .limit(30);
    setPosts(data ?? []);
  }, []);

  useEffect(() => {
    loadPosts();
    supabase
      .from('events')
      .select('*')
      .gte('starts_at', new Date().toISOString())
      .order('starts_at')
      .limit(3)
      .then(({ data }) => setEvents(data ?? []));
  }, [loadPosts]);

  async function deletePost(id) {
    await supabase.from('posts').delete().eq('id', id);
    loadPosts();
  }

  const FILTERS = { All: null, Questions: 'question', Milestones: 'win', 'Feedback asks': 'feedback' };
  const visible = (posts ?? []).filter((p) => !FILTERS[feedFilter] || p.kind === FILTERS[feedFilter]);

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      {/* greeting */}
      <header style={{ marginBottom: 30 }}>
        <p className="eyebrow">{todayLabel()}</p>
        <h1 className="display h-lg" style={{ marginTop: 12 }}>{greeting(profile?.full_name)}</h1>
        <p className="lead" style={{ marginTop: 10 }}>
          Welcome to the Commons — your writing community starts here.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '264px 1fr 296px', gap: 28, alignItems: 'start' }}>

        {/* LEFT: you */}
        <aside className="col gap-20" style={{ position: 'sticky', top: 90 }}>
          <div className="card card-sand card-pad">
            <p className="eyebrow">Your circle</p>
            <h3 className="serif h-sm" style={{ marginTop: 8 }}>Not matched yet</h3>
            <p className="small" style={{ color: 'var(--sand-deep)', margin: '10px 0 14px' }}>
              You'll be placed in a small circle of researchers at your stage, in your discipline.
            </p>
            <Btn variant="primary" block size="sm" onClick={() => navigate('/events')}>Find your circle</Btn>
          </div>

          <div className="card card-pad">
            <p className="eyebrow" style={{ marginBottom: 8 }}>Your discipline</p>
            <h3 className="serif h-sm">{profile?.discipline || 'Choose a community'}</h3>
            <p className="small muted" style={{ margin: '8px 0 12px' }}>
              {profile?.discipline
                ? 'Drafts and events from your disciplinary community.'
                : 'Join a disciplinary community to see relevant drafts and events.'}
            </p>
            <Btn variant="ghost" block size="sm" icon="globe" onClick={() => navigate('/feedback')}>Browse the exchange</Btn>
          </div>

          <div className="card card-pad">
            <p className="eyebrow">Your draft</p>
            <h3 className="serif h-sm" style={{ marginTop: 8 }}>Nothing here yet</h3>
            <p className="small muted" style={{ margin: '8px 0 0' }}>Share a passage in the feedback exchange to get a generous reading.</p>
            <Btn variant="ghost" block size="sm" icon="write" style={{ marginTop: 14 }} onClick={() => navigate('/feedback')}>Request feedback</Btn>
          </div>

          <div className="card card-pad" style={{ borderColor: 'var(--brick)', background: 'var(--brick-soft)' }}>
            <div className="row gap-10 center" style={{ marginBottom: 8 }}>
              <Icon name="spark" sm style={{ color: 'var(--brick)' }} />
              <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brick-deep)' }}>On the free plan</span>
            </div>
            <p className="small" style={{ color: 'var(--ink)', margin: '0 0 12px' }}>The free plan includes 2 events a month. Go unlimited for £39 — first week free.</p>
            <Btn variant="primary" block size="sm" onClick={() => navigate('/pricing')}>See plans</Btn>
          </div>
        </aside>

        {/* CENTER: feed */}
        <main>
          <Composer onPosted={loadPosts} />

          <div className="between" style={{ marginBottom: 14 }}>
            <h2 className="serif h-md">In the Commons</h2>
            <div className="row gap-6 wrap-x">
              {Object.keys(FILTERS).map((f) => (
                <button key={f} className={`chip${feedFilter === f ? ' on' : ''}`} onClick={() => setFeedFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          {posts === null ? (
            <div className="card card-pad" style={{ textAlign: 'center', padding: '56px 32px' }}>
              <span className="small muted">Loading the Commons…</span>
            </div>
          ) : visible.length > 0 ? (
            <div className="card" style={{ overflow: 'hidden' }}>
              {visible.map((p) => <Post key={p.id} p={p} me={user?.id} onDelete={deletePost} />)}
            </div>
          ) : (
            <div className="card card-pad" style={{ textAlign: 'center', padding: '56px 32px' }}>
              <Icon name="chat" style={{ width: 30, height: 30, color: 'var(--sand-deep)' }} />
              <h3 className="serif h-sm" style={{ margin: '14px 0 6px' }}>The Commons is quiet</h3>
              <p className="small muted" style={{ maxWidth: '38ch', margin: '0 auto' }}>
                No posts yet. Share a draft, a milestone, or a question — someone else is probably wondering the same thing.
              </p>
            </div>
          )}
        </main>

        {/* RIGHT: this week */}
        <aside className="col gap-20" style={{ position: 'sticky', top: 90 }}>
          <div className="between">
            <h3 className="serif h-sm">Coming up</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/events')}>See all</button>
          </div>
          <div className="col gap-14" style={{ marginTop: -6 }}>
            {events.map((ev) => <CompactEvent key={ev.id} ev={ev} />)}
            {events.length === 0 && <span className="small muted">No upcoming events scheduled.</span>}
          </div>

          <div className="card card-pad">
            <p className="eyebrow" style={{ marginBottom: 12 }}>Grow the Commons</p>
            <p className="small muted" style={{ margin: 0 }}>Know other postgraduate researchers? Invite them — circles work best with a few familiar faces.</p>
            <Btn variant="ghost" block size="sm" icon="users" style={{ marginTop: 12 }}>Invite a colleague</Btn>
          </div>
        </aside>
      </div>
    </div>
  );
}
