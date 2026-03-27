import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { EVENTS } from '../../data/events';

export default function UpcomingEvents() {
  const [first, second] = EVENTS;

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white flex items-center gap-2">
          <Calendar className="text-rose-400" size={20} /> Up Next
        </h3>
        <Link to="/events" className="text-sm text-rose-400 hover:text-rose-300 transition-colors">
          All events
        </Link>
      </div>

      <div className="space-y-4">
        {/* Today's event */}
        <div className="relative pl-6 border-l-2 border-rose-500/30 pb-4">
          <div className="absolute w-3 h-3 bg-rose-500 rounded-full -left-[7px] top-1 ring-4 ring-zinc-900" />
          <p className="text-xs font-medium text-rose-400 mb-1">{first.date}, {first.time}</p>
          <h4 className="text-sm font-medium text-white">{first.title}</h4>
          <p className="text-xs text-zinc-500 mt-1">{first.type} · {first.duration}</p>
          <button className="mt-3 text-xs bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg font-medium transition-colors">
            Join Room
          </button>
        </div>

        {/* Next event */}
        <div className="relative pl-6 border-l-2 border-zinc-800 pb-2">
          <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[7px] top-1 ring-4 ring-zinc-900" />
          <p className="text-xs font-medium text-zinc-400 mb-1">{second.date}, {second.time}</p>
          <h4 className="text-sm font-medium text-zinc-300">{second.title}</h4>
          <p className="text-xs text-zinc-500 mt-1">{second.type} · {second.duration}</p>
        </div>
      </div>
    </section>
  );
}
