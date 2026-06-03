import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Avatar, Btn, Tag, DateBox } from '../components/CommonsUI';
import { MENTOR, SLOTS, SESSIONS, FEEDBACK } from '../data/commons-data';

function MentorProfile({ m }) {
  return (
    <div className="card card-pad">
      <div className="row gap-14" style={{ alignItems: 'center', marginBottom: 16 }}>
        <Avatar initials={m.i} variant={m.v} size={58} />
        <div>
          <h3 className="serif" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.1, margin: 0 }}>{m.name}</h3>
          <p className="small muted" style={{ margin: '4px 0 0' }}>{m.role}</p>
        </div>
      </div>
      <div className="row gap-20 wrap-x" style={{ marginBottom: 16 }}>
        <span className="row gap-6 center" style={{ color: 'var(--brick)' }}>
          <Icon name="spark" sm />
          <span className="small" style={{ fontWeight: 600, color: 'var(--ink)' }}>{m.rating}</span>
        </span>
        <span className="small muted">{m.sessions} sessions</span>
      </div>
      <hr className="rule" style={{ margin: '0 0 16px' }} />
      <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.55, margin: '0 0 16px' }}>{m.bio}</p>
      <div className="col gap-10">
        {[['pin', m.field], ['clock', m.cadence], ['globe', m.langs.join(' · ')]].map(([ic, txt]) => (
          <div key={txt} className="row gap-10" style={{ alignItems: 'center' }}>
            <Icon name={ic} sm style={{ color: 'var(--sand-deep)' }} />
            <span className="small" style={{ color: 'var(--ink-soft)' }}>{txt}</span>
          </div>
        ))}
      </div>
      <div className="card card-sand" style={{ padding: 13, marginTop: 16, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <Icon name="users" sm style={{ color: 'var(--brick)', marginTop: 2 }} />
        <span className="small" style={{ color: 'var(--ink-soft)' }}>Matched to you from your discipline — <strong>Education &amp; Social Sciences</strong>.</span>
      </div>
    </div>
  );
}

function SessionTimeline() {
  return (
    <div className="card card-pad">
      <div className="between" style={{ marginBottom: 18 }}>
        <h3 className="serif h-sm">Your sessions</h3>
        <span className="mono small muted">fortnightly</span>
      </div>
      <div className="col">
        {SESSIONS.map((s, i) => (
          <div className="sess-item" key={i}>
            <div className="sess-rail">
              <span className={`sess-dot${s.when === 'Past' ? ' done' : ''}`} />
              {i < SESSIONS.length - 1 && <span className="sess-line" />}
            </div>
            <div style={{ paddingBottom: i < SESSIONS.length - 1 ? 22 : 0, flex: 1 }}>
              <div className="between">
                <span className="mono small" style={{ color: s.when === 'Upcoming' ? 'var(--brick)' : 'var(--muted)', letterSpacing: '0.04em' }}>
                  {s.when === 'Upcoming' ? 'NEXT · ' : ''}{s.date} · {s.time}
                </span>
                {s.when === 'Upcoming'
                  ? <Tag variant="brick">confirmed</Tag>
                  : <span className="small muted">done</span>}
              </div>
              <div className="serif" style={{ fontSize: 16, fontWeight: 600, margin: '4px 0 0' }}>{s.topic}</div>
              {s.note && (
                <p className="serif italic" style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: '8px 0 0', paddingLeft: 12, borderLeft: '3px solid var(--sand)' }}>
                  "{s.note}"
                </p>
              )}
              {s.when === 'Upcoming' && (
                <div className="row gap-10" style={{ marginTop: 12 }}>
                  <Btn variant="primary" size="sm" icon="globe">Join call</Btn>
                  <Btn variant="ghost" size="sm">Reschedule</Btn>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MentorView() {
  const navigate = useNavigate();
  const [dateIdx, setDateIdx] = useState(0);
  const [time, setTime] = useState(null);
  const [attach, setAttach] = useState('fb-mine');
  const [confirmed, setConfirmed] = useState(false);

  const activeDate = SLOTS[dateIdx];
  const isPremium = true; // demo: always premium

  if (!isPremium) {
    return (
      <div className="screen wrap" style={{ paddingTop: 70, paddingBottom: 90, maxWidth: 760, textAlign: 'center' }}>
        <span className="prem-ribbon"><Icon name="spark" sm /> Premium</span>
        <h1 className="display h-xl" style={{ margin: '22px auto 0' }}>1-to-1 mentoring</h1>
        <p className="lead" style={{ margin: '18px auto 0', maxWidth: '46ch' }}>
          A fortnightly 45-minute session with a mentor from your discipline, plus expert feedback on your writing. Available on the Premium plan.
        </p>
        <div className="row gap-14 center" style={{ justifyContent: 'center', marginTop: 32 }}>
          <Btn variant="primary" size="lg" onClick={() => navigate('/pricing')}>See Premium · £89/mo</Btn>
          <Btn variant="ghost" size="lg" onClick={() => navigate('/pricing')}>Start free week</Btn>
        </div>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="screen wrap" style={{ paddingTop: 70, paddingBottom: 90, maxWidth: 620, textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brick-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
          <Icon name="check" style={{ width: 30, height: 30, color: 'var(--brick)' }} />
        </div>
        <h1 className="display h-lg" style={{ margin: '22px auto 0' }}>You're booked in.</h1>
        <p className="lead" style={{ margin: '14px auto 0', maxWidth: '40ch' }}>
          {activeDate.date} at {time} with {MENTOR.name}. We've added it to your calendar and shared your draft ahead of time.
        </p>
        <div className="card card-pad" style={{ textAlign: 'left', marginTop: 28, display: 'flex', gap: 16, alignItems: 'center' }}>
          <DateBox mon="JUN" day={activeDate.day} />
          <div className="grow">
            <div className="serif" style={{ fontSize: 17, fontWeight: 600 }}>45-min 1-to-1 · {time}</div>
            <div className="small muted" style={{ marginTop: 3 }}>Sharing: "{FEEDBACK.find((f) => f.id === attach)?.title || 'No draft'}"</div>
          </div>
          <Icon name="globe" style={{ color: 'var(--sand-deep)' }} />
        </div>
        <div className="row gap-14 center" style={{ justifyContent: 'center', marginTop: 24 }}>
          <Btn variant="ghost" onClick={() => setConfirmed(false)}>Manage booking</Btn>
          <Btn variant="primary" onClick={() => navigate('/home')}>Back to the Commons</Btn>
        </div>
      </div>
    );
  }

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      <header style={{ marginBottom: 30 }}>
        <span className="prem-ribbon"><Icon name="spark" sm /> Premium</span>
        <h1 className="display h-lg" style={{ marginTop: 16 }}>Book your 1-to-1</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: '50ch' }}>
          Forty-five focused minutes with your mentor, every fortnight. Bring a draft and we'll send it ahead so the time is all yours.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
        <aside className="col gap-20" style={{ position: 'sticky', top: 88 }}>
          <MentorProfile m={MENTOR} />
        </aside>

        <main className="col gap-20">
          {/* step 1 + 2 */}
          <section className="card card-pad" style={{ padding: 28 }}>
            <div className="row gap-10 center" style={{ marginBottom: 16 }}>
              <span className="serif" style={{ fontSize: 22, color: 'var(--sand-deep)' }}>1</span>
              <h2 className="serif h-sm">Choose a day</h2>
            </div>
            <div className="slot-dates">
              {SLOTS.map((s, i) => {
                const empty = s.times.length === 0;
                return (
                  <button key={i} className={`slot-date${i === dateIdx && !empty ? ' on' : ''}${empty ? ' empty' : ''}`}
                    onClick={() => { if (!empty) { setDateIdx(i); setTime(null); } }}>
                    <div className="dow">{s.dow}</div>
                    <div className="d">{s.day}</div>
                    <div className="n">{empty ? 'full' : `${s.times.length} open`}</div>
                  </button>
                );
              })}
            </div>

            <div className="row gap-10 center" style={{ margin: '26px 0 16px' }}>
              <span className="serif" style={{ fontSize: 22, color: 'var(--sand-deep)' }}>2</span>
              <h2 className="serif h-sm">Pick a time</h2>
              <span className="small muted">· {activeDate.date} · your timezone (GMT+1)</span>
            </div>
            <div className="slot-times">
              {activeDate.times.map((tm) => (
                <button key={tm} className={`slot-time${time === tm ? ' on' : ''}`} onClick={() => setTime(tm)}>{tm}</button>
              ))}
            </div>
          </section>

          {/* step 3 */}
          <section className="card card-pad" style={{ padding: 28 }}>
            <div className="row gap-10 center" style={{ marginBottom: 6 }}>
              <span className="serif" style={{ fontSize: 22, color: 'var(--sand-deep)' }}>3</span>
              <h2 className="serif h-sm">Bring a draft</h2>
            </div>
            <p className="small muted" style={{ margin: '0 0 16px' }}>Your mentor reads it before the call, so feedback starts the moment you meet.</p>
            <div className="col gap-10">
              {FEEDBACK.filter((f) => f.mine || f.id === 'fb-ravi').map((f) => (
                <button key={f.id} className={`attach-opt${attach === f.id ? ' on' : ''}`} onClick={() => setAttach(f.id)}>
                  <span className="radio" />
                  <Icon name="write" sm style={{ color: 'var(--ink-soft)' }} />
                  <div className="grow">
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{f.title}</div>
                    <div className="small muted">{f.field} · {f.mine ? 'your draft' : 'shared with you'}</div>
                  </div>
                </button>
              ))}
              <button className={`attach-opt${attach === 'none' ? ' on' : ''}`} onClick={() => setAttach('none')}>
                <span className="radio" />
                <Icon name="chat" sm style={{ color: 'var(--ink-soft)' }} />
                <div className="grow">
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Just talk it through</div>
                  <div className="small muted">No draft — bring a question instead</div>
                </div>
              </button>
            </div>
            <div style={{ marginTop: 16 }}>
              <div className="gfield-label"><span className="dot" style={{ background: 'var(--brick)' }} />Anything your mentor should know? <span style={{ color: 'var(--faint)', textTransform: 'none', letterSpacing: 0 }}>(optional)</span></div>
              <textarea className="gtext" rows={2} placeholder="e.g. I'm stuck on how to open the chapter…" />
            </div>
          </section>

          {/* confirm bar */}
          <div className="card card-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, padding: '20px 28px', position: 'sticky', bottom: 16, boxShadow: 'var(--shadow-md)' }}>
            <div>
              <div className="mono small muted">YOUR SESSION</div>
              <div className="serif" style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>
                {time ? `${activeDate.date} · ${time}` : 'Pick a day and time'}
                <span className="small muted" style={{ fontWeight: 400 }}> · 45 min with {MENTOR.name.split(' ').slice(-1)}</span>
              </div>
            </div>
            <Btn variant="primary" size="lg" iconR="arrow"
              onClick={() => time && setConfirmed(true)}
              style={!time ? { opacity: 0.5, pointerEvents: 'none' } : {}}>
              Confirm booking
            </Btn>
          </div>

          <SessionTimeline />
        </main>
      </div>
    </div>
  );
}
