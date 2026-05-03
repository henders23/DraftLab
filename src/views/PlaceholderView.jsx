import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Users, BookOpen, Calendar, FileText } from 'lucide-react';

const PAGE_META = {
  '/ai':       { title: 'AI Feedback Engine', icon: <Bot size={32} />      },
  '/peer':     { title: 'Peer Review Hub',     icon: <Users size={32} />    },
  '/learning': { title: 'Learning Modules',    icon: <BookOpen size={32} /> },
  '/events':   { title: 'Events & Workshops',  icon: <Calendar size={32} /> },
  '/docs':     { title: 'My Documents',        icon: <FileText size={32} /> },
};

export default function PlaceholderView() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? { title: 'Coming Soon', icon: null };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
      <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-4 text-zinc-300">
        {meta.icon}
      </div>
      <h2 className="text-2xl font-light text-white mb-2">{meta.title}</h2>
      <p className="text-zinc-400 max-w-sm text-sm">
        This section is being built. Check back soon, or head back to{' '}
        <Link to="/dashboard" className="text-white hover:text-zinc-300 underline">Dashboard</Link>.
      </p>
    </div>
  );
}
