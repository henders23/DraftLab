import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const TITLES = {
  ai:       'AI Feedback Engine',
  peer:     'Peer Review Hub',
  learning: 'Learning Modules',
  events:   'Events & Workshops',
  docs:     'My Documents',
};

export default function PlaceholderView({ tabName }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
      <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-4 text-zinc-500">
        <LayoutDashboard size={32} />
      </div>
      <h2 className="text-2xl font-light text-white mb-2">{TITLES[tabName]}</h2>
      <p className="text-zinc-400 max-w-md">
        This section is ready for development. Click <span className="text-yellow-400">Dashboard</span> in the sidebar to return to the main overview.
      </p>
    </div>
  );
}
