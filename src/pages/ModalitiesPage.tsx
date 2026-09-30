import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HEALING_MODALITIES } from '../data/spiritualData';
import { ModalityCategory } from '../types';

export const ModalitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ModalityCategory>('All');

  const categories: ModalityCategory[] = [
    'All',
    'Intuitive & Readings',
    'Energy & Healing',
    'Consciousness & Mind',
    'Manifestation & Soul Growth'
  ];

  const filteredModalities = HEALING_MODALITIES.filter((m) => {
    if (selectedCategory === 'All') return true;
    return m.category === selectedCategory;
  });

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
            <span>Holistic Spectrum</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Healing Modalities
          </h1>

          <div className="w-12 h-px bg-purple-300/60 dark:bg-white/20 mx-auto my-6" />

          <p className="font-serif italic text-xl sm:text-2xl text-[#241734] dark:text-purple-100 max-w-2xl mx-auto leading-relaxed">
            “Different modalities may be combined depending on the individual’s requirements.”
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.1em] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] shadow-sm'
                    : 'border border-purple-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 text-[#5C4573] dark:text-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Grid of Modalities */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredModalities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 rounded-3xl border border-purple-200/80 dark:border-white/10 flex flex-col justify-between space-y-4 card-hover shadow-sm backdrop-blur-xs"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block">
                  {item.category}
                </span>

                <h3 className="font-heading text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  {item.name}
                </h3>

                <div className="w-6 h-px bg-purple-200 dark:bg-white/10" />

                <p className="text-xs sm:text-sm text-[#4A3B5C] dark:text-purple-200/80 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-100 dark:border-white/5 flex items-center justify-between">
                <Link
                  to="/energy-scan"
                  className="text-xs font-sans uppercase tracking-wider text-[#3B1E54] dark:text-purple-200 hover:text-[#5C4573] dark:hover:text-white flex items-center gap-1 font-medium group"
                >
                  <span>Energy Scan</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/sessions"
                  className="text-xs font-sans text-[#735391] dark:text-purple-300 hover:text-[#3B1E54] dark:hover:text-white"
                >
                  Prices
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <section className="mt-16 bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-12 rounded-3xl border border-purple-200/80 dark:border-white/10 text-center space-y-4 max-w-3xl mx-auto card-hover backdrop-blur-xs">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block">
            Starting Point
          </span>
          <h3 className="font-heading text-2xl text-[#241734] dark:text-[#F5EEFA] font-normal">
            Where Does Your Journey Begin?
          </h3>
          <p className="text-[#5C4573] dark:text-purple-200/80 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            The journey begins with an Energy Scan (₹7,000), after which a personalised healing journey is created using the relevant modalities according to your individual needs.
          </p>
          <div className="pt-2">
            <Link
              to="/energy-scan"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all shadow-sm hover:shadow-md hover:shadow-purple-900/10 group cursor-pointer"
            >
              <span>Book Your Energy Scan (₹7,000)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
