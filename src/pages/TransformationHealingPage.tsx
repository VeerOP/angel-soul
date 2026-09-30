import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/spiritualData';

export const TransformationHealingPage: React.FC = () => {
  const modalities = [
    'Energy Healing',
    'Reiki',
    'Pranic Healing',
    'Chakra Healing',
    'Crystal Healing',
    'Akashic Reading & Healing',
    'Cord Cutting',
    'Access Bars',
    'Hypnotherapy',
    'Manifestation Work',
    'Aura Cleansing & Protection',
    'Other personalised healing practices'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <span>The Signature Journey</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Transformation Healing
          </h1>

          <div className="w-12 h-px bg-purple-300/40 dark:bg-white/20 mx-auto my-6" />

          <p className="font-serif italic text-xl sm:text-2xl text-[#3B1E54] dark:text-[#E2D5F2] max-w-2xl mx-auto leading-relaxed">
            “Transformation Healing is not a fixed package. It is a personalised journey tailored to what your energy is asking for.”
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/energy-scan"
              className="group px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all flex items-center gap-2"
            >
              <span>Start Your Healing Journey</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/sessions"
              className="px-7 py-3.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:-translate-y-0.5 active:scale-98 transition-all"
            >
              View Sessions & Prices
            </Link>
          </div>
          <p className="text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans tracking-wide">
            Begin with an Energy Scan and discover what your energy is asking for.
          </p>
        </motion.div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-12 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
              Process
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              How It Works
            </h2>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <div className="space-y-4 text-[#4A3B5C] dark:text-[#D4C7E3] font-sans leading-relaxed text-base">
            <p>
              The journey begins with an Energy Scan.
            </p>
            <p>
              Through the scan, Arti understands the person’s current emotional and energetic patterns and identifies the areas that require support.
            </p>
            <p>
              Based on the scan and the person’s individual requirements, a personalised complete healing journey is created.
            </p>
          </div>

          {/* 5-Step Flow Pathway */}
          <div className="pt-6 border-t border-purple-100 dark:border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-4">
              The Path of Transformation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { step: '01', title: 'Energy Scan', sub: 'Baseline assessment' },
                { step: '02', title: 'Understanding', sub: 'Emotional & energy state' },
                { step: '03', title: 'Personalised Plan', sub: 'Selected modalities' },
                { step: '04', title: 'Healing', sub: 'Release & shift patterns' },
                { step: '05', title: 'Integration', sub: 'New conscious direction' },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-400 hover:-translate-y-1 transition-all"
                >
                  <span className="font-mono text-xs text-[#735391] dark:text-[#A792C0] block mb-1">
                    {item.step}
                  </span>
                  <h4 className="font-serif text-sm text-[#241734] dark:text-white font-medium">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#5C4573] dark:text-[#C5B4DA] font-sans mt-0.5">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Modalities Combined */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-12 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
              Modalities
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              This journey may combine different modalities such as:
            </h2>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {modalities.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-400 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-0.5 flex items-center gap-3 text-xs sm:text-sm font-sans text-[#3B1E54] dark:text-[#E2D5F2] transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A2566] dark:bg-[#D5C2EC] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans italic pt-2">
            Different modalities may be combined depending on the individual’s requirements.
          </p>
        </motion.section>

        {/* Pricing Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-12 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
              Pricing Structure
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              Customised after the Energy Scan
            </h2>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] font-sans text-sm sm:text-base leading-relaxed">
            The complete healing journey and pricing depend on the individual’s requirements and the modalities/sessions recommended.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/energy-scan"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Book Energy Scan (₹7,000)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to inquire about starting a Transformation Healing journey.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
