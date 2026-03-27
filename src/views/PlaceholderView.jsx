import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, Users, BookOpen, Calendar, FileText } from 'lucide-react';

const PAGE_META = {
  '/ai':       { title: 'AI Feedback Engine',    icon: <Bot size={32} />,      color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  '/peer':     { title: 'Peer Review Hub',        icon: <Users size={32} />,    color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  '/learning': { title: 'Learning Modules',       icon: <BookOpen size={32} />, color: 'text-yellow-400',  bg: 'bg-yellow-400/10' },
  '/events':   { title: 'Events & Workshops',     icon: <Calendar size={32} />, color: 'text-rose-400',    bg: 'bg-rose-400/10' },
  '/docs':     { title: 'My Documents',           icon: <FileText size={32} />, color: 'text-zinc-300',    bg: 'bg-zinc-700/30' },
};

export default function PlaceholderView() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? { title: 'Coming Soon', icon: null, color: 'text-zinc-400', bg: 'bg-zinc-800' };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
      <div className={`w-16 h-16 ${meta.bg} border border-zinc-800 rounded-2xl flex items-center justify-center mb-4 ${meta.color}`}>
        {meta.icon}
      </div>
      <h2 className="text-2xl font-light text-white mb-2">{meta.title}</h2>
      <p className="text-zinc-400 max-w-sm text-sm">
        This section is being built. Check back soon, or head back to{' '}
        <a href="/" className="text-yellow-400 hover:text-yellow-300">Dashboard</a>.
      </p>
    </div>
  );
}
