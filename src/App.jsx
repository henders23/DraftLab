import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import EventsView from './views/EventsView';
import LearningView from './views/LearningView';
import PlaceholderView from './views/PlaceholderView';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white flex font-sans selection:bg-yellow-400/30">
        <Sidebar />

        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header />

          <div className="flex-1 overflow-y-auto p-8">
            <Routes>
              <Route path="/" element={<DashboardView />} />
              <Route path="/ai" element={<PlaceholderView />} />
              <Route path="/peer" element={<PlaceholderView />} />
              <Route path="/learning" element={<LearningView />} />
              <Route path="/events" element={<EventsView />} />
              <Route path="/docs" element={<PlaceholderView />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
