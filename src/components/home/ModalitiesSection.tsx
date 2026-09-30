import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HEALING_MODALITIES } from '../../data/spiritualData';

export const ModalitiesSection: React.FC = () => {
  return (
    <section id="modalities" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block">
            Healing Modalities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
            16 Healing Modalities
          </h2>
          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] text-sm font-sans leading-relaxed">
            Different modalities may be combined depending on the individual’s requirements.
          </p>
        </motion.div>

        {/* 16 Modalities Dynamic Grid with Hover Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {HEALING_MODALITIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="p-5 rounded-2xl border border-purple-200/70 dark:border-white/10 bg-white/70 dark:bg-[#1A0E28]/80 card-hover flex flex-col justify-between space-y-3 backdrop-blur-xs shadow-xs"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg text-[#241734] dark:text-[#F5EEFA] font-medium leading-snug">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note on Combination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center space-y-4"
        >
          <p className="text-xs font-sans tracking-wide text-[#5C4573] dark:text-[#C5B4DA] italic">
            “Different modalities may be combined depending on the individual’s requirements.”
          </p>
          <div>
            <a
              href="#sessions"
              className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.18em] uppercase text-[#3B1E54] dark:text-[#F5EEFA] hover:text-[#5B2E82] dark:hover:text-[#D5C2EC] font-medium border-b border-purple-300 dark:border-white/20 pb-1 transition-all cursor-pointer"
            >
              <span>View Sessions & Pricing</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
