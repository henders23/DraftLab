import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Icon, Btn, Wordmark } from '../components/CommonsUI';
import { useAuth } from '../context/AuthContext';

const DISCIPLINES = [
  'Education & Social Sciences', 'Arts & Humanities', 'Science & Engineering',
  'Health & Medicine', 'Business & Economics', 'Law & Politics',
];

export default function AuthView() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { signIn, signUp } = useAuth();

  const [mode, setMode] = useState(params.get('mode') === 'signin' ? 'signin' : 'join');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [discipline, setDiscipline] = useState(DISCIPLINES[0]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setBusy(true);
    try {
      if (mode === 'join') {
        const { data, error: err } = await signUp({ email, password, fullName, discipline });
        if (err) { setError(err.message); return; }
        if (data?.session) {
          navigate('/home');
        } else {
          setNotice('Almost there — check your email to confirm your account, then sign in.');
          setMode('signin');
        }
      } else {
        const { error: err } = await signIn({ email, password });
        if (err) { setError(err.message); return; }
        navigate('/home');
      }
    } finally {
      setBusy(false);
    }
  }

  const field = {
    width: '100%', minHeight: 48, borderRadius: 12, border: '1.5px solid var(--line-strong)',
    background: 'var(--surface)', color: 'var(--ink)', padding: '0 16px',
    fontFamily: 'var(--sans)', fontSize: 15, outline: 'none',
  };

  return (
    <div className="screen" style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <div className="wrap" style={{ paddingTop: 28 }}>
        <Wordmark name="PGR Commons" onClick={() => navigate('/landing')} />
      </div>
      <div style={{ maxWidth: 440, margin: '0 auto', padding: '48px 20px 90px' }}>
        <p className="eyebrow">{mode === 'join' ? 'Join the Commons' : 'Welcome back'}</p>
        <h1 className="display h-lg" style={{ margin: '14px 0 6px' }}>
          {mode === 'join' ? 'Create your account.' : 'Sign in.'}
        </h1>
        <p className="lead muted" style={{ marginBottom: 28 }}>
          {mode === 'join'
            ? 'Free for postgraduate researchers, always.'
            : 'Pick up where you left off.'}
        </p>

        {error && (
          <div className="card card-pad" style={{ borderColor: 'var(--brick)', background: 'var(--brick-soft)', marginBottom: 18 }}>
            <span className="small" style={{ color: 'var(--brick-deep)' }}>{error}</span>
          </div>
        )}
        {notice && (
          <div className="card card-sand card-pad" style={{ marginBottom: 18 }}>
            <span className="small" style={{ color: 'var(--sand-deep)' }}>{notice}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="col gap-14">
          {mode === 'join' && (
            <>
              <div>
                <div className="gfield-label"><span className="dot" style={{ background: 'var(--brick)' }} />Your name</div>
                <input style={field} value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="As you'd like it shown" required />
              </div>
              <div>
                <div className="gfield-label"><span className="dot" style={{ background: 'var(--sand-deep)' }} />Discipline</div>
                <select style={{ ...field, appearance: 'auto' }} value={discipline} onChange={(e) => setDiscipline(e.target.value)}>
                  {DISCIPLINES.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </>
          )}
          <div>
            <div className="gfield-label"><span className="dot" style={{ background: 'var(--ink-soft)' }} />Email</div>
            <input style={field} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@university.edu" required />
          </div>
          <div>
            <div className="gfield-label"><span className="dot" style={{ background: 'var(--ink-soft)' }} />Password</div>
            <input style={field} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={mode === 'join' ? 'At least 6 characters' : 'Your password'} minLength={6} required />
          </div>
          <Btn variant="primary" size="lg" block iconR="arrow" disabled={busy} style={busy ? { opacity: 0.6 } : {}}>
            {busy ? 'One moment…' : mode === 'join' ? 'Join PGR Commons' : 'Sign in'}
          </Btn>
        </form>

        <p className="small muted" style={{ textAlign: 'center', marginTop: 22 }}>
          {mode === 'join' ? 'Already a member? ' : 'New here? '}
          <a
            style={{ color: 'var(--brick)', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => { setMode(mode === 'join' ? 'signin' : 'join'); setError(null); }}
          >
            {mode === 'join' ? 'Sign in' : 'Join free'}
          </a>
        </p>
      </div>
    </div>
  );
}
