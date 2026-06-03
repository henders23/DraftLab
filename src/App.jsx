import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CommonsTopNav from './components/CommonsTopNav';
import LandingView from './views/LandingView';
import HomeView from './views/HomeView';
import EventsView from './views/EventsView';
import FeedbackView from './views/FeedbackView';
import MentorView from './views/MentorView';
import PricingView from './views/PricingView';

function AppShell({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <CommonsTopNav />
      <div style={{ paddingTop: 64 }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<LandingView />} />
        <Route path="/pricing" element={<PricingView />} />
        <Route path="/home" element={<AppShell><HomeView /></AppShell>} />
        <Route path="/events" element={<AppShell><EventsView /></AppShell>} />
        <Route path="/feedback" element={<AppShell><FeedbackView /></AppShell>} />
        <Route path="/mentor" element={<AppShell><MentorView /></AppShell>} />
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
