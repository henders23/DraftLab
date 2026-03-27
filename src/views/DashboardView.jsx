import React from 'react';
import ActiveDrafts from '../components/dashboard/ActiveDrafts';
import LearningZone from '../components/dashboard/LearningZone';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import PeerRequests from '../components/dashboard/PeerRequests';

export default function DashboardView() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Welcome */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-1">Good afternoon, Elena.</h2>
          <p className="text-zinc-400">You're on a roll — what's today's writing goal?</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 shrink-0">
          <span className="text-base">🔥</span>
          <span className="text-sm font-medium text-white">12-day streak</span>
        </div>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left (wider): Drafts + Peer Requests */}
        <div className="lg:col-span-2 space-y-6">
          <ActiveDrafts />
          <PeerRequests />
        </div>

        {/* Right: Events + Learning */}
        <div className="space-y-6">
          <UpcomingEvents />
          <LearningZone />
        </div>

      </div>
    </div>
  );
}
