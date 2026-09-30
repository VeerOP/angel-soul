import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { ENERGY_SCAN_FLOW, BRAND_INFO } from '../../data/spiritualData';
import { useBooking } from '../../context/BookingContext';

export const EnergyScanFlowSection: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="energy-scan" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block">
            The Angel Soul Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
            Energy Scan & Healing Flow
          </h2>
          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] text-sm font-sans leading-relaxed">
            The journey begins with an Energy Scan (₹7,000). Through the scan, we understand your current emotional and energetic patterns, after which a personalised healing journey is created according to your needs.
          </p>
        </motion.div>

        {/* 5-Step Dynamic Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ENERGY_SCAN_FLOW.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-5 rounded-2xl bg-white/70 dark:bg-[#1A0E28]/80 border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#5C4573] dark:text-[#C5B4DA]">
                    {item.stepName}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-300 dark:bg-purple-700 group-hover:bg-[#3B1E54] dark:group-hover:bg-purple-300 transition-colors" />
                </div>

                <h3 className="font-serif text-lg text-[#241734] dark:text-[#F5EEFA] font-medium leading-snug">
                  {item.title}
                </h3>

                {item.price && (
                  <span className="inline-block text-[11px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-100/70 dark:bg-white/10 text-[#3B1E54] dark:text-[#F5EEFA]">
                    Fee: {item.price}
                  </span>
                )}

                <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => openBooking('energy-scan')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK YOUR ENERGY SCAN (₹7,000)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <a
            href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book an Energy Scan session (₹7,000).')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-purple-200/80 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-white/60 dark:hover:bg-white/5 font-sans text-xs tracking-[0.15em] uppercase font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
