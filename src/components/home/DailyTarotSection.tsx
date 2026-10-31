import React, { useState, useId, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Compass, RotateCw, X, ExternalLink } from 'lucide-react';
import {
  AUTHENTIC_DECK_CARDS,
  AUTHENTIC_MAJOR_ARCANA,
  calculateBirthAndDailyTarot,
  TarotNumerologyResult
} from '../../data/dailyTarotData';
import { DailyTarotCard } from '../../types';
import { BRAND_INFO } from '../../data/spiritualData';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

type DeckFilter = 'all' | 'major' | 'cups' | 'pentacles' | 'swords' | 'wands';

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

  const [, setIsRevealed] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('angel_soul_dob_day'));
  });

  const [readingResult, setReadingResult] = useState<TarotNumerologyResult>(() => {
    return calculateBirthAndDailyTarot(birthDay, birthMonth, birthYear, new Date());
  });

  const [selectedView, setSelectedView] = useState<'daily' | 'soul'>('daily');
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [inspectCard, setInspectCard] = useState<DailyTarotCard | null>(null);
  const [deckFilter, setDeckFilter] = useState<DeckFilter>('all');
  const marqueeKeyId = useId();

  // Handle ESC key to dismiss inspect modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectCard(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  // Filtered cards for marquee and explorer (100% authentic deck cards)
  const filteredCards = AUTHENTIC_DECK_CARDS.filter((card) => {
    if (deckFilter === 'all') return true;
    if (deckFilter === 'major') return card.suit === 'Major Arcana';
    if (deckFilter === 'cups') return card.suit === 'Cups';
    if (deckFilter === 'pentacles') return card.suit === 'Pentacles';
    if (deckFilter === 'swords') return card.suit === 'Swords';
    if (deckFilter === 'wands') return card.suit === 'Wands';
    return true;
  });

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

        {/* 1. CONTINUOUS STREAM OF THE ANGEL TAROT DECK */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0]">
              <Compass className="w-3.5 h-3.5" />
              <span>Angel Soul Deck ({filteredCards.length} Sacred Cards)</span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: `All (${AUTHENTIC_DECK_CARDS.length})` },
                { id: 'major', label: `Major Arcana (${AUTHENTIC_MAJOR_ARCANA.length})` },
                { id: 'cups', label: `Cups (${AUTHENTIC_DECK_CARDS.filter(c => c.suit === 'Cups').length})` },
                { id: 'pentacles', label: `Pentacles (${AUTHENTIC_DECK_CARDS.filter(c => c.suit === 'Pentacles').length})` },
                { id: 'swords', label: `Swords (${AUTHENTIC_DECK_CARDS.filter(c => c.suit === 'Swords').length})` },
                { id: 'wands', label: `Wands (${AUTHENTIC_DECK_CARDS.filter(c => c.suit === 'Wands').length})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setDeckFilter(tab.id as DeckFilter)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    deckFilter === tab.id
                      ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] shadow-xs'
                      : 'border border-purple-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 text-[#5C4573] dark:text-[#C5B4DA] hover:border-purple-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Infinite Carousel Track */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-purple-200/70 dark:border-white/10 bg-white/50 dark:bg-white/5 py-4 backdrop-blur-xs shadow-xs group">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F5EFFB] dark:from-[#150A22] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F5EFFB] dark:from-[#150A22] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...filteredCards, ...filteredCards].map((card, idx) => (
                <button
                  key={`${marqueeKeyId}-${card.id}-${idx}`}
                  type="button"
                  onClick={() => handleCardClick(card)}
                  className="mx-2 sm:mx-2.5 text-left w-36 sm:w-44 p-2.5 rounded-2xl border border-purple-200/80 dark:border-white/10 bg-white/80 dark:bg-[#1E1030]/90 hover:border-[#3B1E54] dark:hover:border-purple-300 hover:shadow-lg transition-all duration-300 card-hover shrink-0 cursor-pointer"
                >
                  {/* Vertical Tarot Card Frame (9:16 Aspect Ratio) */}
                  <div className="aspect-[9/16] rounded-xl overflow-hidden mb-2 relative border border-purple-100 dark:border-white/5 bg-black/5 dark:bg-black/30">
                    <picture>
                      {card.webpImage && <source srcSet={card.webpImage} type="image/webp" />}
                      <img
                        src={card.image}
                        alt={card.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </picture>

                    {/* Number Badge */}
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/75 text-amber-200 font-serif text-[10px] tracking-wider border border-amber-300/30 backdrop-blur-xs">
                      {card.number}
                    </div>

                    {/* Suit Badge */}
                    {card.suit && (
                      <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-black/75 text-amber-200/90 font-mono text-[8px] tracking-wider uppercase border border-amber-300/20 backdrop-blur-xs">
                        {card.suit}
                      </div>
                    )}
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
          <p className="text-center text-[11px] font-sans text-[#735391] dark:text-[#A792C0]">
            Hover to pause • Click any card to inspect full high-resolution sacred artwork & guidance
          </p>
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
              <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA] font-medium">
                Enter Your Birthday
              </h3>
              <p className="text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans leading-relaxed">
                Your birth blueprint reveals both your lifelong Soul Card archetype and your dynamic Daily Arcana.
              </p>
            </div>

            <form onSubmit={handleDrawCard} className="space-y-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {/* Day */}
                <div className="space-y-1">
                  <label htmlFor="dob-day" className="text-[10px] font-mono uppercase text-[#735391] dark:text-[#A792C0] block">
                    Day
                  </label>
                  <select
                    id="dob-day"
                    value={birthDay}
                    onChange={(e) => setBirthDay(parseInt(e.target.value, 10))}
                    className="w-full px-2 py-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white/90 dark:bg-white/5 text-xs text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Month */}
                <div className="space-y-1">
                  <label htmlFor="dob-month" className="text-[10px] font-mono uppercase text-[#735391] dark:text-[#A792C0] block">
                    Month
                  </label>
                  <select
                    id="dob-month"
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(parseInt(e.target.value, 10))}
                    className="w-full px-2 py-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white/90 dark:bg-white/5 text-xs text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {MONTH_NAMES.map((m, idx) => (
                      <option key={m} value={idx + 1}>
                        {m.slice(0, 3)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div className="space-y-1">
                  <label htmlFor="dob-year" className="text-[10px] font-mono uppercase text-[#735391] dark:text-[#A792C0] block">
                    Year
                  </label>
                  <select
                    id="dob-year"
                    value={birthYear}
                    onChange={(e) => setBirthYear(parseInt(e.target.value, 10))}
                    className="w-full px-2 py-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white/90 dark:bg-white/5 text-xs text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {Array.from({ length: 80 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#3B1E54] to-[#5C3280] dark:from-[#4A2566] dark:to-[#6C3C96] text-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Calculate My Reading</span>
              </button>
            </form>

            {/* Quick explanation pill */}
            <div className="p-3.5 rounded-2xl bg-purple-50/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#3B1E54] dark:text-purple-300 font-semibold block">
                How It Works:
              </span>
              <p className="text-[11px] font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                Uses authentic digit reduction: your birth vibrations synthesize with today’s planetary transit to deliver daily channeled guidance.
              </p>
            </div>
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
                    className="w-56 sm:w-64 aspect-[9/16] cursor-pointer select-none"
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
                        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#2B163E] to-[#12071E] border-2 border-amber-300/80 shadow-2xl flex flex-col justify-between"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <picture className="w-full h-full">
                          {activeCard.webpImage && <source srcSet={activeCard.webpImage} type="image/webp" />}
                          <img
                            src={activeCard.image}
                            alt={activeCard.name}
                            className="w-full h-full object-cover rounded-2xl"
                            loading="eager"
                          />
                        </picture>
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

                  <span
                    className="text-[11px] font-mono text-[#735391] dark:text-[#A792C0] mt-3 flex items-center gap-1.5 cursor-pointer hover:text-[#3B1E54] dark:hover:text-purple-200 transition-colors"
                    onClick={() => setIsFlipping(!isFlipping)}
                  >
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
                      {activeCard.suit && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[10px] font-mono uppercase border border-amber-400/30">
                          {activeCard.suit}
                        </span>
                      )}
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

                  {/* Guidance Recommendation */}
                  <div className="text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans pt-1">
                    <span className="font-semibold text-[#3B1E54] dark:text-purple-200">Daily Action Guidance: </span>
                    <span>{activeCard.guidance}</span>
                  </div>

                  {/* WhatsApp Deep Consultation CTA */}
                  <div className="pt-2">
                    <a
                      href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I drew my birthday card (${activeCard.name} - ${activeCard.theme}) and would like to book a 1:1 Angel Tarot Reading consultation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-white/10 dark:hover:bg-white/15 text-[#3B1E54] dark:text-[#F5EEFA] text-xs font-sans tracking-wide transition-colors"
                    >
                      <span>Explore this card deeper with Arti</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal for Inspecting Cards from the Deck */}
        <AnimatePresence>
          {inspectCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectCard(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full bg-[#1A0E28] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 sm:p-8 relative my-auto"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setInspectCard(null)}
                  aria-label="Close modal"
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-sm font-mono z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* 2-Column Responsive Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                  {/* Left Column: Full Uncropped Vertical Card */}
                  <div className="md:col-span-5 flex flex-col items-center">
                    <div className="w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-amber-300/60 shadow-2xl bg-black/40 relative">
                      <picture className="w-full h-full">
                        {inspectCard.webpImage && <source srcSet={inspectCard.webpImage} type="image/webp" />}
                        <img
                          src={inspectCard.image}
                          alt={inspectCard.name}
                          className="w-full h-full object-contain bg-black/30"
                        />
                      </picture>
                    </div>
                    {inspectCard.isAuthenticCard && (
                      <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-amber-300/90">
                        ✦ Authentic Physical Card
                      </span>
                    )}
                  </div>

                  {/* Right Column: Card Channeled Details */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 block">
                          Card {inspectCard.number} • {inspectCard.archangel}
                        </span>
                        {inspectCard.suit && (
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono uppercase text-purple-200">
                            {inspectCard.suit}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-0.5">
                        {inspectCard.name}
                      </h3>
                      <span className="text-xs font-sans text-purple-200 mt-1 block">
                        Theme: {inspectCard.theme}
                      </span>
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1.5">
                      {inspectCard.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-sans text-purple-100"
                        >
                          ✦ {kw}
                        </span>
                      ))}
                    </div>

                    {/* Channeled Message */}
                    <div className="space-y-1 text-xs sm:text-sm font-sans leading-relaxed text-[#D4C7E3]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 block">
                        Channeled Message:
                      </span>
                      <p>{inspectCard.message}</p>
                    </div>

                    {/* Affirmation */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 font-serif italic text-xs sm:text-sm text-purple-100 leading-snug">
                      “{inspectCard.affirmation}”
                    </div>

                    {/* Guidance */}
                    <div className="text-xs font-sans text-[#D4C7E3]">
                      <span className="text-purple-300 font-medium">Sacred Action: </span>
                      <span>{inspectCard.guidance}</span>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setInspectCard(null);
                          const el = document.getElementById('daily-tarot');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:flex-1 py-2.5 rounded-full bg-[#F5EEFA] text-[#1F0E31] text-xs font-sans uppercase tracking-[0.14em] font-medium text-center cursor-pointer hover:bg-white transition-colors"
                      >
                        Calculate My Birthdate
                      </button>

                      <a
                        href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I am exploring your Angel Tarot Deck and resonated with ${inspectCard.name} (${inspectCard.theme}). I would like to book a 1:1 session.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-amber-300/50 hover:bg-amber-300/10 text-amber-200 text-xs font-sans tracking-wide transition-colors text-center"
                      >
                        Book 1:1 Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
