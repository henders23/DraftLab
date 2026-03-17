import React from 'react';
import { Calendar } from 'lucide-react';

export default function UpcomingEvents() {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-6">
        <Calendar className="text-rose-400" size={20} /> Up Next
      </h3>

      <div className="space-y-4">
        {/* Today's event */}
        <div className="relative pl-6 border-l-2 border-rose-500/30 pb-4">
          <div className="absolute w-3 h-3 bg-rose-500 rounded-full -left-[7px] top-1 ring-4 ring-zinc-900" />
          <p className="text-xs font-medium text-rose-400 mb-1">Today, 14:00 GMT</p>
          <h4 className="text-sm font-medium text-white">Structuring a Literature Review</h4>
          <p className="text-xs text-zinc-500 mt-1">Workshop • 45 mins</p>
          <button className="mt-3 text-xs bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg font-medium transition-colors">
            Join Room
          </button>
        </div>

        {/* Tomorrow's event */}
        <div className="relative pl-6 border-l-2 border-zinc-800 pb-4">
          <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[7px] top-1 ring-4 ring-zinc-900" />
          <p className="text-xs font-medium text-zinc-400 mb-1">Tomorrow, 09:00 GMT</p>
          <h4 className="text-sm font-medium text-zinc-300">Shut-up &amp; Write: Pomodoro</h4>
          <p className="text-xs text-zinc-500 mt-1">Co-working • 2 hours</p>
        </div>
      </div>
    </section>
  );
}
