import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { ProgressProvider } from './context/ProgressContext';
import { ToastProvider } from './context/ToastContext';
import DashboardView from './views/DashboardView';
import AIFeedbackView from './views/AIFeedbackView';
import PeerReviewView from './views/PeerReviewView';
import LearningView from './views/LearningView';
import TopicView from './views/TopicView';
import LessonView from './views/LessonView';
import EventsView from './views/EventsView';
import DocsView from './views/DocsView';

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <ToastProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-black text-white flex font-sans selection:bg-yellow-400/30">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
              <Header />

              <div className="flex-1 overflow-y-auto p-8">
                <Routes>
                  <Route path="/" element={<DashboardView />} />
                  <Route path="/ai" element={<AIFeedbackView />} />
                  <Route path="/peer" element={<PeerReviewView />} />
                  <Route path="/learning" element={<LearningView />} />
                  <Route path="/learning/:topicSlug" element={<TopicView />} />
                  <Route path="/learning/:topicSlug/:lessonSlug" element={<LessonView />} />
                  <Route path="/events" element={<EventsView />} />
                  <Route path="/docs" element={<DocsView />} />
                </Routes>
              </div>
            </main>
          </div>
        </ToastProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}
