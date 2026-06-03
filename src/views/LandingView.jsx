import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Avatar, AvatarStack, Btn, Tag, Wordmark, DateBox, Cover } from '../components/CommonsUI';
import { PEOPLE, EVENTS, PLANS } from '../data/commons-data';

function MiniEvent({ ev }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/events')}
      className="card"
      style={{ overflow: 'hidden', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <div style={{ position: 'relative' }}>
        <Cover label={ev.cover} height={132} />
        <div style={{ position: 'absolute', top: 10, left: 10 }}><Tag variant="ink">{ev.type}</Tag></div>
      </div>
      <div className="card-pad" style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
        <DateBox mon={ev.mon} day={ev.day} />
        <div className="grow">
          <h4 className="serif" style={{ fontSize: 16.5, fontWeight: 600, lineHeight: 1.15, margin: 0 }}>{ev.title}</h4>
          <div className="mono small muted" style={{ margin: '5px 0 9px' }}>{ev.dow} {ev.time}</div>
          <AvatarStack people={PEOPLE.slice(0, 3)} size={22} extra={`+${ev.going}`} />
        </div>
      </div>
    </button>
  );
}

export default function LandingView() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      {/* DARK HERO */}
      <div style={{ background: 'var(--dark)', color: 'var(--dark-paper)', position: 'relative', overflow: 'hidden' }}>
        <div className="wrap">
          <div className="between" style={{ height: 78 }}>
            <Wordmark name="PGR Commons" onDark onClick={() => navigate('/home')} />
            <nav className="row gap-6 hide-md" style={{ alignItems: 'center' }}>
              {['Events', 'Pricing', 'About'].map((l) => (
                <a key={l} onClick={() => navigate(l === 'Events' ? '/events' : l === 'Pricing' ? '/pricing' : '/home')}
                   style={{ color: 'var(--dark-muted)', textDecoration: 'none', padding: '9px 14px', fontSize: 14.5, cursor: 'pointer' }}>{l}</a>
              ))}
            </nav>
            <div className="row gap-10 center">
              <Btn variant="ghost-dark" size="sm" onClick={() => navigate('/home')}>Sign in</Btn>
              <Btn variant="primary" size="sm" onClick={() => navigate('/home')}>Join</Btn>
            </div>
          </div>
        </div>

        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 56, alignItems: 'center', padding: '64px 28px 92px' }}>
          <div>
            <p className="eyebrow on-dark">A community for postgraduate researchers</p>
            <h1 className="display h-xl" style={{ marginTop: 22, color: 'var(--dark-paper)' }}>
              You are not<br />writing <span className="italic" style={{ color: 'var(--sand)' }}>alone.</span>
            </h1>
            <p className="lead" style={{ marginTop: 24, color: 'var(--dark-muted)', maxWidth: '42ch' }}>
              A calm, generous space where international PhD students write together, exchange
              feedback and learn the craft of doctoral research — across disciplines, time zones
              and first languages.
            </p>
            <div className="row gap-14 wrap-x" style={{ marginTop: 34 }}>
              <Btn variant="primary" size="lg" onClick={() => navigate('/home')}>Join PGR Commons</Btn>
              <Btn variant="ghost-dark" size="lg" iconR="arrow" onClick={() => navigate('/events')}>Browse this week's events</Btn>
            </div>
            <div className="row gap-14 center" style={{ marginTop: 38 }}>
              <AvatarStack people={PEOPLE} size={36} max={5} extra="800+" />
              <span className="small" style={{ color: 'var(--dark-muted)' }}>researchers · 30 programmes · 40 countries</span>
            </div>
          </div>

          <div style={{ position: 'relative', height: 440 }}>
            <div className="card" style={{ position: 'absolute', top: 8, right: 0, width: 290, overflow: 'hidden', transform: 'rotate(2deg)', boxShadow: 'var(--shadow-lg)' }}>
              <Cover label="people writing" height={134} />
              <div className="card-pad" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <DateBox mon="JUN" day="08" />
                <div className="grow">
                  <div className="mono small muted">Sat 10:00 · Sprint</div>
                  <div className="serif" style={{ fontWeight: 600, fontSize: 15.5, lineHeight: 1.1 }}>Silent writing sprint</div>
                </div>
              </div>
            </div>
            <div className="card card-sand card-pad" style={{ position: 'absolute', bottom: 36, left: 0, width: 280, transform: 'rotate(-2.5deg)', boxShadow: 'var(--shadow-lg)' }}>
              <div className="row gap-10 center" style={{ marginBottom: 10 }}>
                <Avatar initials="SD" variant={2} size={32} />
                <div className="small"><strong>Sofia</strong> <span className="muted">gave feedback</span></div>
              </div>
              <p className="serif italic" style={{ fontSize: 17, lineHeight: 1.35, margin: 0, color: 'var(--ink)' }}>
                "Your contribution is strong — just move it earlier so the reader meets it sooner."
              </p>
            </div>
            <div className="card" style={{ position: 'absolute', top: 188, right: 26, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, transform: 'rotate(1.5deg)', boxShadow: 'var(--shadow-md)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brick)', boxShadow: '0 0 0 4px var(--brick-soft)' }} />
              <AvatarStack people={PEOPLE.slice(2, 5)} size={24} />
              <span className="small" style={{ fontWeight: 600 }}>12 writing now</span>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT HAPPENS HERE */}
      <section className="wrap section">
        <div className="between" style={{ alignItems: 'flex-end', marginBottom: 44 }}>
          <h2 className="display h-lg" style={{ maxWidth: '16ch' }}>A few honest things you can do here.</h2>
          <p className="lead muted hide-md" style={{ maxWidth: '30ch' }}>No dashboards to decode. Three ways in, and people on the other side of each.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30 }}>
          {[
            { n: '01', t: 'Write together', b: 'Quiet writing rooms and weekly sprints. Show up, write beside others, and the blank page feels less like a wall.', warm: false },
            { n: '02', t: 'Exchange feedback', b: 'Share a draft and get generous, specific response from peers and tutors who know the doctoral road.', warm: false },
            { n: '03', t: 'Attend events', b: 'Workshops, talks and language sessions every week — practical craft, not abstract theory.', warm: true },
          ].map((c) => (
            <div key={c.n} className="card card-pad" style={{ padding: 30, borderColor: c.warm ? 'var(--brick)' : 'var(--line)', background: c.warm ? 'var(--brick-soft)' : 'var(--surface)' }}>
              <div className="between">
                <span className="serif" style={{ fontSize: 40, fontWeight: 500, color: c.warm ? 'var(--brick)' : 'var(--sand-deep)', lineHeight: 1 }}>{c.n}</span>
                {c.warm && <Tag variant="brick">your priority</Tag>}
              </div>
              <h3 className="serif h-sm" style={{ marginTop: 22 }}>{c.t}</h3>
              <p style={{ marginTop: 10, color: 'var(--ink-soft)' }}>{c.b}</p>
              <a onClick={() => navigate(c.warm ? '/events' : '/home')} className="row gap-6 center" style={{ marginTop: 16, color: 'var(--brick)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                {c.warm ? 'Browse events' : 'Step inside'} <Icon name="arrow" sm />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* THIS WEEK */}
      <section style={{ background: 'var(--surface-2)', borderTop: '1.5px solid var(--line-strong)', borderBottom: '1.5px solid var(--line-strong)' }}>
        <div className="wrap section">
          <div className="between" style={{ marginBottom: 34, alignItems: 'flex-end' }}>
            <div>
              <p className="eyebrow">Open to members</p>
              <h2 className="display h-lg" style={{ marginTop: 12 }}>This week in the Commons</h2>
            </div>
            <Btn variant="ghost" iconR="arrow" onClick={() => navigate('/events')}>See all events</Btn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {EVENTS.slice(0, 3).map((ev) => <MiniEvent key={ev.id} ev={ev} />)}
          </div>
        </div>
      </section>

      {/* QUOTE + STATS */}
      <section className="wrap section" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Icon name="spark" style={{ width: 34, height: 34, color: 'var(--brick)' }} />
          <blockquote className="display h-md italic" style={{ margin: '20px 0 0', fontWeight: 400, lineHeight: 1.25 }}>
            "I spent my first year thinking everyone else had it figured out. The Commons is where I found out they didn't either — and we got through it together."
          </blockquote>
          <div className="row gap-14 center" style={{ marginTop: 28 }}>
            <Avatar initials="RK" variant={4} size={46} />
            <div>
              <div className="serif" style={{ fontWeight: 600, fontSize: 16 }}>Ravi Krishnan</div>
              <div className="small muted">Public Health · 3rd year · joined 2024</div>
            </div>
          </div>
        </div>
        <div className="col gap-20">
          {[['40', 'countries represented'], ['120+', 'writing circles'], ['25', 'events each month']].map(([n, l]) => (
            <div key={l} className="card card-pad between" style={{ alignItems: 'center' }}>
              <span className="display h-md" style={{ color: 'var(--brick)' }}>{n}</span>
              <span className="small muted" style={{ maxWidth: '14ch', textAlign: 'right' }}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS TEASER */}
      <section className="wrap section" style={{ paddingTop: 30 }}>
        <div className="between" style={{ alignItems: 'flex-end', marginBottom: 34 }}>
          <div>
            <p className="eyebrow">Plans</p>
            <h2 className="display h-lg" style={{ marginTop: 12, maxWidth: '18ch' }}>Free to belong. Paid to go further.</h2>
          </div>
          <Btn variant="ghost" iconR="arrow" onClick={() => navigate('/pricing')}>Compare plans</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {PLANS.map((p) => (
            <div key={p.id} className="card card-pad" style={{ padding: 28, borderColor: p.highlight ? 'var(--brick)' : 'var(--line)' }}>
              <div className="between" style={{ marginBottom: 14 }}>
                <span className="mono" style={{ fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brick)' }}>{p.name}</span>
                {p.badge && <Tag variant="brick">{p.badge}</Tag>}
              </div>
              <div className="row" style={{ alignItems: 'baseline', gap: 7 }}>
                <span className="serif" style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em' }}>{p.price}</span>
                <span className="small muted">{p.per}</span>
              </div>
              <p className="small muted" style={{ margin: '8px 0 16px' }}>{p.tagline}</p>
              <div className="col gap-6">
                {p.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="row gap-10" style={{ alignItems: 'flex-start' }}>
                    <Icon name="check" sm style={{ color: 'var(--brick)', marginTop: 2 }} />
                    <span className="small" style={{ color: 'var(--ink)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN BAND */}
      <section style={{ background: 'var(--dark)', color: 'var(--dark-paper)' }}>
        <div className="wrap section" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
          <p className="eyebrow on-dark">It's free for postgraduate researchers</p>
          <h2 className="display h-xl" style={{ margin: '20px auto 0', maxWidth: '16ch', color: 'var(--dark-paper)' }}>
            Find your people. <span className="italic" style={{ color: 'var(--sand)' }}>Keep going.</span>
          </h2>
          <div className="row gap-10 center" style={{ justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <input placeholder="you@university.edu" aria-label="email"
              style={{ minHeight: 52, minWidth: 280, borderRadius: 999, border: '1.5px solid var(--dark-line)', background: 'var(--dark-2)', color: 'var(--dark-paper)', padding: '0 22px', fontFamily: 'var(--sans)', fontSize: 15, outline: 'none' }} />
            <Btn variant="primary" size="lg" onClick={() => navigate('/home')}>Join PGR Commons</Btn>
          </div>
          <p className="small" style={{ color: 'var(--dark-muted)', marginTop: 18 }}>
            Already a member? <a onClick={() => navigate('/home')} style={{ color: 'var(--sand)', cursor: 'pointer' }}>Sign in</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="wrap" style={{ padding: '40px 28px 56px' }}>
        <div className="between wrap-x" style={{ gap: 20 }}>
          <Wordmark name="PGR Commons" onClick={() => navigate('/home')} />
          <p className="small muted" style={{ maxWidth: '40ch' }}>A writing, language and learning community for international postgraduate researchers.</p>
          <div className="mono small muted">Community · Feedback · Events · Language · Success</div>
        </div>
      </footer>
    </div>
  );
}
