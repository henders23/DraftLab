import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ToastProvider } from './context/ToastContext';
import LandingView from './views/LandingView';
import AuthView from './views/AuthView';
import DashboardView from './views/DashboardView';
import EventsView from './views/EventsView';
import LearningView from './views/LearningView';
import ProfileView from './views/ProfileView';
import CommunityView from './views/CommunityView';
import PeerReviewView from './views/PeerReviewView';
import PlaceholderView from './views/PlaceholderView';

function FullScreenLoader() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <Loader2 className="animate-spin text-zinc-500" size={28} />
    </div>
  );
}

// Public routes (landing, login) redirect signed-in users into the app.
function PublicOnly({ children }) {
  const { session, loading } = useAuth();
  if (loading) return <FullScreenLoader />;
  if (session) return <Navigate to="/dashboard" replace />;
  return children;
}

// Authenticated app shell. Redirects to /login when there is no session.
function ProtectedLayout() {
  const { session, loading } = useAuth();
  if (loading) return <FullScreenLoader />;
  if (!session) return <Navigate to="/login" replace />;

  return (
    <ProgressProvider>
      <div className="min-h-screen bg-black text-white flex font-sans selection:bg-yellow-400/30">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </ProgressProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <ScrollToTop />
          <Routes>
            {/* Public */}
            <Route
              path="/"
              element={
                <PublicOnly>
                  <LandingView />
                </PublicOnly>
              }
            />
            <Route
              path="/login"
              element={
                <PublicOnly>
                  <AuthView />
                </PublicOnly>
              }
            />

            {/* Protected app */}
            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<DashboardView />} />
              <Route path="/ai" element={<PlaceholderView />} />
              <Route path="/peer" element={<PeerReviewView />} />
              <Route path="/community" element={<CommunityView />} />
              <Route path="/learning" element={<LearningView />} />
              <Route path="/events" element={<EventsView />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/docs" element={<PlaceholderView />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
