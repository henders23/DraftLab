import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Icon, Btn, Tag, Chip } from '../components/CommonsUI';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DOC_TYPES = ['Thesis Chapter', 'Literature Review', 'Abstract', 'Conference Paper', 'Other'];

const STATUSES = ['Drafting', 'Awaiting review', 'Complete'];

const STATUS_COLORS = {
  'Drafting':         { background: 'var(--surface)', color: 'var(--ink-soft)', border: '1.5px solid var(--line)' },
  'Awaiting review':  { background: 'var(--brick-soft)', color: 'var(--brick-deep)', border: '1.5px solid var(--brick)' },
  'Complete':         { background: 'var(--sand-soft)', color: 'var(--sand-deep)', border: '1.5px solid var(--sand)' },
};

const SEED_DOCS = [
  {
    id: 'seed-1',
    title: 'Chapter 3 — Methodology',
    type: 'Thesis Chapter',
    content: '',
    status: 'Awaiting review',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 'seed-2',
    title: 'Framing my contribution in the introduction',
    type: 'Thesis Chapter',
    content: '',
    status: 'Drafting',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 'seed-3',
    title: 'BERA 2025 abstract submission',
    type: 'Abstract',
    content: '',
    status: 'Complete',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
  },
];

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function newId() {
  return `doc-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function NewDraftModal({ onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(DOC_TYPES[0]);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  function handleCreate(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title: title.trim(), type });
  }

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(36,31,26,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="card card-pad" style={{ width: '100%', maxWidth: 440, padding: 28 }}>
        <div className="between" style={{ marginBottom: 20 }}>
          <h3 className="serif h-sm" style={{ margin: 0 }}>New draft</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex' }}>
            <Icon name="x" sm />
          </button>
        </div>

        <form onSubmit={handleCreate} className="col gap-18">
          <div>
            <div className="gfield-label">Title</div>
            <input
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Introduction — draft 1"
              className="gtext"
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <div className="gfield-label">Document type</div>
            <div className="row gap-6 wrap-x" style={{ marginTop: 8 }}>
              {DOC_TYPES.map((t) => (
                <Chip key={t} on={type === t} onClick={() => setType(t)}>{t}</Chip>
              ))}
            </div>
          </div>

          <div className="row gap-10" style={{ marginTop: 6 }}>
            <Btn variant="ghost" block onClick={onClose}>Cancel</Btn>
            <Btn variant="primary" block disabled={!title.trim()}>Create draft</Btn>
          </div>
        </form>
      </div>
    </div>
  );
}

function DocCard({ doc, onOpen, onDuplicate, onDelete }) {
  const [hover, setHover] = useState(false);
  const st = STATUS_COLORS[doc.status] || STATUS_COLORS['Drafting'];

  return (
    <div
      className="card"
      style={{ padding: '16px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'border-color 0.15s', borderColor: hover ? 'var(--sand)' : '' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(doc.id)}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="serif" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.25, marginBottom: 4, color: 'var(--ink)' }}>{doc.title}</div>
        <div className="row gap-10 center">
          <span className="mono small muted" style={{ fontSize: 11 }}>{doc.type}</span>
          <span className="muted" style={{ fontSize: 10 }}>·</span>
          <span className="mono small muted" style={{ fontSize: 11 }}>{wordCount(doc.content).toLocaleString()} words</span>
          <span className="muted" style={{ fontSize: 10 }}>·</span>
          <span className="mono small muted" style={{ fontSize: 11 }}>edited {timeAgo(doc.updatedAt)}</span>
        </div>
      </div>

      <div className="row gap-10 center">
        <span className="mono" style={{ fontSize: 11, padding: '3px 10px', borderRadius: 20, ...st }}>{doc.status}</span>

        {hover && (
          <div className="row gap-4 center" onClick={(e) => e.stopPropagation()}>
            <button
              title="Duplicate"
              onClick={() => onDuplicate(doc.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', padding: 4, borderRadius: 6 }}
            >
              <Icon name="copy" sm />
            </button>
            <button
              title="Delete"
              onClick={() => onDelete(doc.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', padding: 4, borderRadius: 6 }}
            >
              <Icon name="trash" sm />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function DocEditor({ docId, docs, onUpdate, onBack }) {
  const doc = docs.find((d) => d.id === docId);
  const [savedAt, setSavedAt] = useState(null);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => { textareaRef.current?.focus(); }, [docId]);

  if (!doc) return null;

  function save(patch) {
    onUpdate(docId, { ...patch, updatedAt: new Date().toISOString() });
    setSavedAt(new Date());
  }

  const wc = wordCount(doc.content);
  const st = STATUS_COLORS[doc.status] || STATUS_COLORS['Drafting'];

  return (
    <div className="col" style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
      {/* toolbar */}
      <div className="row gap-12 center" style={{ marginBottom: 28, flexWrap: 'wrap' }}>
        <button
          onClick={onBack}
          className="row gap-6 center"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: 14 }}
        >
          <Icon name="arrowleft" sm /> All drafts
        </button>

        <div style={{ width: 1, height: 16, background: 'var(--line)', flexShrink: 0 }} />

        {/* type selector */}
        <div style={{ position: 'relative' }}>
          <button
            className="row gap-4 center mono"
            style={{ background: 'none', border: '1.5px solid var(--line)', borderRadius: 20, padding: '3px 10px', fontSize: 11, cursor: 'pointer', color: 'var(--ink-soft)' }}
            onClick={() => { setShowTypeMenu((v) => !v); setShowStatusMenu(false); }}
          >
            {doc.type} <Icon name="chevron" sm />
          </button>
          {showTypeMenu && (
            <div className="card" style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 20, minWidth: 180, padding: '6px 0' }}>
              {DOC_TYPES.map((t) => (
                <button
                  key={t}
                  className="small"
                  style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 16px', cursor: 'pointer', color: doc.type === t ? 'var(--brick)' : 'var(--ink)', fontWeight: doc.type === t ? 600 : 400 }}
                  onClick={() => { save({ type: t }); setShowTypeMenu(false); }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* status selector */}
        <div style={{ position: 'relative' }}>
          <button
            className="row gap-4 center mono"
            style={{ background: 'none', border: 'none', padding: '3px 10px', borderRadius: 20, fontSize: 11, cursor: 'pointer', ...st }}
            onClick={() => { setShowStatusMenu((v) => !v); setShowTypeMenu(false); }}
          >
            {doc.status} <Icon name="chevron" sm />
          </button>
          {showStatusMenu && (
            <div className="card" style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 20, minWidth: 180, padding: '6px 0' }}>
              {STATUSES.map((s) => (
                <button
                  key={s}
                  className="small"
                  style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 16px', cursor: 'pointer', color: doc.status === s ? 'var(--brick)' : 'var(--ink)', fontWeight: doc.status === s ? 600 : 400 }}
                  onClick={() => { save({ status: s }); setShowStatusMenu(false); }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="row gap-14 center" style={{ marginLeft: 'auto' }}>
          <span className="mono small muted" style={{ fontSize: 11 }}>{wc.toLocaleString()} words</span>
          {savedAt && <span className="mono small muted" style={{ fontSize: 11 }}>Saved {timeAgo(savedAt.toISOString())}</span>}
        </div>
      </div>

      {/* title */}
      <input
        value={doc.title}
        onChange={(e) => save({ title: e.target.value })}
        placeholder="Untitled"
        className="serif"
        style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.2, color: 'var(--ink)', background: 'transparent', border: 'none', outline: 'none', marginBottom: 24, width: '100%' }}
      />

      {/* body */}
      <textarea
        ref={textareaRef}
        value={doc.content}
        onChange={(e) => save({ content: e.target.value })}
        placeholder="Start writing…"
        style={{ flex: 1, minHeight: 480, background: 'transparent', border: 'none', outline: 'none', resize: 'none', fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', fontFamily: 'inherit', width: '100%' }}
      />
    </div>
  );
}

export default function DraftsView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [docs, setDocs] = useLocalStorage('pgr-drafts', SEED_DOCS);
  const [view, setView] = useState('list');
  const [activeDocId, setActiveDocId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const newParam = searchParams.get('new');
    const openParam = searchParams.get('open');
    if (newParam === '1') {
      setShowModal(true);
      setSearchParams({}, { replace: true });
    } else if (openParam) {
      setActiveDocId(openParam);
      setView('editor');
      setSearchParams({}, { replace: true });
    }
  }, [searchParams]);

  function handleCreate({ title, type }) {
    const doc = {
      id: newId(), title, type,
      content: '',
      status: 'Drafting',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setDocs((prev) => [doc, ...prev]);
    setActiveDocId(doc.id);
    setView('editor');
    setShowModal(false);
  }

  function handleUpdate(id, patch) {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, ...patch } : d)));
  }

  function handleDuplicate(id) {
    const src = docs.find((d) => d.id === id);
    if (!src) return;
    setDocs((prev) => [{
      ...src, id: newId(),
      title: `${src.title} (copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }, ...prev]);
  }

  function handleDelete(id) {
    setDocs((prev) => prev.filter((d) => d.id !== id));
    if (activeDocId === id) { setView('list'); setActiveDocId(null); }
  }

  const FILTERS = ['All', 'Thesis Chapter', 'Literature Review', 'Abstract', 'Conference Paper'];
  const visible = docs
    .slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .filter((d) => filter === 'All' || d.type === filter);

  return (
    <div className="screen wrap" style={{ paddingTop: 38, paddingBottom: 90 }}>
      {showModal && (
        <NewDraftModal onClose={() => setShowModal(false)} onCreate={handleCreate} />
      )}

      {view === 'editor' ? (
        <DocEditor
          docId={activeDocId}
          docs={docs}
          onUpdate={handleUpdate}
          onBack={() => setView('list')}
        />
      ) : (
        <>
          <header className="between" style={{ alignItems: 'flex-end', marginBottom: 30 }}>
            <div>
              <p className="eyebrow">Your writing</p>
              <h1 className="display h-lg" style={{ marginTop: 12 }}>My drafts</h1>
              <p className="lead" style={{ marginTop: 8, maxWidth: '44ch' }}>
                All your chapters, abstracts and papers in one place. Open one to write, or share for feedback.
              </p>
            </div>
            <Btn variant="primary" icon="plus" onClick={() => setShowModal(true)}>New draft</Btn>
          </header>

          <div className="row gap-10 wrap-x" style={{ marginBottom: 24 }}>
            {FILTERS.map((f) => (
              <Chip key={f} on={filter === f} onClick={() => setFilter(f)}>{f}</Chip>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="col center" style={{ padding: '80px 0', textAlign: 'center', gap: 16 }}>
              <Icon name="file" style={{ width: 36, height: 36, color: 'var(--muted)' }} />
              <div>
                <p className="serif" style={{ fontSize: 18, fontWeight: 600, margin: '0 0 6px' }}>No drafts yet</p>
                <p className="small muted">Start your first draft and it'll appear here.</p>
              </div>
              <Btn variant="primary" icon="plus" onClick={() => setShowModal(true)}>New draft</Btn>
            </div>
          ) : (
            <div className="col gap-10">
              {visible.map((doc) => (
                <DocCard
                  key={doc.id}
                  doc={doc}
                  onOpen={(id) => { setActiveDocId(id); setView('editor'); }}
                  onDuplicate={handleDuplicate}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
