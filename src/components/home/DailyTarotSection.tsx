import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Heart, Compass, Shield, RotateCw } from 'lucide-react';
import { ANGEL_TAROT_CARDS, calculateBirthAndDailyTarot, TarotNumerologyResult } from '../../data/dailyTarotData';
import { DailyTarotCard } from '../../types';
import { BRAND_INFO } from '../../data/spiritualData';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DailyTarotSection: React.FC = () => {
  const [birthDay, setBirthDay] = useState<number>(() => {
    const saved = localStorage.getItem('angel_soul_dob_day');
    return saved ? parseInt(saved, 10) : 15;
  });

  const [birthMonth, setBirthMonth] = useState<number>(() => {
    const saved = localStorage.getItem('angel_soul_dob_month');
    return saved ? parseInt(saved, 10) : 7;
  });

  const [birthYear, setBirthYear] = useState<number>(() => {
    const saved = localStorage.getItem('angel_soul_dob_year');
    return saved ? parseInt(saved, 10) : 1995;
  });

  const [isRevealed, setIsRevealed] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('angel_soul_dob_day'));
  });

  const [readingResult, setReadingResult] = useState<TarotNumerologyResult>(() => {
    return calculateBirthAndDailyTarot(birthDay, birthMonth, birthYear, new Date());
  });

  const [selectedView, setSelectedView] = useState<'daily' | 'soul'>('daily');
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [inspectCard, setInspectCard] = useState<DailyTarotCard | null>(null);
  const marqueeKeyId = useId();

  // Active displayed card based on tab
  const activeCard: DailyTarotCard = selectedView === 'daily' ? readingResult.dailyCard : readingResult.soulCard;

  const handleDrawCard = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsFlipping(true);

    // Save DOB in localStorage
    localStorage.setItem('angel_soul_dob_day', birthDay.toString());
    localStorage.setItem('angel_soul_dob_month', birthMonth.toString());
    localStorage.setItem('angel_soul_dob_year', birthYear.toString());

    setTimeout(() => {
      const result = calculateBirthAndDailyTarot(birthDay, birthMonth, birthYear, new Date());
      setReadingResult(result);
      setIsRevealed(true);
      setIsFlipping(false);
    }, 600);
  };

  const handleCardClick = (card: DailyTarotCard) => {
    setInspectCard(card);
  };

  return (
    <section
      id="daily-tarot"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F5EFFB] dark:bg-[#150A22] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-300/30 via-lavender-200/20 to-transparent dark:from-purple-950/40 dark:via-purple-900/20 dark:to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-purple-300" />
            <span>Sacred Daily Guidance</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
            Daily Birthday Tarot Reading
          </h2>

          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base font-sans leading-relaxed">
            Enter your Date of Birth to reveal your personal Angel Tarot card for today. Rooted in authentic Tarot numerology, your reading automatically renews each morning at midnight with fresh celestial guidance.
          </p>
        </motion.div>

        {/* 1. CONTINUOUS INFINITE CAROUSEL OF THE 22 ARCANA */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2 text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0]">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>The 22 Angel Arcana Deck (Infinite Stream)</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-sans lowercase text-[#5C4573] dark:text-[#C5B4DA]">
              Hover to pause • Click to inspect card
            </span>
          </div>

          {/* Infinite Carousel Track */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-purple-200/70 dark:border-white/10 bg-white/50 dark:bg-white/5 py-4 backdrop-blur-xs shadow-xs group">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F5EFFB] dark:from-[#150A22] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F5EFFB] dark:from-[#150A22] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...ANGEL_TAROT_CARDS, ...ANGEL_TAROT_CARDS].map((card, idx) => (
                <button
                  key={`${marqueeKeyId}-${card.id}-${idx}`}
                  type="button"
                  onClick={() => handleCardClick(card)}
                  className="mx-2 sm:mx-2.5 text-left w-36 sm:w-40 p-2.5 rounded-2xl border border-purple-200/80 dark:border-white/10 bg-white/80 dark:bg-[#1E1030]/90 hover:border-[#3B1E54] dark:hover:border-purple-300 hover:shadow-md transition-all duration-300 card-hover shrink-0 cursor-pointer"
                >
                  <div className="aspect-[2.75/4.2] rounded-xl overflow-hidden mb-2 relative border border-purple-100 dark:border-white/5">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 text-amber-200 font-serif text-[10px] tracking-wider border border-amber-300/30">
                      {card.number}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block truncate">
                    {card.archangel}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-medium text-[#241734] dark:text-[#F5EEFA] truncate">
                    {card.name}
                  </h4>
                  <span className="text-[10px] font-sans text-[#5C4573] dark:text-[#C5B4DA] truncate block mt-0.5">
                    {card.theme}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE BIRTHDATE TAROT READING & 3D CARD DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Birth Date Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#1A0E28]/85 border border-purple-200/80 dark:border-white/10 shadow-sm card-hover backdrop-blur-xs space-y-6"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block">
                Birth Blueprint
              </span>
              <h3 className="font-serif text-2xl font-light text-[#241734] dark:text-[#F5EEFA]">
                Enter Your Birthday
              </h3>
              <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                Calculates your lifelong Soul Arcana + today's unique transit guidance card.
              </p>
            </div>

            <form onSubmit={handleDrawCard} className="space-y-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {/* Day */}
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    Day
                  </label>
                  <select
                    value={birthDay}
                    onChange={(e) => setBirthDay(parseInt(e.target.value, 10))}
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors cursor-pointer"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Month */}
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    Month
                  </label>
                  <select
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(parseInt(e.target.value, 10))}
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors cursor-pointer"
                  >
                    {MONTH_NAMES.map((m, idx) => (
                      <option key={m} value={idx + 1}>
                        {m.slice(0, 3)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    Year
                  </label>
                  <select
                    value={birthYear}
                    onChange={(e) => setBirthYear(parseInt(e.target.value, 10))}
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors cursor-pointer"
                  >
                    {Array.from({ length: 90 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isFlipping}
                  className="w-full py-3.5 px-4 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.14em] font-medium shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 dark:text-purple-700" />
                  <span>{isRevealed ? 'Draw Today’s Reading' : 'Reveal Today’s Angel Card'}</span>
                </button>
              </div>

              {/* Authentic Numerology Note */}
              <div className="p-3.5 rounded-2xl bg-purple-50/70 dark:bg-white/5 border border-purple-100 dark:border-white/5 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-[#3B1E54] dark:text-purple-300 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Authentic Numerology Engine</span>
                </div>
                <p className="text-[11px] font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                  Your reading calculates both your lifelong <strong>Soul Arcana</strong> and today’s <strong>Transit Arcana</strong> based on your date of birth and the calendar day.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Right Column: 3D Physical Tarot Card + Channeled Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#1A0E28]/90 border border-purple-200/80 dark:border-white/10 shadow-sm card-hover backdrop-blur-xs space-y-6">
              {/* Header with Switcher Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 dark:border-white/5 pb-4">
                <div className="flex items-center p-1 rounded-xl bg-purple-100/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 w-fit">
                  <button
                    type="button"
                    onClick={() => setSelectedView('daily')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-sans uppercase tracking-wider font-medium transition-all cursor-pointer ${
                      selectedView === 'daily'
                        ? 'bg-[#3B1E54] text-white shadow-xs dark:bg-white dark:text-[#1F0E31]'
                        : 'text-[#5C4573] dark:text-[#C5B4DA]'
                    }`}
                  >
                    Today’s Guidance ({readingResult.formattedToday})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedView('soul')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-sans uppercase tracking-wider font-medium transition-all cursor-pointer ${
                      selectedView === 'soul'
                        ? 'bg-[#3B1E54] text-white shadow-xs dark:bg-white dark:text-[#1F0E31]'
                        : 'text-[#5C4573] dark:text-[#C5B4DA]'
                    }`}
                  >
                    Your Soul Card
                  </button>
                </div>

                <span className="text-xs font-mono text-[#735391] dark:text-[#A792C0]">
                  DOB: {birthDay} {MONTH_NAMES[birthMonth - 1]} {birthYear}
                </span>
              </div>

              {/* Main Reading Grid: 3D Flip Card + Detailed Guidance */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* 3D PERSPECTIVE FLIP TAROT CARD */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div
                    className="w-56 sm:w-64 aspect-[2.75/4.75] cursor-pointer select-none"
                    style={{ perspective: '1200px' }}
                    onClick={() => setIsFlipping(!isFlipping)}
                    title="Click to flip card"
                  >
                    <div
                      className="w-full h-full relative transition-transform duration-700 ease-out"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      {/* CARD FACE */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#2B163E] to-[#12071E] border-2 border-amber-300/80 shadow-2xl p-3 flex flex-col justify-between"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {/* Gold Foil Header Plate */}
                        <div className="border border-amber-300/40 rounded-xl p-1.5 text-center bg-black/40 backdrop-blur-xs flex items-center justify-between">
                          <span className="text-[10px] font-mono tracking-widest text-amber-200 uppercase font-semibold">
                            ✦ {activeCard.number} ✦
                          </span>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-amber-100/90 truncate max-w-[120px]">
                            {activeCard.archangel}
                          </span>
                        </div>

                        {/* Sacred Arched Artwork Frame */}
                        <div className="relative my-2 flex-1 rounded-xl overflow-hidden border border-amber-300/30">
                          <img
                            src={activeCard.image}
                            alt={activeCard.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-2 left-2 right-2 text-center">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-amber-300/90 block">
                              {activeCard.element}
                            </span>
                          </div>
                        </div>

                        {/* Gold Foil Bottom Banner */}
                        <div className="border border-amber-300/40 rounded-xl p-2 text-center bg-black/40 backdrop-blur-xs space-y-0.5">
                          <h4 className="font-serif text-sm font-semibold text-white tracking-widest uppercase">
                            {activeCard.name}
                          </h4>
                          <span className="text-[10px] font-sans text-purple-200 italic block truncate">
                            {activeCard.theme}
                          </span>
                        </div>
                      </div>

                      {/* CARD BACK (Ornate Sacred Geometry) */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E0D2C] via-[#2F1545] to-[#13061D] border-2 border-amber-300/80 shadow-2xl p-4 flex flex-col items-center justify-between"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="w-full border-b border-amber-300/30 pb-2 text-center">
                          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-amber-300">
                            ANGEL SOUL • ARTI BHADRA
                          </span>
                        </div>

                        {/* Concentric Mandala / Sacred Star */}
                        <div className="w-32 h-32 rounded-full border border-amber-300/40 flex items-center justify-center p-3 relative animate-pulse-glow">
                          <div className="w-24 h-24 rounded-full border border-purple-300/30 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border border-amber-200/50 flex items-center justify-center rotate-45">
                              <Sparkles className="w-6 h-6 text-amber-300" />
                            </div>
                          </div>
                        </div>

                        <div className="w-full border-t border-amber-300/30 pt-2 text-center space-y-0.5">
                          <span className="font-serif text-xs text-amber-100 tracking-widest block uppercase">
                            Angel Arcana
                          </span>
                          <span className="text-[9px] font-mono text-purple-200/70 block">
                            Tap to reveal face
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#735391] dark:text-[#A792C0] mt-3 flex items-center gap-1.5 cursor-pointer" onClick={() => setIsFlipping(!isFlipping)}>
                    <RotateCw className="w-3 h-3" />
                    <span>Click card to flip</span>
                  </span>
                </div>

                {/* DETAILED CHANNELED GUIDANCE */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block">
                        {selectedView === 'daily' ? "Today’s Celestial Vibration" : "Lifelong Soul Archetype"}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-white/10 text-[10px] font-mono uppercase text-[#3B1E54] dark:text-[#F5EEFA]">
                        Card {activeCard.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-light mt-1">
                      {activeCard.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[#4A2566] dark:text-[#D5C2EC] mt-0.5">
                      Presiding: {activeCard.archangel} • Theme: {activeCard.theme}
                    </p>
                  </div>

                  {/* Numerological Formula Transparency Box */}
                  <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-white/5 border border-purple-100 dark:border-white/5 text-[11px] font-mono text-[#5C4573] dark:text-[#C5B4DA] space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-[#3B1E54] dark:text-purple-300 block">
                      Numerological Alignment Formula:
                    </span>
                    <p className="leading-snug break-all">
                      {selectedView === 'daily' ? readingResult.dailyFormula : readingResult.soulFormula}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5">
                    {activeCard.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full border border-purple-200/70 dark:border-white/10 bg-white dark:bg-white/5 text-[10px] font-sans text-[#3B1E54] dark:text-[#E2D5F2]"
                      >
                        ✦ {kw}
                      </span>
                    ))}
                  </div>

                  {/* Channeled Angel Message */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block font-medium">
                      Channeled Message for You:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#241734] dark:text-[#F5EEFA] leading-relaxed">
                      {activeCard.message}
                    </p>
                  </div>

                  {/* Daily Affirmation Callout */}
                  <div className="p-3.5 rounded-2xl bg-purple-50/80 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#3B1E54] dark:text-purple-300 text-xs font-mono uppercase tracking-wider font-semibold">
                      <Heart className="w-3.5 h-3.5" />
                      <span>Sacred Affirmation</span>
                    </div>
                    <p className="font-serif italic text-xs sm:text-sm text-[#241734] dark:text-white leading-snug">
                      “{activeCard.affirmation}”
                    </p>
                  </div>

                  {/* Daily Guidance Action */}
                  <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                    <strong className="text-[#241734] dark:text-white">Daily Practice:</strong> {activeCard.guidance}
                  </p>
                </div>
              </div>

              {/* Direct Booking CTA with Approved Brief Prices */}
              <div className="pt-4 border-t border-purple-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="font-serif text-sm text-[#241734] dark:text-[#F5EEFA] font-medium block">
                    Looking for a comprehensive 1:1 reading?
                  </span>
                  <span className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] block">
                    WhatsApp: ₹3,500 • Call: ₹4,000 • Video: ₹4,500 • In-person: ₹5,500
                  </span>
                </div>

                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I drew my birthday card (${activeCard.name} - ${activeCard.theme}) and would like to book a 1:1 Angel Tarot Reading consultation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book 1:1 Reading via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal for Inspecting Cards from the Infinite Carousel */}
        <AnimatePresence>
          {inspectCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectCard(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg w-full bg-[#1A0E28] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 sm:p-8 space-y-5 relative"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 block">
                      Card {inspectCard.number} • {inspectCard.archangel}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-0.5">
                      {inspectCard.name}
                    </h3>
                    <span className="text-xs font-sans text-purple-200 mt-1 block">
                      Theme: {inspectCard.theme}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInspectCard(null)}
                    aria-label="Close modal"
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs font-mono"
                  >
                    ✕
                  </button>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={inspectCard.image}
                    alt={inspectCard.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 text-xs font-sans leading-relaxed text-[#D4C7E3]">
                  <p>{inspectCard.message}</p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-serif italic text-purple-100">
                    “{inspectCard.affirmation}”
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setInspectCard(null);
                      const el = document.getElementById('daily-tarot');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-2.5 rounded-full bg-[#F5EEFA] text-[#1F0E31] text-xs font-sans uppercase tracking-[0.14em] font-medium text-center cursor-pointer"
                  >
                    Draw My Birthdate Card
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
