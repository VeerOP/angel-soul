import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, HeartHandshake, BookOpen } from 'lucide-react';
import { BRAND_INFO, ABOUT_ARTI, MY_STORY } from '../../data/spiritualData';
import { useBooking } from '../../context/BookingContext';
import { getAssetUrl } from '../../utils/assetUrl';

export const AboutAndStorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'story'>('about');
  const { openBooking } = useBooking();

  // If the user navigates directly to #story in the URL, switch to the story tab
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#story') {
        setActiveTab('story');
      } else if (window.location.hash === '#about') {
        setActiveTab('about');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300 relative"
    >
      {/* Invisible anchor target for #story */}
      <div id="story" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Portrait & Credibility Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Portrait Frame with Elegant Gold/Lavender Border */}
            <div className="group relative rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 bg-white/80 dark:bg-[#1A0E28]/80 shadow-md card-hover backdrop-blur-xs">
              <div className="overflow-hidden aspect-[3/4] relative">
                <img
                  src={getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')}
                  alt="Arti Bhadra – Founder of Angel Soul, Holistic & Transformational Healer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-purple-200 block">
                    FOUNDER & SPIRITUAL GUIDE
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white tracking-wide">
                    {BRAND_INFO.founderName}
                  </h3>
                  <p className="text-xs font-sans text-purple-100/90 mt-0.5">
                    {BRAND_INFO.title}
                  </p>
                </div>
              </div>

              {/* Founder Tagline Footer */}
              <div className="p-4 bg-white/90 dark:bg-[#1A0E28]/95 border-t border-purple-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#3B1E54] dark:text-[#E2D5F2]">
                  “{BRAND_INFO.tagline}”
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#735391] dark:text-[#A792C0] uppercase">
                  {BRAND_INFO.brandName}
                </span>
              </div>
            </div>

            {/* Credibility Counters tastefully presented */}
            <div className="grid grid-cols-3 gap-3">
              {BRAND_INFO.credibility.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/70 dark:bg-[#1A0E28]/80 border border-purple-200/60 dark:border-white/10 text-center shadow-xs card-hover"
                >
                  <span className="font-serif text-xl sm:text-2xl font-medium text-[#241734] dark:text-[#F5EEFA] block">
                    {c.metric}
                  </span>
                  <span className="text-[10px] font-sans tracking-tight text-[#5C4573] dark:text-[#C5B4DA] block mt-0.5">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Contact & WhatsApp Pill */}
            <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-white/5 border border-purple-100 dark:border-white/5 space-y-2 text-xs font-sans">
              <div className="flex items-center justify-between">
                <span className="text-[#5C4573] dark:text-[#C5B4DA] font-mono uppercase text-[10px] tracking-wider">
                  Instagram
                </span>
                <a
                  href={BRAND_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B1E54] dark:text-purple-300 font-medium hover:underline"
                >
                  {BRAND_INFO.contact.instagram}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5C4573] dark:text-[#C5B4DA] font-mono uppercase text-[10px] tracking-wider">
                  Appointment Contact
                </span>
                <a
                  href={`tel:${BRAND_INFO.contact.phone}`}
                  className="text-[#241734] dark:text-white font-mono hover:underline"
                >
                  {BRAND_INFO.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tab Switcher (About Angel Soul vs My Story) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Eyebrow */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block">
                Holistic Healing Space
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
                Angel Soul by Arti Bhadra
              </h2>
            </div>

            {/* Elegant Tab Switcher */}
            <div className="flex items-center p-1 rounded-2xl bg-purple-100/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`px-5 py-2.5 rounded-xl text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-[#3B1E54] text-white shadow-xs dark:bg-white dark:text-[#1F0E31]'
                    : 'text-[#5C4573] dark:text-[#C5B4DA] hover:text-[#241734] dark:hover:text-white'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>About Angel Soul</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('story')}
                className={`px-5 py-2.5 rounded-xl text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeTab === 'story'
                    ? 'bg-[#3B1E54] text-white shadow-xs dark:bg-white dark:text-[#1F0E31]'
                    : 'text-[#5C4573] dark:text-[#C5B4DA] hover:text-[#241734] dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>My Story</span>
              </button>
            </div>

            {/* Tab Contents with Verbatim Approved Text */}
            <AnimatePresence mode="wait">
              {activeTab === 'about' ? (
                <motion.div
                  key="about-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 bg-white/70 dark:bg-[#1A0E28]/70 p-6 sm:p-8 rounded-3xl border border-purple-200/70 dark:border-white/10 shadow-xs backdrop-blur-xs"
                >
                  <div className="space-y-4 text-sm sm:text-base font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                    <p>{ABOUT_ARTI.bio}</p>
                    <p className="font-medium text-[#241734] dark:text-[#F5EEFA]">
                      {ABOUT_ARTI.modalitiesSummary}
                    </p>
                    <p>{ABOUT_ARTI.philosophy}</p>
                  </div>

                  {/* Brand Positioning Box from Section 1 */}
                  <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-white/5 border border-purple-200/50 dark:border-white/5 space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block">
                      Brand Positioning
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-[#3B1E54] dark:text-[#E2D5F2] leading-relaxed">
                      {BRAND_INFO.positioning}
                    </p>
                  </div>

                  {/* Core Framework */}
                  <div className="p-3.5 rounded-xl bg-[#3B1E54]/5 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 text-center">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-purple-300 font-semibold">
                      {BRAND_INFO.framework}
                    </span>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openBooking('energy-scan')}
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>BOOK YOUR ENERGY SCAN (₹7,000)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I am interested in exploring a personalised healing journey with Angel Soul.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-purple-50 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.14em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Arti</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="story-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 bg-white/70 dark:bg-[#1A0E28]/70 p-6 sm:p-8 rounded-3xl border border-purple-200/70 dark:border-white/10 shadow-xs backdrop-blur-xs"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block">
                      The Journey
                    </span>
                    <h3 className="font-serif text-2xl text-[#241734] dark:text-[#F5EEFA] font-light">
                      {MY_STORY.headline}
                    </h3>
                  </div>

                  {/* Scrollable Story Container to read the complete 26 paragraphs comfortably */}
                  <div className="max-h-[420px] overflow-y-auto pr-3 space-y-4 text-xs sm:text-sm font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed border-l-2 border-purple-200/80 dark:border-white/10 pl-4">
                    {MY_STORY.paragraphs.map((p, idx) => (
                      <p key={idx} className={idx === 8 || idx === 13 || idx === 17 ? 'font-medium text-[#241734] dark:text-[#F5EEFA]' : ''}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Inspiring Personal Transformation Quote Callout */}
                  <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 text-center space-y-1">
                    <p className="font-serif italic text-base sm:text-lg text-[#241734] dark:text-[#F5EEFA]">
                      “I transformed myself.
                      <br />
                      I discovered my purpose.
                      <br />
                      And now, I am here to help you discover yours.”
                    </p>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#735391] dark:text-[#A792C0] block pt-1">
                      — Arti Bhadra, Founder of Angel Soul
                    </span>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href="#energy-scan"
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>START YOUR HEALING JOURNEY</span>
                    </a>
                    <a
                      href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I read your personal story and felt deeply connected to your healing journey.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-purple-50 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.14em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Connect with Arti</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
