import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ABOUT_ARTI, BRAND_INFO } from '../data/spiritualData';
import { getAssetUrl } from '../utils/assetUrl';

export const AboutPage: React.FC = () => {
  const modalities = [
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
    <div className="py-16 sm:py-24 bg-[#F7F3FB] text-[#241734] dark:bg-[#12091C] dark:text-[#F5EEFA] min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 text-center max-w-2xl mx-auto"
        >
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#735391] dark:text-purple-300 block">
            About Angel Soul
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-[#241734] dark:text-[#F5EEFA]">
            {ABOUT_ARTI.title}
          </h1>
          <p className="font-sans text-xs sm:text-sm tracking-wider uppercase text-[#5C4573] dark:text-purple-200">
            {ABOUT_ARTI.subtitle}
          </p>
        </motion.div>

        {/* Narrative & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait with zoom on hover */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 bg-purple-50 dark:bg-stone-900 group shadow-lg shadow-purple-900/5 card-hover">
              <div className="overflow-hidden">
                <img
                  src={getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')}
                  alt="Arti Bhadra – Founder of Angel Soul"
                  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-4 bg-white/90 dark:bg-[#181322]/95 border-t border-purple-200/60 dark:border-white/5 text-center">
                <span className="font-heading text-base text-[#241734] dark:text-white block font-medium">Arti Bhadra</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-[#735391] dark:text-purple-300 block">
                  Founder, Angel Soul
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Content from Brief */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#4A3B5C] dark:text-purple-100/90 font-sans leading-relaxed"
          >
            <p>{ABOUT_ARTI.bio}</p>

            <blockquote className="border-l-2 border-[#3B1E54] dark:border-purple-300 pl-4 py-1 italic font-serif text-base sm:text-lg text-[#241734] dark:text-white">
              "{ABOUT_ARTI.philosophy}"
            </blockquote>

            <p>
              I don’t want the website to look like a typical tarot website. I want Angel Soul to be positioned as a complete holistic healing and transformation brand. The journey can begin with an Energy Scan, after which a personalised healing journey is created according to the individual’s needs.
            </p>

            {/* Experience & Credibility from Section 4 */}
            <div className="pt-4 border-t border-purple-200/80 dark:border-white/10 space-y-2">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#735391] dark:text-purple-300 block">
                Experience & Credibility
              </span>
              <div className="grid grid-cols-3 gap-4 text-center py-4 border-y border-purple-100 dark:border-white/5">
                {BRAND_INFO.credibility.map((c, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/60 dark:bg-white/5 card-hover">
                    <span className="font-heading text-2xl sm:text-3xl font-normal text-[#3B1E54] dark:text-purple-200 block">
                      {c.metric}
                    </span>
                    <span className="text-[11px] font-sans text-[#5C4573] dark:text-purple-300 block mt-0.5">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modalities from Section 3 */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#735391] dark:text-purple-300 block">
                Work Includes:
              </span>
              <div className="flex flex-wrap gap-2">
                {modalities.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 text-[#3B1E54] dark:text-purple-200 bg-white/70 dark:bg-white/5 card-hover"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/my-story"
                className="text-xs font-sans tracking-[0.18em] uppercase text-[#3B1E54] dark:text-purple-200 hover:text-[#5C4573] dark:hover:text-white border-b border-[#3B1E54]/40 dark:border-purple-300/40 pb-0.5 transition-colors font-medium group inline-flex items-center gap-1"
              >
                <span>Read My Story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/energy-scan"
                className="text-xs font-sans tracking-[0.18em] uppercase text-[#3B1E54] dark:text-purple-200 hover:text-[#5C4573] dark:hover:text-white border-b border-[#3B1E54]/40 dark:border-purple-300/40 pb-0.5 transition-colors font-medium group inline-flex items-center gap-1"
              >
                <span>Book Energy Scan (₹7,000)</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
