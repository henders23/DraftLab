import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Avatar, AvatarStack, Btn, Tag } from '../components/CommonsUI';
import { PEOPLE, EVENTS, FEED } from '../data/commons-data';

function DateBox({ mon, day }) {
  return (
    <div className="datebox">
      <div className="mon">{mon}</div>
      <div className="day">{day}</div>
    </div>
  );
}

function CompactEvent({ ev }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/events')}
      className="card"
      style={{ display: 'flex', gap: 13, padding: 12, textAlign: 'left', cursor: 'pointer', width: '100%', alignItems: 'center', background: 'none' }}
    >
      <DateBox mon={ev.mon} day={ev.day} />
      <div className="grow">
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--muted)', letterSpacing: '0.05em' }}>
          {ev.dow} {ev.time} · {ev.type}
        </div>
        <div className="serif" style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.15, margin: '3px 0 6px' }}>{ev.title}</div>
        <div className="between">
          <AvatarStack people={PEOPLE.slice(0, 3)} size={20} extra={`+${ev.going}`} />
          <span className="tag brick">join</span>
        </div>
      </div>
    </button>
  );
}

function Post({ p }) {
  const navigate = useNavigate();
  const ev = p.eventId ? EVENTS.find((e) => e.id === p.eventId) : null;
  const kindTag = { feedback: 'feedback', event: 'event', win: 'milestone', question: 'question' }[p.kind];

  return (
    <article className="post">
      <div className="row gap-14" style={{ alignItems: 'flex-start' }}>
        <Avatar initials={p.i} variant={p.v} size={42} />
        <div className="grow">
          <div className="between" style={{ alignItems: 'baseline' }}>
            <div>
              <span className="serif" style={{ fontSize: 16, fontWeight: 600 }}>{p.who}</span>
              <span className="muted small"> · {p.field}</span>
            </div>
            <span className="mono small muted">{p.time}</span>
          </div>
          <div className="small" style={{ color: 'var(--ink-soft)', marginTop: 2 }}>
            <Tag variant={p.kind === 'feedback' ? 'brick' : p.kind === 'win' ? 'ink' : ''} style={{ marginRight: 8 }}>{kindTag}</Tag>
            {p.action}
          </div>

          {p.quote && <p className="post-quote">{p.quote}</p>}

          {ev && (
            <div className="card card-sand" style={{ display: 'flex', gap: 13, padding: 13, margin: '12px 0 14px', alignItems: 'center' }}>
              <DateBox mon={ev.mon} day={ev.day} />
              <div className="grow">
                <div className="mono small muted">{ev.dow} {ev.time} · {ev.len}</div>
                <div className="serif" style={{ fontSize: 16, fontWeight: 600 }}>{ev.title}</div>
              </div>
              <Btn variant="primary" size="sm" onClick={() => navigate('/events')}>Join</Btn>
            </div>
          )}

          {p.meta && <div className="mono small muted" style={{ marginBottom: 12 }}>{p.meta}</div>}

          <div className="post-actions">
            <span><Icon name="heart" sm />{p.likes}</span>
            <span><Icon name="chat" sm />{p.replies}</span>
            {p.kind === 'feedback'
              ? <span style={{ color: 'var(--brick)', fontWeight: 600 }} onClick={() => navigate('/feedback')}><Icon name="write" sm />Give feedback</span>
              : <span><Icon name="arrow" sm />Open</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HomeView() {
  const navigate = useNavigate();
  const [feedFilter, setFeedFilter] = useState('Your circle');

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      {/* greeting */}
      <header style={{ marginBottom: 30 }}>
        <p className="eyebrow">Tuesday · 3 June</p>
        <h1 className="display h-lg" style={{ marginTop: 12 }}>Good morning, Mei.</h1>
        <p className="lead" style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brick)', display: 'inline-block', boxShadow: '0 0 0 4px var(--brick-soft)' }} />
          Three people in your circle are writing right now.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '264px 1fr 296px', gap: 28, alignItems: 'start' }}>

        {/* LEFT: you */}
        <aside className="col gap-20" style={{ position: 'sticky', top: 90 }}>
          <div className="card card-sand card-pad">
            <p className="eyebrow">Your circle</p>
            <h3 className="serif h-sm" style={{ marginTop: 8 }}>Education — Year 2</h3>
            <div style={{ margin: '14px 0 12px' }}>
              <AvatarStack people={PEOPLE.slice(0, 5)} size={34} extra="+7" />
            </div>
            <div className="small" style={{ color: 'var(--sand-deep)', display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <Icon name="calendar" sm /> Next meet · Wed 16:00
            </div>
            <Btn variant="primary" block size="sm" onClick={() => navigate('/events')}>Open circle</Btn>
          </div>

          <div className="card card-pad">
            <div className="between" style={{ marginBottom: 8 }}>
              <p className="eyebrow">Your discipline</p>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--sand-deep)', boxShadow: '0 0 0 3px var(--sand-soft)' }} />
            </div>
            <h3 className="serif h-sm">Education &amp; Social Sciences</h3>
            <p className="small muted" style={{ margin: '8px 0 12px' }}>2,400 researchers · 184 online now</p>
            <Btn variant="ghost" block size="sm" icon="globe" onClick={() => navigate('/feedback')}>Browse discipline</Btn>
          </div>

          <div className="card card-pad">
            <p className="eyebrow">Your draft</p>
            <h3 className="serif h-sm" style={{ marginTop: 8 }}>Chapter 3 — Methodology</h3>
            <div style={{ height: 7, borderRadius: 99, background: 'var(--surface-3)', margin: '14px 0 8px', overflow: 'hidden' }}>
              <div style={{ width: '64%', height: '100%', background: 'var(--brick)', borderRadius: 99 }} />
            </div>
            <div className="small muted">64% of your weekly goal · edited 2 days ago</div>
            <Btn variant="ghost" block size="sm" icon="write" style={{ marginTop: 14 }}>Resume writing</Btn>
          </div>

          <div className="card card-pad">
            <p className="eyebrow" style={{ marginBottom: 14 }}>Your week</p>
            <div className="col gap-14">
              {[['Writing time', '4h 20m'], ['Events joined', '2'], ['Feedback given', '3']].map(([k, v]) => (
                <div key={k} className="between">
                  <span className="small muted">{k}</span>
                  <span className="serif" style={{ fontSize: 19, fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-pad" style={{ borderColor: 'var(--brick)', background: 'var(--brick-soft)' }}>
            <div className="row gap-10 center" style={{ marginBottom: 8 }}>
              <Icon name="spark" sm style={{ color: 'var(--brick)' }} />
              <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brick-deep)' }}>On the free plan</span>
            </div>
            <p className="small" style={{ color: 'var(--ink)', margin: '0 0 12px' }}>You've used 2 of 2 events this month. Go unlimited for £39 — first week free.</p>
            <Btn variant="primary" block size="sm" onClick={() => navigate('/pricing')}>See plans</Btn>
          </div>
        </aside>

        {/* CENTER: feed */}
        <main>
          <div className="card card-pad" style={{ display: 'flex', gap: 13, alignItems: 'center', marginBottom: 22 }}>
            <Avatar initials="MZ" variant={0} size={40} />
            <button className="searchpill grow" style={{ justifyContent: 'flex-start', minWidth: 0 }}>
              Share a draft, a win, or a question…
            </button>
            <Btn variant="primary" size="sm" icon="plus">Post</Btn>
          </div>

          <div className="between" style={{ marginBottom: 14 }}>
            <h2 className="serif h-md">In the Commons</h2>
            <div className="row gap-6 wrap-x">
              {['Your circle', 'Discipline', 'All'].map((f) => (
                <button key={f} className={`chip${feedFilter === f ? ' on' : ''}`} onClick={() => setFeedFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          <div className="card" style={{ overflow: 'hidden' }}>
            {FEED.map((p, i) => <Post key={i} p={p} />)}
          </div>
        </main>

        {/* RIGHT: this week */}
        <aside className="col gap-20" style={{ position: 'sticky', top: 90 }}>
          <div className="between">
            <h3 className="serif h-sm">This week</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/events')}>See all</button>
          </div>
          <div className="col gap-14" style={{ marginTop: -6 }}>
            {EVENTS.slice(0, 3).map((ev) => <CompactEvent key={ev.id} ev={ev} />)}
          </div>

          <div className="card card-pad">
            <p className="eyebrow" style={{ marginBottom: 12 }}>New in your circle</p>
            <div className="row gap-10" style={{ alignItems: 'center' }}>
              <AvatarStack people={PEOPLE.slice(3, 7)} size={32} extra="+2" />
            </div>
            <p className="small muted" style={{ marginTop: 12 }}>Two researchers from Public Health joined this week. Say hello?</p>
            <Btn variant="ghost" block size="sm" icon="users" style={{ marginTop: 12 }}>Welcome them</Btn>
          </div>
        </aside>
      </div>
    </div>
  );
}
