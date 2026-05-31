import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, Users, Calendar, Bot,
  LayoutDashboard, FileText, LogOut, PenLine,
} from 'lucide-react';
import NavItem from './NavItem';
import { useAuth } from '../context/AuthContext';

const NAV_ITEMS = [
  { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { to: '/ai',        icon: <Bot size={20} />,             label: 'AI Feedback' },
  { to: '/peer',      icon: <Users size={20} />,           label: 'Peer Review' },
  { to: '/learning',  icon: <BookOpen size={20} />,        label: 'Learning Zone' },
  { to: '/events',    icon: <Calendar size={20} />,        label: 'Events & Co-working' },
  { to: '/docs',      icon: <FileText size={20} />,        label: 'My Documents' },
];

function initialsFrom(name, email) {
  const source = (name || email || '').trim();
  if (!source) return '?';
  const parts = source.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Sidebar() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'Writer';
  const initials = initialsFrom(profile?.full_name, user?.email);
  const streak = profile?.current_streak ?? 0;

  async function handleSignOut() {
    await signOut();
    navigate('/login');
  }

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col shrink-0">
      {/* Brand */}
      <div className="p-6">
        <h1 className="font-semibold text-lg flex items-center gap-2 text-white tracking-tight">
          <PenLine size={18} className="text-white" />
          Scholarly Voice
        </h1>
        <p className="text-zinc-600 text-xs mt-1">Academic Writing Workspace</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {NAV_ITEMS.map(({ to, icon, label }) => (
          <NavItem key={to} to={to} icon={icon} label={label} />
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 mt-auto">
        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-300 shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{displayName}</p>
              <p className="text-xs text-zinc-500">
                {streak > 0 ? `${streak}-day streak` : 'Start your streak today'}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full py-2 text-sm text-zinc-400 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <LogOut size={15} /> Sign out
          </button>
        </div>
      </div>
    </aside>
  );
}
