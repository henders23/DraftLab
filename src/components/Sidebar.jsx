import React from 'react';
import {
  BookOpen, Users, Calendar, Bot,
  LayoutDashboard, FileText, Settings, Zap,
} from 'lucide-react';
import NavItem from './NavItem';

const NAV_ITEMS = [
  { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { id: 'ai',        icon: <Bot size={20} />,             label: 'AI Feedback' },
  { id: 'peer',      icon: <Users size={20} />,           label: 'Peer Review' },
  { id: 'learning',  icon: <BookOpen size={20} />,        label: 'Learning Zone' },
  { id: 'events',    icon: <Calendar size={20} />,        label: 'Events & Co-working' },
  { id: 'docs',      icon: <FileText size={20} />,        label: 'My Documents' },
];

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col shrink-0">
      {/* Brand */}
      <div className="p-6">
        <h1 className="font-bold text-xl flex items-center gap-2 text-white">
          <Zap className="text-yellow-400 fill-yellow-400" size={20} />
          DraftLab
        </h1>
        <p className="text-zinc-500 text-xs mt-1">Academic Writing Workspace</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map(({ id, icon, label }) => (
          <NavItem
            key={id}
            icon={icon}
            label={label}
            isActive={activeTab === id}
            onClick={() => onTabChange(id)}
          />
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 mt-auto">
        <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/api/placeholder/40/40"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-yellow-400"
            />
            <div>
              <p className="text-sm font-medium text-white">Elena R.</p>
              <p className="text-xs text-zinc-400">12 Day Streak 🔥</p>
            </div>
          </div>
          <button className="w-full py-2 text-sm text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors flex items-center justify-center gap-2">
            <Settings size={16} /> Settings
          </button>
        </div>
      </div>
    </aside>
  );
}
