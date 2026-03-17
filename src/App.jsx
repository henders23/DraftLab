import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import PlaceholderView from './views/PlaceholderView';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-yellow-400/30">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'dashboard'
            ? <DashboardView />
            : <PlaceholderView tabName={activeTab} />
          }
        </div>
      </main>
    </div>
  );
}
