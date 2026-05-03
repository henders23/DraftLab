import React from 'react';
import { Bot, Users, Calendar } from 'lucide-react';

const ACTIONS = [
  {
    icon: <Bot size={24} />,
    title: 'Get AI Feedback',
    description: 'Upload a draft for instant checks on flow, grammar, and academic tone.',
  },
  {
    icon: <Users size={24} />,
    title: 'Peer Review',
    description: 'Earn credits by reviewing others, or spend credits to get human feedback.',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Join a Session',
    description: 'Hop into a live Pomodoro co-writing room happening right now.',
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {ACTIONS.map(({ icon, title, description }) => (
        <div
          key={title}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-600 hover:bg-zinc-800/80 transition-all cursor-pointer group"
        >
          <div className="w-12 h-12 bg-zinc-800 text-zinc-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
            {icon}
          </div>
          <h3 className="text-base font-medium text-white mb-1">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
      ))}
    </div>
  );
}
