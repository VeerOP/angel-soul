import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ABOUT_ARTI, BRAND_INFO } from '../../data/spiritualData';
import { getAssetUrl } from '../../utils/assetUrl';

export const MeetArti: React.FC = () => {
  const modalitiesList = [
    'Tarot',
    'Reiki',
    'Pranic Healing',
    'Crystal Healing',
    'Akashic Reading & Healing',
    'Chakra Healing',
    'Manifestation',
    'Access Bars',
    'Cord Cutting',
    'Hypnotherapy'
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Portrait Frame with Soft Hover Depth */}
          <div className="lg:col-span-5">
            <div className="group rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-[#1A0E28]/80 card-hover shadow-sm backdrop-blur-xs">
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')}
                  alt="Arti Bhadra – Founder of Angel Soul"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Bio & Content from Brief */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block">
                {ABOUT_ARTI.subtitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
                {ABOUT_ARTI.title}
              </h2>
            </div>

            <div className="space-y-4 text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base font-sans leading-relaxed">
              <p>{ABOUT_ARTI.bio}</p>
              <p>{ABOUT_ARTI.philosophy}</p>
            </div>

            {/* Experience / Credibility */}
            <div className="pt-2">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 border-y border-purple-200/60 dark:border-white/10 text-center">
                {BRAND_INFO.credibility.map((c, i) => (
                  <div key={i} className="p-2.5 rounded-2xl bg-white/40 dark:bg-white/5 card-hover transition-colors">
                    <span className="font-serif text-2xl font-light text-[#241734] dark:text-[#F5EEFA] block">
                      {c.metric}
                    </span>
                    <span className="text-[11px] font-sans text-[#5C4573] dark:text-[#C5B4DA] block mt-0.5">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modalities from Brief with Subtle Interactive Tags */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#5C4573] dark:text-[#C5B4DA] block">
                Healing Modalities
              </span>
              <div className="flex flex-wrap gap-2">
                {modalitiesList.map((m, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans px-3.5 py-1 rounded-full border border-purple-200/70 dark:border-white/10 text-[#3B1E54] dark:text-[#E2D5F2] bg-white/70 dark:bg-white/5 hover:border-purple-300 dark:hover:border-purple-400 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-3 flex flex-wrap items-center gap-6">
              <a
                href="#story"
                className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.18em] uppercase text-[#3B1E54] dark:text-[#F5EEFA] hover:text-[#5B2E82] dark:hover:text-[#D5C2EC] font-medium border-b border-purple-300 dark:border-white/20 pb-1 transition-all cursor-pointer"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>
              <a
                href="#energy-scan"
                className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.18em] uppercase text-[#3B1E54] dark:text-[#F5EEFA] hover:text-[#5B2E82] dark:hover:text-[#D5C2EC] font-medium border-b border-purple-300 dark:border-white/20 pb-1 transition-all cursor-pointer"
              >
                <span>Book Energy Scan (₹7,000)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
