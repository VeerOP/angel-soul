import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../../data/spiritualData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-28 relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 text-center bg-[#F7F3FB] dark:bg-[#12091C] transition-colors duration-300 overflow-hidden">
      {/* Soft Ambient Ethereal Lavender Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/50 via-lavender-200/40 to-transparent dark:from-purple-950/30 dark:via-purple-900/20 dark:to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full space-y-8 my-auto relative z-10">
        {/* Brand Eyebrow with Gentle Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs shadow-xs">
            <span>Holistic & Transformational Healing by Arti Bhadra</span>
          </div>

          {/* Main Brand Title */}
          <div className="space-y-3 pt-1">
            <h1 className="font-serif tracking-[0.18em] text-4xl sm:text-6xl md:text-7xl font-light text-[#241734] dark:text-[#F5EEFA] block uppercase">
              ANGEL SOUL
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#4A2566] dark:text-[#D5C2EC] font-normal block">
              Heal. Release. Reconnect. Transform.
            </p>
          </div>

          <p className="font-sans text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
            Angel Soul is a holistic healing and transformation space founded by Arti Bhadra. Combining intuitive guidance with different healing modalities to help you understand yourself, release what no longer serves you, and move towards personal transformation.
          </p>
        </motion.div>

        {/* 3 Explicit Buttons from the Brief with Smooth Hover Animations */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
        >
          {/* Button 1: BOOK YOUR ENERGY SCAN */}
          <a
            href="#energy-scan"
            className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>BOOK YOUR ENERGY SCAN</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Button 2: EXPLORE HEALING */}
          <a
            href="#modalities"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-purple-300/80 dark:border-white/20 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] font-sans text-xs tracking-[0.15em] uppercase font-medium hover:border-[#3B1E54] dark:hover:border-white hover:-translate-y-0.5 hover:shadow-xs active:scale-98 transition-all flex items-center justify-center cursor-pointer"
          >
            EXPLORE HEALING
          </a>

          {/* Button 3: START YOUR HEALING JOURNEY */}
          <a
            href="#transformation-healing"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#3B1E54] dark:border-[#D5C2EC] text-[#3B1E54] dark:text-[#F5EEFA] font-sans text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#3B1E54] hover:text-white dark:hover:bg-[#F5EEFA] dark:hover:text-[#1F0E31] hover:-translate-y-0.5 hover:shadow-xs active:scale-98 transition-all flex items-center justify-center cursor-pointer"
          >
            START YOUR HEALING JOURNEY
          </a>
        </motion.div>

        {/* 4-Step Pathway Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pt-2"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-purple-200/50 dark:border-white/5 text-[11px] sm:text-xs font-sans tracking-wide text-[#5C4573] dark:text-[#C5B4DA] backdrop-blur-xs">
            <span>Energy Scan</span>
            <span className="text-purple-300 dark:text-purple-600">→</span>
            <span>Understanding</span>
            <span className="text-purple-300 dark:text-purple-600">→</span>
            <span>Personalised Healing</span>
            <span className="text-purple-300 dark:text-purple-600">→</span>
            <span>Transformation</span>
          </div>
        </motion.div>

        {/* Credibility Counters with Gentle Hover Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-8 sm:pt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto"
        >
          {BRAND_INFO.credibility.map((c, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-white/60 dark:bg-[#1A0E28]/80 border border-purple-200/60 dark:border-white/10 card-hover text-center backdrop-blur-xs"
            >
              <span className="font-serif text-2xl sm:text-3xl font-normal text-[#241734] dark:text-[#F5EEFA] block">
                {c.metric}
              </span>
              <span className="text-[11px] font-sans tracking-wide text-[#5C4573] dark:text-[#C5B4DA] block mt-0.5">
                {c.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
