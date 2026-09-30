import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MY_STORY } from '../data/spiritualData';
import { getAssetUrl } from '../utils/assetUrl';

export const MyStoryPage: React.FC = () => {
  return (
    <article className="py-16 sm:py-24 bg-[#F7F3FB] text-[#241734] dark:bg-[#12091C] dark:text-[#F5EEFA] min-h-screen transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#735391] dark:text-purple-300 block">
            Arti Bhadra
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-[#241734] dark:text-[#F5EEFA]">
            {MY_STORY.headline}
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#4A3B5C] dark:text-purple-200 max-w-xl mx-auto leading-relaxed">
            "{MY_STORY.quote}"
          </p>
        </motion.div>

        {/* Portrait Inset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 bg-purple-50 dark:bg-stone-900 group shadow-lg shadow-purple-900/5 card-hover"
        >
          <div className="overflow-hidden">
            <img
              src={getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')}
              alt="Arti Bhadra – Founder of Angel Soul"
              className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="p-3.5 bg-white/90 dark:bg-[#181322]/95 border-t border-purple-200/60 dark:border-white/5 text-center text-xs text-[#735391] dark:text-purple-300 font-sans">
            Arti Bhadra • Founder of Angel Soul
          </div>
        </motion.div>

        {/* Verbatim Story Text from Section 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-[#3B2C4A] dark:text-purple-100/90 font-sans text-base sm:text-lg leading-relaxed pt-4 border-t border-purple-200/80 dark:border-white/10"
        >
          {MY_STORY.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </motion.div>

        {/* Conclusion Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-purple-200/80 dark:border-white/10 text-center space-y-4"
        >
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#241734] dark:text-purple-100 font-normal">
            "I transformed myself. <br />
            I discovered my purpose. <br />
            And now, I am here to help you discover yours."
          </blockquote>
          <span className="text-xs font-sans tracking-widest uppercase text-[#735391] dark:text-purple-300 block">
            — Arti Bhadra
          </span>

          <div className="pt-6">
            <Link
              to="/energy-scan"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium transition-all shadow-sm hover:shadow-md hover:shadow-purple-900/10 group cursor-pointer"
            >
              <span>BOOK YOUR ENERGY SCAN (₹7,000)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};
