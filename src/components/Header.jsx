import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Plus, Bot, Users, Calendar } from 'lucide-react';

const SHORTCUTS = [
  { to: '/ai',     icon: <Bot size={14} />,      label: 'AI Feedback' },
  { to: '/peer',   icon: <Users size={14} />,    label: 'Peer Review' },
  { to: '/events', icon: <Calendar size={14} />, label: 'Events' },
];

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-black/80 backdrop-blur-sm border-b border-zinc-800/50 sticky top-0 z-10 gap-4">
      <div className="relative w-80 shrink-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
        <input
          type="text"
          placeholder="Search drafts, events, or lessons..."
          className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600"
        />
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
          to="/docs"
          className="bg-white hover:bg-zinc-100 text-black text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
        >
          <Plus size={16} /> New Draft
        </Link>
      </div>
    </header>
  );
}
