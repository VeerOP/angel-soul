import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const FloatingConnect: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919619633432?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-14 right-0 w-72 bg-white/95 dark:bg-[#1A0E28]/95 rounded-2xl p-4 border border-purple-200/80 dark:border-white/10 shadow-xl text-[#241734] dark:text-[#F5EEFA] mb-2 font-sans backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-white/5">
              <div>
                <span className="font-serif text-sm block font-medium">Arti Bhadra</span>
                <span className="text-[10px] text-[#735391] dark:text-[#A792C0] uppercase tracking-widest block font-mono">WhatsApp Sanctuary</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[#735391] hover:text-[#241734] dark:text-[#A792C0] dark:hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 space-y-1.5 text-xs text-[#4A3B5C] dark:text-[#D4C7E3]">
              <button
                type="button"
                onClick={() => handleWhatsApp('Hello Arti, I would like to book an Energy Scan (₹7,000).')}
                className="w-full text-left p-2 rounded-xl hover:bg-purple-50/70 dark:hover:bg-white/5 transition-colors border border-purple-100/60 dark:border-white/5 font-sans"
              >
                Book Energy Scan (₹7,000)
              </button>
              <button
                type="button"
                onClick={() => handleWhatsApp('Hello Arti, I want to inquire about the Meet Little Me retreat in Karjat (24–25 October 2026).')}
                className="w-full text-left p-2 rounded-xl hover:bg-purple-50/70 dark:hover:bg-white/5 transition-colors border border-purple-100/60 dark:border-white/5 font-sans"
              >
                Meet Little Me Retreat (Karjat)
              </button>
              <button
                type="button"
                onClick={() => handleWhatsApp('Hello Arti, I would like to book a 1:1 Session / Angel Tarot Reading with you.')}
                className="w-full text-left p-2 rounded-xl hover:bg-purple-50/70 dark:hover:bg-white/5 transition-colors border border-purple-100/60 dark:border-white/5 font-sans"
              >
                Book 1:1 Session / Tarot
              </button>
              <button
                type="button"
                onClick={() => handleWhatsApp('Hello Arti, I would like to inquire about a Personalised Energy Bracelet (DOB custom).')}
                className="w-full text-left p-2 rounded-xl hover:bg-purple-50/70 dark:hover:bg-white/5 transition-colors border border-purple-100/60 dark:border-white/5 font-sans"
              >
                Personalised Energy Bracelet (DOB)
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleWhatsApp('Hello Arti, I have an inquiry regarding Angel Soul.')}
              className="w-full py-2.5 rounded-xl bg-[#3B1E54] dark:bg-[#F5EEFA] text-white dark:text-[#1F0E31] text-xs font-sans tracking-wider uppercase font-medium text-center block hover:opacity-90 transition-opacity"
            >
              Direct Message (+91 96196 33432)
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Smooth Hover Elevation */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp Contact"
        className="w-12 h-12 rounded-full bg-[#3B1E54] dark:bg-[#F5EEFA] text-white dark:text-[#1F0E31] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
};
