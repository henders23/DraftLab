import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon, Avatar, Btn, Wordmark } from './CommonsUI';
import { NOTIFICATIONS } from '../data/commons-data';
import { useAuth } from '../context/AuthContext';
import { initialsOf, variantOf } from '../lib/supabase';

function NotifPanel({ onClose, navigate }) {
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 55 }} />
      <div className="notif-panel">
        <div className="between" style={{ padding: '16px 18px', borderBottom: '1.5px solid var(--line)' }}>
          <h3 className="serif" style={{ fontSize: 17, fontWeight: 600, margin: 0 }}>Notifications</h3>
          {NOTIFICATIONS.length > 0 && (
            <span className="small" style={{ color: 'var(--brick)', fontWeight: 600, cursor: 'pointer' }} onClick={onClose}>Mark all read</span>
          )}
        </div>
        <div className="notif-scroll">
          {NOTIFICATIONS.length > 0 ? (
            NOTIFICATIONS.map((n, i) => (
              <div className="notif-row" key={i}>
                <Avatar initials={n.i} variant={n.v} size={36} />
                <div className="grow">
                  <div className="small" style={{ color: 'var(--ink)', lineHeight: 1.4 }}>
                    {n.who && <strong>{n.who} </strong>}{n.action}
                  </div>
                  <div className="mono small muted" style={{ fontSize: 10.5, marginTop: 3 }}>{n.time} ago</div>
                </div>
                <button className="btn btn-ghost btn-sm" onClick={() => {
                  onClose();
                  navigate(/workshop|talk|meet/i.test(n.action) ? '/events' : '/feedback');
                }}>{n.act}</button>
              </div>
            ))
          ) : (
            <div style={{ padding: '40px 24px', textAlign: 'center' }}>
              <Icon name="bell" style={{ width: 26, height: 26, color: 'var(--sand-deep)' }} />
              <p className="small muted" style={{ margin: '12px 0 0' }}>
                You're all caught up. Activity from your circle and discipline will appear here.
              </p>
            </div>
          )}
        </div>
        <div style={{ padding: '12px 18px', borderTop: '1.5px solid var(--line)', textAlign: 'center' }}>
          <span className="small muted">You're notified about your circle and discipline only.</span>
        </div>
      </div>
    </>
  );
}

export default function CommonsTopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [notifOpen, setNotifOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  const NAV = [
    ['Home',      '/home'],
    ['Feedback',  '/feedback'],
    ['Events',    '/events'],
    ['Mentor',    '/mentor'],
  ];

  const current = location.pathname;

  return (
    <>
      <div className="topnav">
        <div className="wrap inner">
          <Wordmark name="PGR Commons" onClick={() => navigate('/home')} />
          <nav className="hide-md">
            {NAV.map(([label, path]) => (
              <a
                key={path}
                className={current === path ? 'on' : ''}
                onClick={() => navigate(path)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="row gap-14 center">
            <button className="searchpill hide-md" style={{ minWidth: 140 }}>
              <Icon name="search" sm /> Search
            </button>
            <button className="btn btn-ghost btn-sm hide-md" onClick={() => navigate('/pricing')} style={{ borderColor: 'var(--brick)', color: 'var(--brick)' }}>
              <Icon name="spark" sm /> Upgrade
            </button>
            <button className="bell-btn" onClick={() => setNotifOpen((o) => !o)} aria-label="Notifications">
              <Icon name="bell" />
              {NOTIFICATIONS.length > 0 && <span className="bell-badge">{NOTIFICATIONS.length}</span>}
            </button>
            <div style={{ position: 'relative' }}>
              <button onClick={() => setMenuOpen((o) => !o)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Account">
                <Avatar initials={initialsOf(profile?.full_name)} variant={variantOf(user?.id)} size={36} />
              </button>
              {menuOpen && (
                <>
                  <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 55 }} />
                  <div className="card" style={{ position: 'absolute', right: 0, top: 44, zIndex: 56, minWidth: 200, padding: 8, boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ padding: '8px 12px' }}>
                      <div className="serif" style={{ fontSize: 15, fontWeight: 600 }}>{profile?.full_name || 'Member'}</div>
                      <div className="small muted">{profile?.discipline || 'No discipline set'}</div>
                    </div>
                    <hr className="rule" style={{ margin: '4px 0' }} />
                    <button
                      className="btn btn-ghost btn-sm btn-block"
                      onClick={async () => { setMenuOpen(false); await signOut(); navigate('/landing'); }}
                    >
                      Sign out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {notifOpen && <NotifPanel onClose={() => setNotifOpen(false)} navigate={navigate} />}
    </>
  );
}
