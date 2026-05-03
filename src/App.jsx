import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { ProgressProvider } from './context/ProgressContext';
import { ToastProvider } from './context/ToastContext';
import LandingView from './views/LandingView';
import DashboardView from './views/DashboardView';
import AIFeedbackView from './views/AIFeedbackView';
import PeerReviewView from './views/PeerReviewView';
import LearningView from './views/LearningView';
import TopicView from './views/TopicView';
import LessonView from './views/LessonView';
import EventsView from './views/EventsView';
import DocsView from './views/DocsView';

function AppLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-white/20">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <ToastProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingView />} />
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashboardView />} />
              <Route path="/ai" element={<AIFeedbackView />} />
              <Route path="/peer" element={<PeerReviewView />} />
              <Route path="/learning" element={<LearningView />} />
              <Route path="/learning/:topicSlug" element={<TopicView />} />
              <Route path="/learning/:topicSlug/:lessonSlug" element={<LessonView />} />
              <Route path="/events" element={<EventsView />} />
              <Route path="/docs" element={<DocsView />} />
            </Route>
          </Routes>
        </ToastProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}
