import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Btn, Tag, Wordmark } from '../components/CommonsUI';
import { PLANS } from '../data/commons-data';

function PlanCard({ p }) {
  const navigate = useNavigate();
  const cls = p.premium ? 'plan prem' : p.highlight ? 'plan pop' : 'plan';
  return (
    <div className={cls}>
      <div className="between" style={{ marginBottom: 18, minHeight: 26 }}>
        <span className="mono" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: p.premium ? 'var(--sand)' : 'var(--brick)' }}>{p.name}</span>
        {p.badge && <Tag variant={p.premium ? '' : 'brick'} style={p.premium ? { background: 'var(--sand)', color: 'var(--dark)' } : {}}>{p.badge}</Tag>}
      </div>
      <div className="row" style={{ alignItems: 'baseline', gap: 8 }}>
        <span className="plan-price">{p.price}</span>
        <span className="small" style={{ color: p.premium ? 'var(--dark-muted)' : 'var(--muted)' }}>{p.per}</span>
      </div>
      <p className="serif italic" style={{ margin: '10px 0 22px', fontSize: 17, color: p.premium ? 'var(--dark-paper)' : 'var(--ink-soft)' }}>{p.tagline}</p>
      <Btn variant={p.premium ? 'primary' : p.highlight ? 'primary' : 'ghost'} block size="lg" onClick={() => navigate('/home')}>{p.cta}</Btn>
      <hr className="rule" style={{ margin: '24px 0 18px' }} />
      <div className="col">
        {p.features.map((f, i) => (
          <div key={i} className="plan-feat">
            <Icon name="check" sm style={{ color: p.premium ? 'var(--sand)' : 'var(--brick)' }} />
            <span style={{ color: p.premium ? 'var(--dark-paper)' : 'var(--ink)' }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingView() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="topnav">
        <div className="wrap inner">
          <Wordmark name="PGR Commons" onClick={() => navigate('/landing')} />
          <nav className="hide-md">
            <a onClick={() => navigate('/landing')}>Home</a>
            <a onClick={() => navigate('/events')}>Events</a>
            <a className="on">Pricing</a>
          </nav>
          <Btn variant="primary" size="sm" onClick={() => navigate('/home')}>Join free</Btn>
        </div>
      </div>

      <div className="wrap" style={{ textAlign: 'center', paddingTop: 70 }}>
        <p className="eyebrow">Plans</p>
        <h1 className="display h-xl" style={{ margin: '20px auto 0', maxWidth: '18ch' }}>
          Start free. <span className="italic" style={{ color: 'var(--brick)' }}>Grow</span> when you're ready.
        </h1>
        <p className="lead" style={{ margin: '20px auto 0', maxWidth: '52ch' }}>
          The Commons is free to join — your circle, your discipline, the feed and the feedback exchange, always. Paid plans add unlimited events and dedicated support. Every paid plan starts with a free week.
        </p>
      </div>

      <div className="wrap" style={{ paddingTop: 50, paddingBottom: 30 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'stretch' }}>
          {PLANS.map((p) => <PlanCard key={p.id} p={p} />)}
        </div>
      </div>

      <div className="wrap section" style={{ paddingTop: 30 }}>
        <div className="card card-sand card-pad" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30, textAlign: 'center', padding: 36 }}>
          {[
            ['globe', 'Free where it matters', 'Community, feedback and belonging never sit behind a paywall.'],
            ['clock', 'A free week to try', 'Both paid plans start free for 7 days. Cancel anytime, no fuss.'],
            ['users', 'Student-friendly', 'Built for postgraduate budgets — pause your plan over the holidays.'],
          ].map(([ic, t, b]) => (
            <div key={t}>
              <Icon name={ic} style={{ width: 26, height: 26, color: 'var(--brick)' }} />
              <h3 className="serif h-sm" style={{ margin: '12px 0 6px' }}>{t}</h3>
              <p className="small muted" style={{ margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="wrap" style={{ padding: '20px 28px 56px' }}>
        <hr className="rule" style={{ marginBottom: 24 }} />
        <div className="between wrap-x" style={{ gap: 20 }}>
          <Wordmark name="PGR Commons" onClick={() => navigate('/landing')} />
          <p className="small muted">Questions about plans? Every member can email the team — free or paid.</p>
        </div>
      </footer>
    </div>
  );
}
