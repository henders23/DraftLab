import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Avatar, Btn, Tag, Chip, SrcChip } from '../components/CommonsUI';
import { FEEDBACK } from '../data/commons-data';

function ReqItem({ r, on, onClick }) {
  return (
    <button className={`req-item${on ? ' on' : ''}${r.mine ? ' mine' : ''}`} onClick={onClick}>
      <div className="between" style={{ marginBottom: 9 }}>
        <SrcChip src={r.src} />
        <span className="mono small muted" style={{ fontSize: 11 }}>{r.time}</span>
      </div>
      <div className="row gap-10" style={{ alignItems: 'flex-start' }}>
        <Avatar initials={r.i} variant={r.v} size={30} />
        <div className="grow">
          <div className="serif" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>{r.title}</div>
          <div className="small muted" style={{ marginTop: 3 }}>{r.mine ? 'You' : r.who} · {r.field}</div>
        </div>
      </div>
      <div className="between" style={{ marginTop: 10 }}>
        <span className="small" style={{ color: r.responses ? 'var(--brick)' : 'var(--muted)', fontWeight: 500 }}>
          {r.mine ? (r.responses ? `${r.responses} responses` : 'Awaiting response') : `${r.responses} responses`}
        </span>
        {!r.mine && <span className="small" style={{ color: 'var(--ink-soft)' }}>Give feedback →</span>}
      </div>
    </button>
  );
}

function ResponseCard({ name, i, v, field, working, unclear, suggestion }) {
  const FIELDS = [
    ["What's working", working, 'var(--brick)'],
    ["What's unclear", unclear, 'var(--sand-deep)'],
    ['One suggestion', suggestion, 'var(--ink-soft)'],
  ];
  return (
    <div className="card card-pad">
      <div className="row gap-10 center" style={{ marginBottom: 14 }}>
        <Avatar initials={i} variant={v} size={34} />
        <div className="small"><strong className="serif" style={{ fontSize: 15 }}>{name}</strong> <span className="muted">· {field}</span></div>
      </div>
      <div className="col gap-14">
        {FIELDS.map(([label, text, c]) => (
          <div key={label}>
            <div className="gfield-label"><span className="dot" style={{ background: c }} />{label}</div>
            <p style={{ margin: 0, fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.5 }}>{text}</p>
          </div>
        ))}
      </div>
      <div className="post-actions" style={{ marginTop: 16 }}>
        <span><Icon name="heart" sm />helpful · 4</span>
        <span><Icon name="chat" sm />Reply</span>
      </div>
    </div>
  );
}

export default function FeedbackView() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('All');
  const [activeId, setActiveId] = useState('fb-sofia');

  const list = FEEDBACK.filter((r) =>
    tab === 'All' ? true : tab === 'Your circle' ? r.src === 'circle' : tab === 'Discipline' ? r.src === 'discipline' : r.mine
  );
  const active = FEEDBACK.find((r) => r.id === activeId) || FEEDBACK[0];

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      <header className="between" style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <div>
          <p className="eyebrow">Give and get response</p>
          <h1 className="display h-lg" style={{ marginTop: 12 }}>Feedback exchange</h1>
          <p className="lead" style={{ marginTop: 8, maxWidth: '48ch' }}>
            Drafts from your circle and your discipline, waiting for a generous reader. Respond to one — it's how the Commons keeps giving back.
          </p>
        </div>
        <div className="card card-sand card-pad" style={{ minWidth: 268 }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Your exchange this month</p>
          <div className="between" style={{ marginBottom: 8 }}>
            <span className="small"><strong className="serif" style={{ fontSize: 20 }}>3</strong> given</span>
            <span className="small"><strong className="serif" style={{ fontSize: 20 }}>2</strong> received</span>
          </div>
          <div className="karma-bar"><i style={{ width: '60%', background: 'var(--brick)' }} /><i style={{ width: '40%', background: 'var(--sand)' }} /></div>
          <p className="small muted" style={{ marginTop: 10 }}>Give one more to stay in good standing with your circle.</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 344px', gap: 26, alignItems: 'start' }}>
        {/* LEFT — queue */}
        <aside className="col gap-14" style={{ position: 'sticky', top: 88 }}>
          <Btn variant="primary" block icon="plus" onClick={() => setActiveId('fb-mine')}>Request feedback</Btn>
          <div className="row gap-6 wrap-x">
            {['All', 'Your circle', 'Discipline'].map((tb) => (
              <Chip key={tb} on={tab === tb} onClick={() => setTab(tb)}>{tb}</Chip>
            ))}
          </div>
          <div className="col gap-10">
            {list.map((r) => <ReqItem key={r.id} r={r} on={r.id === activeId} onClick={() => setActiveId(r.id)} />)}
          </div>
        </aside>

        {/* CENTER — the draft */}
        <main className="col gap-20">
          <article className="card card-pad" style={{ padding: 32 }}>
            <div className="between" style={{ marginBottom: 18 }}>
              <div className="row gap-14 center">
                <Avatar initials={active.i} variant={active.v} size={44} />
                <div>
                  <div className="serif" style={{ fontSize: 16, fontWeight: 600 }}>{active.mine ? 'Your draft' : active.who}</div>
                  <div className="small muted">{active.field} · shared {active.time.toLowerCase()}</div>
                </div>
              </div>
              <SrcChip src={active.src} />
            </div>

            <h2 className="display h-md" style={{ marginBottom: 16 }}>{active.title}</h2>

            <div className="card" style={{ background: 'var(--brick-soft)', borderColor: 'var(--brick)', padding: '14px 18px', marginBottom: 24 }}>
              <span className="mono small" style={{ color: 'var(--brick-deep)', letterSpacing: '0.04em' }}>THEY'RE ASKING</span>
              <p className="serif italic" style={{ margin: '6px 0 0', fontSize: 17, color: 'var(--ink)' }}>"{active.ask}"</p>
            </div>

            {active.id === 'fb-sofia' ? (
              <div className="draft-body">
                <p>This thesis examines how migrant care workers in Lisbon negotiate belonging through the ordinary, repeated routines of domestic labour. Existing scholarship has tended to read such routines as sites of constraint — the place where precarity is felt most sharply.</p>
                <p>
                  I do not dispute this. <mark className="hl brick">Yet I argue that these same routines are also quietly generative: they are where a new civic self is rehearsed, long before it is ever recognised by the state.<span className="hl-badge">2</span></mark> This reframing is the central contribution of the thesis.
                </p>
                <p>
                  The literature on care migration is, of course, extensive. <mark className="hl">It spans economic, feminist and post-colonial traditions,<span className="hl-badge">1</span></mark> each of which I draw on without belonging fully to any. What I add is a way of seeing the domestic as a political workshop rather than a private refuge.
                </p>
              </div>
            ) : (
              <div className="draft-body">
                <p>{active.mine
                  ? "Paste or write the passage you'd like response on. Your circle and discipline will see it in their feedback queue."
                  : "This is a representative draft excerpt. Open Sofia's request to see the fully marked-up reading view with inline comments."
                }</p>
                {active.mine && <div className="media" style={{ height: 120, borderRadius: 10, marginTop: 8 }}><span className="media-label">your draft excerpt</span></div>}
              </div>
            )}
          </article>

          {!active.mine && (
            <div className="col gap-14">
              <div className="between">
                <h3 className="serif h-sm">Responses · {active.responses}</h3>
                <span className="small muted">Newest first</span>
              </div>
              <ResponseCard name="Aris Okafor" i="AO" v={1} field="Sociology"
                working="The prose is vivid and your voice is confident — I trusted you immediately."
                unclear="Your actual contribution doesn't arrive until the second paragraph. I almost missed it."
                suggestion="Lift the 'quietly generative' sentence into your very first lines. Lead with the claim." />
              <ResponseCard name="Lena Vargas" i="LV" v={3} field="Applied Linguistics"
                working="The metaphor of a 'political workshop' is doing real work — keep it."
                unclear="'Without belonging fully to any' slightly hedges your authority."
                suggestion="Try 'I draw on each but follow none' — more decisive, same meaning." />
            </div>
          )}
        </main>

        {/* RIGHT — compose */}
        <aside className="col gap-20" style={{ position: 'sticky', top: 88 }}>
          <div className="card card-pad">
            <h3 className="serif h-sm" style={{ marginBottom: 4 }}>{active.mine ? 'Share for feedback' : 'Your response'}</h3>
            <p className="small muted" style={{ marginBottom: 16 }}>
              {active.mine ? 'Tell readers what kind of response would help most.' : 'Structured, kind, specific. Three quick prompts.'}
            </p>

            {!active.mine && (
              <div className="row gap-6 wrap-x" style={{ marginBottom: 16 }}>
                {['Contribution lands', 'Buried', 'Strong prose', 'Needs signposting'].map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            )}

            <div className="col gap-14">
              {(active.mine
                ? [["The passage", "Paste your draft excerpt…", 'var(--ink-soft)'], ["What you'd like", "e.g. is my argument clear?", 'var(--brick)']]
                : [["What's working", "Name one real strength…", 'var(--brick)'],
                   ["What's unclear", "Where did you stumble?", 'var(--sand-deep)'],
                   ['One suggestion', 'A single concrete next step…', 'var(--ink-soft)']]
              ).map(([label, ph, c]) => (
                <div key={label}>
                  <div className="gfield-label"><span className="dot" style={{ background: c }} />{label}</div>
                  <textarea className="gtext" placeholder={ph} rows={active.mine && label === 'The passage' ? 4 : 2} />
                </div>
              ))}
            </div>

            <Btn variant="primary" block iconR="arrow" style={{ marginTop: 16 }}>
              {active.mine ? 'Post request' : 'Send response'}
            </Btn>
          </div>

          {!active.mine && (
            <div className="card card-pad">
              <p className="eyebrow" style={{ marginBottom: 12 }}>Good feedback here</p>
              <div className="col gap-10">
                {['Start with what works — momentum before correction.', 'Be specific: point to the sentence, not the soul.', 'End with one thing, not ten.'].map((t, i) => (
                  <div key={i} className="row gap-10" style={{ alignItems: 'flex-start' }}>
                    <Icon name="check" sm style={{ color: 'var(--brick)', marginTop: 2 }} />
                    <span className="small" style={{ color: 'var(--ink-soft)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
