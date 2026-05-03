import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, X } from 'lucide-react';

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  }, []);

  function dismiss(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 rounded-xl shadow-lg pointer-events-auto animate-in slide-in-from-bottom-4 fade-in duration-300"
          >
            <CheckCircle size={15} className="text-white shrink-0" />
            <span>{t.message}</span>
            <button onClick={() => dismiss(t.id)} className="ml-2 text-zinc-500 hover:text-white transition-colors">
              <X size={13} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
