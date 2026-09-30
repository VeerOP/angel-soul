import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface Toast {
  id: string;
  title: string;
  message?: string;
  type?: 'gold' | 'success' | 'info';
  image?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, message, type = 'gold', image, action }: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = { id, title, message, type, image, action };

      setToasts((prev) => [newToast, ...prev.slice(0, 3)]); // Keep max 4 toasts

      setTimeout(() => {
        removeToast(id);
      }, 5000);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto glass-card-dark text-ivory-50 p-4 rounded-xl border border-gold-400/40 shadow-glow-gold flex items-start gap-3 backdrop-blur-xl"
            >
              {toast.image ? (
                <img
                  src={toast.image}
                  alt="item"
                  className="w-12 h-12 rounded-lg object-cover border border-gold-400/30 flex-shrink-0"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center flex-shrink-0">
                  {toast.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : toast.type === 'info' ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                  )}
                </div>
              )}

              <div className="flex-1 min-w-0 pr-2">
                <h4 className="font-heading font-bold text-sm text-gold-200 tracking-wide">
                  {toast.title}
                </h4>
                {toast.message && (
                  <p className="text-xs text-ivory-300/80 mt-0.5 line-clamp-2 leading-relaxed font-sans">
                    {toast.message}
                  </p>
                )}
                {toast.action && (
                  <button
                    onClick={() => {
                      toast.action?.onClick();
                      removeToast(toast.id);
                    }}
                    className="mt-2 text-xs font-medium text-gold-400 hover:text-gold-300 underline underline-offset-4 flex items-center gap-1"
                  >
                    {toast.action.label}
                  </button>
                )}
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="text-ivory-400 hover:text-ivory-100 transition-colors p-1"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
