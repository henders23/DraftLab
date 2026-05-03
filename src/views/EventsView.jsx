import React from 'react';
import { Calendar, Clock, Users, Tag } from 'lucide-react';
import { EVENTS } from '../data/events';
import { useToast } from '../context/ToastContext';

export default function EventsView() {
  const toast = useToast();
  const todayCount = EVENTS.filter((e) => e.isToday).length;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-light text-white mb-1 flex items-center gap-3">
            <Calendar size={28} /> Events & Workshops
          </h2>
          <p className="text-zinc-400">Browse upcoming sessions and join live writing communities.</p>
        </div>
        {todayCount > 0 && (
          <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm text-white font-medium">{todayCount} live today</span>
          </div>
        )}
      </div>

      {/* Event list */}
      <div className="space-y-4">
        {EVENTS.map((event) => (
          <div
            key={event.id}
            className={`bg-zinc-900 border rounded-2xl p-5 hover:border-zinc-600 transition-colors ${event.isToday ? 'border-zinc-600' : 'border-zinc-800'}`}
          >
            <div className="flex items-start gap-4">
              {/* Date badge */}
              <div className={`shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-center ${event.isToday ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-300'}`}>
                <span className="text-xs font-semibold uppercase leading-none">
                  {event.isToday ? 'Today' : event.date.split(' ')[0]}
                </span>
                {!event.isToday && event.date.split(' ')[1] && (
                  <span className="text-lg font-bold leading-none mt-0.5">{event.date.split(' ')[1]}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border mb-1.5 text-zinc-300 bg-zinc-800 border-zinc-700">
                      {event.type}
                    </span>
                    <h3 className="text-base font-medium text-white">{event.title}</h3>
                  </div>
                  <button
                    onClick={() => toast(event.isToday ? `Joining "${event.title}" — link opening…` : `Registered for "${event.title}"!`)}
                    className="text-xs font-semibold px-4 py-1.5 bg-white hover:bg-zinc-100 text-black rounded-xl transition-colors shrink-0"
                  >
                    {event.isToday ? 'Join Now' : 'Register'}
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><Clock size={11} /> {event.time} · {event.duration}</span>
                  <span className="flex items-center gap-1"><Users size={11} /> {event.spotsLeft} spots left</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {event.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                      <Tag size={9} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
