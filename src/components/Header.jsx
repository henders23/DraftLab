import React from 'react';
import { Bell, Search, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-black/80 backdrop-blur-sm border-b border-zinc-800/50 sticky top-0 z-10">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
        <input
          type="text"
          placeholder="Search your drafts, events, or lessons..."
          className="w-full bg-zinc-900 border border-zinc-800 text-white text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-zinc-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-black" />
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition-colors shadow-lg shadow-yellow-400/20">
          <Plus size={16} /> New Draft
        </button>
      </div>
    </header>
  );
}
