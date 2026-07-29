import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CommonsTopNav from './components/CommonsTopNav';
import LandingView from './views/LandingView';
import HomeView from './views/HomeView';
import EventsView from './views/EventsView';
import FeedbackView from './views/FeedbackView';
import MentorView from './views/MentorView';
import PricingView from './views/PricingView';
import AuthView from './views/AuthView';
import { AuthProvider, useAuth } from './context/AuthContext';

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

function Protected({ children }) {
  const { session, loading } = useAuth();
  if (loading) return <div style={{ minHeight: '100vh', background: 'var(--paper)' }} />;
  if (!session) return <Navigate to="/auth?mode=signin" replace />;
  return <AppShell>{children}</AppShell>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<LandingView />} />
          <Route path="/pricing" element={<PricingView />} />
          <Route path="/auth" element={<AuthView />} />
          <Route path="/home" element={<Protected><HomeView /></Protected>} />
          <Route path="/events" element={<Protected><EventsView /></Protected>} />
          <Route path="/feedback" element={<Protected><FeedbackView /></Protected>} />
          <Route path="/mentor" element={<Protected><MentorView /></Protected>} />
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
