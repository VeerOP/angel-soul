import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, TESTIMONIAL_QUOTE } from '../data/spiritualData';

export const TestimonialsPage: React.FC = () => {
  const focusAreas = [
    { title: 'Emotional Release', desc: 'Releasing accumulated baggage, heavy patterns, and unexpressed grief.' },
    { title: 'Feeling Lighter & Clearer', desc: 'Regaining energetic buoyancy, clarity of mind, and sovereign boundaries.' },
    { title: 'Personal Breakthroughs', desc: 'Shifting subconscious blocks and moving past old self-imposed limits.' },
    { title: 'Shifts After Sessions & Retreats', desc: 'Experiencing lasting energetic transformation and conscious new direction.' }
  ];

  return (
    <div className="pt-12 pb-28 bg-[#F7F3FB] text-[#241734] dark:bg-[#12091C] dark:text-[#F5EEFA] min-h-screen transition-colors duration-300">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300">
            <span>What People Say</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Transformation Stories
          </h1>

          <div className="w-12 h-px bg-purple-300/60 dark:bg-white/20 mx-auto my-6" />

          <p className="font-serif italic text-xl sm:text-2xl text-[#241734] dark:text-purple-100 max-w-2xl mx-auto leading-relaxed">
            “{TESTIMONIAL_QUOTE.quote}”
          </p>

          <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
            — Arti Bhadra, Founder of Angel Soul
          </span>
        </motion.div>
      </div>

      {/* Focus Pillars */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-3 card-hover backdrop-blur-xs"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block">
                0{idx + 1} • Transformation Pillar
              </span>
              <h3 className="font-heading text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                {area.title}
              </h3>
              <p className="text-[#5C4573] dark:text-purple-200/80 font-sans text-xs sm:text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note / Invitation */}
        <section className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-12 rounded-3xl border border-purple-200/80 dark:border-white/10 text-center space-y-6 card-hover backdrop-blur-xs">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block">
            Client Voices
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
            Every Journey is Unique
          </h2>
          <div className="w-8 h-px bg-purple-200 dark:bg-white/10 mx-auto" />
          <p className="text-[#5C4573] dark:text-purple-200/80 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Client testimonials and verified experiences are being curated and will be shared here. Begin with an Energy Scan to discover what your energy is asking for.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/energy-scan"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-900/10 group cursor-pointer"
            >
              <span>Book Energy Scan (₹7,000)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Connect with Arti</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
