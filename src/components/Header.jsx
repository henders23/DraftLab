import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Search, Plus, Bot, Users, Calendar, FileText, BookOpen, X } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { EVENTS } from '../data/events';
import { MODULES } from '../data/modules';

const SHORTCUTS = [
  { to: '/ai',     icon: <Bot size={14} />,      label: 'AI Feedback' },
  { to: '/peer',   icon: <Users size={14} />,    label: 'Peer Review' },
  { to: '/events', icon: <Calendar size={14} />, label: 'Events' },
];

export default function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [docs] = useLocalStorage('draftlab-docs', []);
  const containerRef = useRef(null);

  const q = query.trim().toLowerCase();

  const results = q.length >= 2 ? {
    docs: docs.filter((d) => d.title.toLowerCase().includes(q)).slice(0, 3),
    events: EVENTS.filter((e) =>
      e.title.toLowerCase().includes(q) ||
      e.description?.toLowerCase().includes(q) ||
      e.tags?.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 3),
    lessons: MODULES.flatMap((m) =>
      m.lessons
        .filter((l) => l.title.toLowerCase().includes(q))
        .map((l) => ({ ...l, moduleId: m.id, moduleName: m.title }))
    ).slice(0, 3),
  } : null;

  const hasResults = results && (results.docs.length + results.events.length + results.lessons.length) > 0;
  const showEmpty = open && q.length >= 2 && !hasResults;

  useEffect(() => {
    function onMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  function handleKey(e) {
    if (e.key === 'Escape') { setOpen(false); setQuery(''); }
  }

  function go(path) {
    navigate(path);
    setOpen(false);
    setQuery('');
  }

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-black/80 backdrop-blur-sm border-b border-zinc-800/50 sticky top-0 z-10 gap-4">
      <div className="relative w-80 shrink-0" ref={containerRef}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (q.length >= 2) setOpen(true); }}
          onKeyDown={handleKey}
          placeholder="Search drafts, events, or lessons..."
          className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-full pl-10 pr-8 py-2 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <X size={14} />
          </button>
        )}

        {open && hasResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden">
            {results.docs.length > 0 && (
              <div>
                <p className="text-xs font-medium text-zinc-500 px-4 pt-3 pb-1 uppercase tracking-wide">Documents</p>
                {results.docs.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => go(`/docs?open=${doc.id}`)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-800 transition-colors text-left"
                  >
                    <FileText size={14} className="text-zinc-500 shrink-0" />
                    <span className="text-sm text-zinc-200 truncate">{doc.title}</span>
                    <span className="text-xs text-zinc-600 ml-auto shrink-0">{doc.type}</span>
                  </button>
                ))}
              </div>
            )}
            {results.events.length > 0 && (
              <div>
                <p className="text-xs font-medium text-zinc-500 px-4 pt-3 pb-1 uppercase tracking-wide">Events</p>
                {results.events.map((ev) => (
                  <button
                    key={ev.id}
                    onClick={() => go('/events')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-800 transition-colors text-left"
                  >
                    <Calendar size={14} className="text-zinc-500 shrink-0" />
                    <span className="text-sm text-zinc-200 truncate">{ev.title}</span>
                    <span className="text-xs text-zinc-600 ml-auto shrink-0">{ev.type}</span>
                  </button>
                ))}
              </div>
            )}
            {results.lessons.length > 0 && (
              <div>
                <p className="text-xs font-medium text-zinc-500 px-4 pt-3 pb-1 uppercase tracking-wide">Lessons</p>
                {results.lessons.map((l) => (
                  <button
                    key={`${l.moduleId}-${l.id}`}
                    onClick={() => go('/learning')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-800 transition-colors text-left"
                  >
                    <BookOpen size={14} className="text-zinc-500 shrink-0" />
                    <span className="text-sm text-zinc-200 truncate">{l.title}</span>
                    <span className="text-xs text-zinc-600 ml-auto shrink-0 truncate max-w-28">{l.moduleName}</span>
                  </button>
                ))}
              </div>
            )}
            <div className="h-2" />
          </div>
        )}

        {showEmpty && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-50 px-4 py-5 text-center">
            <p className="text-sm text-zinc-500">No results for "<span className="text-zinc-300">{query}</span>"</p>
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-2">
        {SHORTCUTS.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-white bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-full transition-colors"
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <button className="relative p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full border border-black" />
        </button>
        <Link
          to="/docs?new=1"
          className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition-colors shadow-lg shadow-yellow-400/20"
        >
          <Plus size={16} /> New Draft
        </Link>
      </div>
    </header>
  );
}
