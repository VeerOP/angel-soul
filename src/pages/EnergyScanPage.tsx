import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ENERGY_SCAN_FLOW, BRAND_INFO } from '../data/spiritualData';
import { useBooking } from '../context/BookingContext';

export const EnergyScanPage: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <div className="py-16 sm:py-24 bg-[#F7F3FB] dark:bg-[#12091C] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <span>The Starting Point</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#241734] dark:text-[#F5EEFA]">
            Energy Scan
          </h1>

          <div className="font-serif text-3xl sm:text-4xl text-[#3B1E54] dark:text-[#D5C2EC] font-light">
            ₹7,000
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#3B1E54] dark:text-[#E2D5F2] leading-relaxed">
            “The journey can begin with an Energy Scan, after which a personalised healing journey is created according to the individual’s needs.”
          </p>

          <p className="text-sm font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
            Through the Energy Scan, Arti understands your current emotional and energetic patterns and identifies the areas that require support.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openBooking('energy-scan')}
              className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>Book Energy Scan (₹7,000)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to book an Energy Scan (₹7,000) to understand my energy patterns.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-purple-300 dark:border-white/20 text-[#241734] dark:text-[#F5EEFA] bg-white/50 dark:bg-white/5 font-sans text-xs tracking-[0.15em] uppercase font-medium hover:border-[#3B1E54] dark:hover:border-white hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </motion.div>

        {/* 5-Step Suggested Website Flow from Section 7 of the brief */}
        <div className="space-y-6 pt-8 border-t border-purple-200/60 dark:border-white/10">
          <div className="text-center space-y-1 mb-10">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#735391] dark:text-[#A792C0] block">
              Suggested Website Flow
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#241734] dark:text-[#F5EEFA]">
              The 5-Step Journey
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {ENERGY_SCAN_FLOW.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-purple-200/80 dark:border-white/10 rounded-2xl p-6 bg-white/75 dark:bg-[#1A0E28]/80 card-hover shadow-xs space-y-2 backdrop-blur-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0]">
                    {item.stepName}
                  </span>
                  {item.price && (
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-purple-100/70 dark:bg-white/10 text-[#3B1E54] dark:text-[#F5EEFA]">
                      {item.price}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#241734] dark:text-[#F5EEFA]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center pt-8 border-t border-purple-200/60 dark:border-white/10">
          <p className="text-xs font-mono tracking-wide text-[#735391] dark:text-[#A792C0]">
            Energy Scan → Understanding → Personalised Healing → Transformation
          </p>
        </div>
      </div>
    </div>
  );
};
