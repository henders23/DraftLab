import React, { useEffect, useState, useCallback } from 'react';
import { Icon, Avatar, Btn, Tag, Chip, DateBox, Cover } from '../components/CommonsUI';
import { useAuth } from '../context/AuthContext';
import { supabase, initialsOf, eventLabels } from '../lib/supabase';

const EVENT_TYPES = ['Workshop', 'Writing sprint', 'Talk', 'Language', 'Drop-in'];

function JoinButton({ ev, me, onChange, size = 'sm' }) {
  const [busy, setBusy] = useState(false);
  const joined = ev.signups?.some((s) => s.user_id === me);

  async function toggle() {
    setBusy(true);
    if (joined) {
      await supabase.from('event_signups').delete().eq('event_id', ev.id).eq('user_id', me);
    } else {
      await supabase.from('event_signups').insert({ event_id: ev.id, user_id: me });
    }
    setBusy(false);
    onChange();
  }

  return (
    <Btn variant={joined ? 'ghost' : 'primary'} size={size} iconR={joined ? undefined : 'arrow'} icon={joined ? 'check' : undefined}
      onClick={toggle} disabled={busy} style={busy ? { opacity: 0.6 } : {}}>
      {joined ? 'Going' : size === 'sm' ? 'Join' : 'Join event'}
    </Btn>
  );
}

function goingLabel(ev) {
  const n = ev.signups?.length ?? 0;
  return n > 0 ? `${n} going` : 'Be the first to join';
}

function EventCard({ ev, me, onChange }) {
  const l = eventLabels(ev.starts_at);
  return (
    <article className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <Cover label={ev.cover_label} height={150} />
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <Tag variant="ink">{ev.type}</Tag>
        </div>
      </div>
      <div className="card-pad" style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div className="row gap-14" style={{ alignItems: 'flex-start' }}>
          <DateBox mon={l.mon} day={l.day} />
          <div className="grow">
            <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.15, margin: 0 }}>{ev.title}</h3>
            <div className="mono small muted" style={{ marginTop: 5 }}>{l.dow} {l.time} · {ev.duration_label}</div>
          </div>
        </div>
        <div className="small" style={{ color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar initials={initialsOf(ev.host_label)} size={22} variant={parseInt(l.day, 10) % 5} />
          {ev.host_label}
        </div>
        <div style={{ flex: 1 }} />
        <hr className="rule" />
        <div className="between" style={{ marginTop: 2 }}>
          <span className="small muted">{goingLabel(ev)}</span>
          <JoinButton ev={ev} me={me} onChange={onChange} />
        </div>
      </div>
    </article>
  );
}

function HostModal({ me, onClose, onCreated }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(EVENT_TYPES[0]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00');
  const [duration, setDuration] = useState('60 min');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const { profile } = useAuth();

  async function create() {
    if (!title.trim() || !date) { setError('A title and date are needed.'); return; }
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.from('events').insert({
      title: title.trim(),
      type,
      starts_at: new Date(`${date}T${time}`).toISOString(),
      duration_label: duration,
      host_label: profile?.full_name || 'A member',
      cover_label: `${type.toLowerCase()} photo`,
      created_by: me,
    });
    setBusy(false);
    if (err) { setError(err.message); return; }
    onCreated();
    onClose();
  }

  const field = {
    width: '100%', minHeight: 44, borderRadius: 10, border: '1.5px solid var(--line-strong)',
    background: 'var(--surface)', color: 'var(--ink)', padding: '0 14px',
    fontFamily: 'var(--sans)', fontSize: 14.5, outline: 'none',
  };

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(30,25,20,0.4)' }} />
      <div className="card card-pad" style={{ position: 'fixed', zIndex: 61, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(460px, 92vw)', padding: 28, boxShadow: 'var(--shadow-lg)' }}>
        <h3 className="serif h-md" style={{ marginBottom: 4 }}>Host an event</h3>
        <p className="small muted" style={{ marginBottom: 18 }}>Open to every member of the Commons.</p>
        <div className="col gap-14">
          <div>
            <div className="gfield-label"><span className="dot" style={{ background: 'var(--brick)' }} />Title</div>
            <input style={field} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Sunday writing sprint" />
          </div>
          <div className="row gap-10">
            <div className="grow">
              <div className="gfield-label"><span className="dot" style={{ background: 'var(--sand-deep)' }} />Type</div>
              <select style={{ ...field, appearance: 'auto' }} value={type} onChange={(e) => setType(e.target.value)}>
                {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="grow">
              <div className="gfield-label"><span className="dot" style={{ background: 'var(--ink-soft)' }} />Length</div>
              <select style={{ ...field, appearance: 'auto' }} value={duration} onChange={(e) => setDuration(e.target.value)}>
                {['30 min', '45 min', '60 min', '90 min', '2 hours', 'Drop-in'].map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
          </div>
          <div className="row gap-10">
            <div className="grow">
              <div className="gfield-label"><span className="dot" style={{ background: 'var(--ink-soft)' }} />Date</div>
              <input style={field} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="grow">
              <div className="gfield-label"><span className="dot" style={{ background: 'var(--ink-soft)' }} />Time</div>
              <input style={field} type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          {error && <span className="small" style={{ color: 'var(--brick-deep)' }}>{error}</span>}
          <div className="row gap-10" style={{ justifyContent: 'flex-end', marginTop: 4 }}>
            <Btn variant="ghost" size="sm" onClick={onClose}>Cancel</Btn>
            <Btn variant="primary" size="sm" iconR="arrow" onClick={create} disabled={busy} style={busy ? { opacity: 0.6 } : {}}>
              {busy ? 'Creating…' : 'Create event'}
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}

export default function EventsView() {
  const { user } = useAuth();
  const FILTERS = ['All upcoming', ...EVENT_TYPES];
  const [active, setActive] = useState('All upcoming');
  const [events, setEvents] = useState(null);
  const [hosting, setHosting] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('events')
      .select('*, signups:event_signups(user_id)')
      .gte('starts_at', new Date(Date.now() - 3 * 3600 * 1000).toISOString())
      .order('starts_at');
    setEvents(data ?? []);
  }, []);

  useEffect(() => { load(); }, [load]);

  const list = (events ?? []).filter((ev) => active === 'All upcoming' || ev.type === active);
  const featured = list[0];
  const rest = list.slice(1);
  const fl = featured ? eventLabels(featured.starts_at) : null;

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      <header className="between" style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <div>
          <p className="eyebrow">Learning · this week &amp; beyond</p>
          <h1 className="display h-lg" style={{ marginTop: 12 }}>Events</h1>
          <p className="lead" style={{ marginTop: 8, maxWidth: '46ch' }}>
            Workshops, writing sprints and talks run by researchers and tutors across the Commons.
          </p>
        </div>
        <Btn variant="ghost" icon="plus" onClick={() => setHosting(true)}>Host an event</Btn>
      </header>

      {events === null ? (
        <div className="card card-pad" style={{ textAlign: 'center', padding: '56px 32px' }}>
          <span className="small muted">Loading events…</span>
        </div>
      ) : (
        <>
          {featured && (
            <section className="card" style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.05fr 1fr', marginBottom: 34 }}>
              <Cover label={featured.cover_label} height={340} radius={0} />
              <div className="card-pad" style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="row gap-10" style={{ marginBottom: 16 }}>
                  <Tag variant="brick">Next up · {featured.type}</Tag>
                </div>
                <h2 className="display h-md">{featured.title}</h2>
                <div className="row gap-20 wrap-x" style={{ margin: '20px 0 22px', color: 'var(--ink-soft)' }}>
                  <span className="row gap-6 center small"><Icon name="calendar" sm /> {fl.dateLabel} · {fl.time}</span>
                  <span className="row gap-6 center small"><Icon name="clock" sm /> {featured.duration_label}</span>
                  <span className="row gap-6 center small"><Icon name="globe" sm /> Online</span>
                </div>
                <div className="row gap-10 center" style={{ marginBottom: 24 }}>
                  <Avatar initials={initialsOf(featured.host_label)} variant={1} size={36} />
                  <div className="small">
                    <div style={{ fontWeight: 600 }}>{featured.host_label}</div>
                  </div>
                </div>
                <div className="between">
                  <span className="small muted">{goingLabel(featured)}</span>
                  <div className="row gap-10">
                    <JoinButton ev={featured} me={user?.id} onChange={load} size="" />
                  </div>
                </div>
              </div>
            </section>
          )}

          <div className="row gap-10 wrap-x" style={{ marginBottom: 26 }}>
            {FILTERS.map((f) => <Chip key={f} on={f === active} onClick={() => setActive(f)}>{f}</Chip>)}
          </div>

          {rest.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {rest.map((ev) => <EventCard key={ev.id} ev={ev} me={user?.id} onChange={load} />)}
            </div>
          ) : !featured && (
            <div className="card card-pad" style={{ textAlign: 'center', padding: '56px 32px' }}>
              <Icon name="calendar" style={{ width: 30, height: 30, color: 'var(--sand-deep)' }} />
              <h3 className="serif h-sm" style={{ margin: '14px 0 6px' }}>Nothing scheduled</h3>
              <p className="small muted" style={{ maxWidth: '38ch', margin: '0 auto' }}>
                No upcoming events in this category yet. Host one — writing sprints run themselves.
              </p>
            </div>
          )}
        </>
      )}

      {hosting && <HostModal me={user?.id} onClose={() => setHosting(false)} onCreated={load} />}
    </div>
  );
}
