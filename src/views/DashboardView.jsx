import React from 'react';
import QuickActions from '../components/dashboard/QuickActions';
import ActiveDrafts from '../components/dashboard/ActiveDrafts';
import LearningZone from '../components/dashboard/LearningZone';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import PeerRequests from '../components/dashboard/PeerRequests';

export default function DashboardView() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Welcome */}
      <div>
        <h2 className="text-3xl font-light text-white mb-2">Good afternoon, Elena.</h2>
        <p className="text-zinc-400">You're making great progress. What's the focus for today's session?</p>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">

        {/* Left: Drafts + Learning */}
        <div className="lg:col-span-2 space-y-8">
          <ActiveDrafts />
          <LearningZone />
        </div>

        {/* Right: Events + Peer */}
        <div className="space-y-8">
          <UpcomingEvents />
          <PeerRequests />
        </div>

      </div>
    </div>
  );
}
