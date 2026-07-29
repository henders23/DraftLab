import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Avatar, Btn, Tag, Chip, DateBox, Cover } from '../components/CommonsUI';
import { EVENTS } from '../data/commons-data';

function EventCard({ ev }) {
  return (
    <article className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <Cover label={ev.cover} height={150} />
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <Tag variant="ink">{ev.type}</Tag>
        </div>
      </div>
      <div className="card-pad" style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div className="row gap-14" style={{ alignItems: 'flex-start' }}>
          <DateBox mon={ev.mon} day={ev.day} />
          <div className="grow">
            <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.15, margin: 0 }}>{ev.title}</h3>
            <div className="mono small muted" style={{ marginTop: 5 }}>{ev.dow} {ev.time} · {ev.len}</div>
          </div>
        </div>
        <div className="small" style={{ color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar initials={ev.host.split(' ').map((w) => w[0]).slice(-2).join('')} size={22} variant={parseInt(ev.day) % 5} />
          {ev.host}
        </div>
        <div style={{ flex: 1 }} />
        <hr className="rule" />
        <div className="between" style={{ marginTop: 2 }}>
          <div className="col" style={{ gap: 5 }}>
            <span className="small muted">{ev.going > 0 ? `${ev.going} going` : 'Be the first to join'}</span>
            {ev.circle > 0 && <span className="mono" style={{ fontSize: 10.5, color: 'var(--brick)' }}>{ev.circle} from your circle</span>}
          </div>
          <Btn variant="primary" size="sm" iconR="arrow">Join</Btn>
        </div>
      </div>
    </article>
  );
}

export default function EventsView() {
  const navigate = useNavigate();
  const FILTERS = ['All this week', "My circle's", 'Workshops', 'Writing sprints', 'Talks', 'Language', 'Drop-in'];
  const [active, setActive] = useState('All this week');
  const featured = EVENTS[0];
  const rest = EVENTS.slice(1);

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      <header className="between" style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <div>
          <p className="eyebrow">Learning · this week &amp; beyond</p>
          <h1 className="display h-lg" style={{ marginTop: 12 }}>Events</h1>
          <p className="lead" style={{ marginTop: 8, maxWidth: '46ch' }}>
            Workshops, writing sprints and talks run by researchers and tutors across the Commons. Join one — your circle is probably already going.
          </p>
        </div>
        <Btn variant="ghost" icon="plus">Host an event</Btn>
      </header>

      {/* featured */}
      <section className="card" style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.05fr 1fr', marginBottom: 34 }}>
        <Cover label={featured.cover} height={340} radius={0} />
        <div className="card-pad" style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="row gap-10" style={{ marginBottom: 16 }}>
            <Tag variant="brick">Featured · {featured.type}</Tag>
          </div>
          <h2 className="display h-md">{featured.title}</h2>
          <div className="row gap-20 wrap-x" style={{ margin: '20px 0 22px', color: 'var(--ink-soft)' }}>
            <span className="row gap-6 center small"><Icon name="calendar" sm /> {featured.dow} {parseInt(featured.day, 10)} {featured.mon.charAt(0) + featured.mon.slice(1).toLowerCase()} · {featured.time}</span>
            <span className="row gap-6 center small"><Icon name="clock" sm /> {featured.len}</span>
            <span className="row gap-6 center small"><Icon name="globe" sm /> Online</span>
          </div>
          <div className="row gap-10 center" style={{ marginBottom: 24 }}>
            <Avatar initials={featured.host.split(' ').map((w) => w[0]).slice(0, 2).join('')} variant={1} size={36} />
            <div className="small">
              <div style={{ fontWeight: 600 }}>{featured.host}</div>
            </div>
          </div>
          <div className="between">
            <span className="small muted">{featured.going > 0 ? `${featured.going} going` : 'Places open — be the first to join'}</span>
            <div className="row gap-10">
              <Btn variant="ghost" icon="calendar">Save</Btn>
              <Btn variant="primary" iconR="arrow">Join event</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* filters */}
      <div className="row gap-10 wrap-x" style={{ marginBottom: 26 }}>
        {FILTERS.map((f) => <Chip key={f} on={f === active} onClick={() => setActive(f)}>{f}</Chip>)}
      </div>

      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {rest.map((ev) => <EventCard key={ev.id} ev={ev} />)}
      </div>
    </div>
  );
}
