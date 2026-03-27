import React, { useState } from 'react';
import { Calendar, Clock, Users, Tag, CheckCircle, CalendarPlus, MessageSquarePlus } from 'lucide-react';
import { EVENTS } from '../data/events';
import { generateICS } from '../utils/ics';

const TYPE_FILTERS = ['All', 'Workshop', 'Co-working', 'Writing Retreat'];

const TYPE_STYLES = {
  Workshop:        { badge: 'bg-rose-500/15 text-rose-400',    dot: 'bg-rose-500' },
  'Co-working':    { badge: 'bg-emerald-500/15 text-emerald-400', dot: 'bg-emerald-500' },
  'Writing Retreat': { badge: 'bg-yellow-400/15 text-yellow-400', dot: 'bg-yellow-400' },
};

function EventCard({ event, registered, onRegister }) {
  const styles = TYPE_STYLES[event.type] ?? { badge: 'bg-zinc-700 text-zinc-300', dot: 'bg-zinc-400' };
  const lowSpots = event.spotsLeft > 0 && event.spotsLeft <= 3;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
      {/* Top row: type badge + spots */}
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5 ${styles.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
          {event.type}
        </span>
        {event.past ? (
          <span className="text-xs text-zinc-600">Past event</span>
        ) : event.spotsLeft === 0 ? (
          <span className="text-xs text-zinc-600">Full</span>
        ) : (
          <span className={`text-xs font-medium ${lowSpots ? 'text-rose-400' : 'text-zinc-400'}`}>
            {event.spotsLeft} spot{event.spotsLeft !== 1 ? 's' : ''} left
          </span>
        )}
      </div>

      {/* Title + host */}
      <div>
        <h3 className="text-base font-medium text-white mb-1">{event.title}</h3>
        <p className="text-xs text-zinc-500">{event.host}</p>
      </div>

      {/* Meta: date, time, duration */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
        <span className="flex items-center gap-1">
          <Calendar size={12} /> {event.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {event.time}
        </span>
        <span className="flex items-center gap-1">
          <Users size={12} /> {event.duration}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{event.description}</p>

      {/* Tags */}
      {event.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      {!event.past && (
        <div className="flex items-center gap-2 mt-auto pt-1">
          {registered ? (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium rounded-xl">
              <CheckCircle size={13} /> Registered
            </div>
          ) : (
            <button
              onClick={() => onRegister(event.id)}
              disabled={event.spotsLeft === 0}
              className="flex-1 py-2 bg-yellow-400 hover:bg-yellow-300 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-black text-xs font-semibold rounded-xl transition-colors"
            >
              {event.isToday ? 'Join Room' : event.spotsLeft === 0 ? 'Full' : 'Register'}
            </button>
          )}
          <a
            href={generateICS(event)}
            download={`${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`}
            title="Add to calendar"
            className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-xl transition-colors"
          >
            <CalendarPlus size={16} />
          </a>
        </div>
      )}
    </div>
  );
}

export default function EventsView() {
  const [activeType, setActiveType] = useState('All');
  const [showPast, setShowPast] = useState(false);
  const [registered, setRegistered] = useState(new Set());

  const filtered = EVENTS.filter((e) => {
    const matchesType = activeType === 'All' || e.type === activeType;
    const matchesPast = e.past === showPast;
    return matchesType && matchesPast;
  });

  function handleRegister(id) {
    setRegistered((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-1">Events & Co-working</h2>
          <p className="text-zinc-400 text-sm">Workshops, writing retreats, and live Pomodoro rooms for PhD writers.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-full transition-colors">
          <MessageSquarePlus size={15} /> Suggest an event
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Type tabs */}
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
          {TYPE_FILTERS.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                activeType === type
                  ? 'bg-yellow-400 text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Upcoming / Past toggle */}
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
          {[false, true].map((past) => (
            <button
              key={String(past)}
              onClick={() => setShowPast(past)}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                showPast === past
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {past ? 'Past' : 'Upcoming'}
            </button>
          ))}
        </div>
      </div>

      {/* Event grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Calendar size={40} className="text-zinc-700 mb-4" />
          <p className="text-zinc-400 font-medium">No {showPast ? 'past' : 'upcoming'} {activeType !== 'All' ? activeType.toLowerCase() : ''} events</p>
          <p className="text-zinc-600 text-sm mt-1">Try a different filter or check back soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              registered={registered.has(event.id)}
              onRegister={handleRegister}
            />
          ))}
        </div>
      )}
    </div>
  );
}
