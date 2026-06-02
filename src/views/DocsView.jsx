import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FileText, Plus, Trash2, Copy, ArrowLeft,
  Clock, AlignLeft, X, ChevronDown,
} from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// ─── constants ────────────────────────────────────────────────────────────────

const DOC_TYPES = ['Thesis Chapter', 'Literature Review', 'Abstract', 'Conference Paper', 'Other'];

const STATUSES = ['Drafting', 'Awaiting Peer Review', 'AI Feedback Ready', 'Complete'];

const STATUS_STYLES = {
  'Drafting':             'text-zinc-400 bg-zinc-400/10',
  'Awaiting Peer Review': 'text-emerald-400 bg-emerald-400/10',
  'AI Feedback Ready':    'text-yellow-400 bg-yellow-400/10',
  'Complete':             'text-sky-400 bg-sky-400/10',
};

const SEED_DOCS = [
  {
    id: 'seed-1',
    title: 'Methodology Chapter v2',
    type: 'Thesis Chapter',
    content: '',
    status: 'Awaiting Peer Review',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 'seed-2',
    title: 'Conference Abstract',
    type: 'Abstract',
    content: '',
    status: 'AI Feedback Ready',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 'seed-3',
    title: 'Lit Review Outline',
    type: 'Literature Review',
    content: '',
    status: 'Drafting',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
  },
];

// ─── helpers ─────────────────────────────────────────────────────────────────

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

// ─── New Draft Modal ──────────────────────────────────────────────────────────

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-medium text-white">New Draft</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-1.5">Title</label>
            <input
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Introduction — draft 1"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-zinc-600"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-1.5">Document type</label>
            <div className="flex flex-wrap gap-2">
              {DOC_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${
                    type === t
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex-1 py-2.5 text-sm font-semibold bg-yellow-400 hover:bg-yellow-300 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-black rounded-xl transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Document List ────────────────────────────────────────────────────────────

function DocList({ docs, onOpen, onNew, onDuplicate, onDelete }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-1">My Documents</h2>
          <p className="text-zinc-400 text-sm">{docs.length} draft{docs.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={onNew}
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-lg shadow-yellow-400/20"
        >
          <Plus size={16} /> New Draft
        </button>
      </div>

      {docs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <FileText size={40} className="text-zinc-700 mb-4" />
          <p className="text-zinc-400 font-medium">No documents yet</p>
          <p className="text-zinc-600 text-sm mt-1">Create your first draft to get started.</p>
          <button
            onClick={onNew}
            className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold rounded-full transition-colors"
          >
            <Plus size={15} /> New Draft
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {docs
            .slice()
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
            .map((doc) => (
              <div
                key={doc.id}
                onClick={() => onOpen(doc.id)}
                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl cursor-pointer group transition-colors"
              >
                <div className="w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                  <FileText size={16} className="text-zinc-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors truncate">
                    {doc.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-xs text-zinc-500">{doc.type}</span>
                    <span className="text-zinc-700 text-xs">·</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <AlignLeft size={10} /> {wordCount(doc.content).toLocaleString()} words
                    </span>
                    <span className="text-zinc-700 text-xs">·</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={10} /> {timeAgo(doc.updatedAt)}
                    </span>
                  </div>
                </div>

                <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${STATUS_STYLES[doc.status] ?? STATUS_STYLES.Drafting}`}>
                  {doc.status}
                </span>

                {/* Actions — visible on hover */}
                <div
                  className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => onDuplicate(doc.id)}
                    title="Duplicate"
                    className="p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <Copy size={14} />
                  </button>
                  <button
                    onClick={() => onDelete(doc.id)}
                    title="Delete"
                    className="p-1.5 text-zinc-500 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

// ─── Editor View ──────────────────────────────────────────────────────────────

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

  return (
    <div className="h-full flex flex-col max-w-3xl mx-auto animate-in fade-in duration-300">
      {/* Editor toolbar */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors shrink-0"
        >
          <ArrowLeft size={15} /> All documents
        </button>

        <div className="h-4 w-px bg-zinc-800 shrink-0" />

        {/* Type selector */}
        <div className="relative">
          <button
            onClick={() => { setShowTypeMenu((v) => !v); setShowStatusMenu(false); }}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-lg px-2.5 py-1.5 transition-colors"
          >
            {doc.type} <ChevronDown size={12} />
          </button>
          {showTypeMenu && (
            <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-10 py-1 min-w-max">
              {DOC_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => { save({ type: t }); setShowTypeMenu(false); }}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                    doc.type === t ? 'text-yellow-400' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Status selector */}
        <div className="relative">
          <button
            onClick={() => { setShowStatusMenu((v) => !v); setShowTypeMenu(false); }}
            className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${STATUS_STYLES[doc.status] ?? STATUS_STYLES.Drafting} border-current/20`}
          >
            {doc.status} <ChevronDown size={12} />
          </button>
          {showStatusMenu && (
            <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-10 py-1 min-w-max">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => { save({ status: s }); setShowStatusMenu(false); }}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                    doc.status === s ? 'text-yellow-400' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="ml-auto flex items-center gap-3 text-xs text-zinc-600 shrink-0">
          <span>{wc.toLocaleString()} words</span>
          {savedAt && <span>Saved {timeAgo(savedAt.toISOString())}</span>}
        </div>
      </div>

      {/* Title */}
      <input
        value={doc.title}
        onChange={(e) => save({ title: e.target.value })}
        placeholder="Untitled"
        className="text-2xl font-light text-white bg-transparent border-none outline-none placeholder:text-zinc-700 mb-4 w-full"
      />

      {/* Body */}
      <textarea
        ref={textareaRef}
        value={doc.content}
        onChange={(e) => save({ content: e.target.value })}
        placeholder="Start writing…"
        className="flex-1 bg-transparent text-zinc-200 text-sm leading-relaxed resize-none outline-none placeholder:text-zinc-700 w-full"
      />
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function DocsView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [docs, setDocs] = useLocalStorage('draftlab-docs', SEED_DOCS);
  const [view, setView] = useState('list');
  const [activeDocId, setActiveDocId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ?new=1 → open modal; ?open=<id> → jump straight to editor
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
      id: newId(),
      title,
      type,
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
    const copy = {
      ...src,
      id: newId(),
      title: `${src.title} (copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setDocs((prev) => [copy, ...prev]);
  }

  function handleDelete(id) {
    setDocs((prev) => prev.filter((d) => d.id !== id));
    if (activeDocId === id) { setView('list'); setActiveDocId(null); }
  }

  return (
    <div className="h-full flex flex-col">
      {showModal && (
        <NewDraftModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}

      {view === 'editor' ? (
        <DocEditor
          docId={activeDocId}
          docs={docs}
          onUpdate={handleUpdate}
          onBack={() => setView('list')}
        />
      ) : (
        <DocList
          docs={docs}
          onOpen={(id) => { setActiveDocId(id); setView('editor'); }}
          onNew={() => setShowModal(true)}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
