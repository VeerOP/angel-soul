import React, { useState } from 'react';
import { RETREAT_INFO, BRAND_INFO } from '../../data/spiritualData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, MessageCircle, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetUrl';

export const RetreatsBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="retreats" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border border-purple-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/75 dark:bg-[#1A0E28]/80 card-hover shadow-sm backdrop-blur-xs space-y-8"
        >
          {/* Header & Collaboration */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-purple-100 dark:border-white/5 pb-6">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block font-semibold">
                {RETREAT_INFO.collaboration}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA] mt-1">
                {RETREAT_INFO.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] mt-1.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#3B1E54] dark:text-purple-300" />
                  {RETREAT_INFO.dates}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#3B1E54] dark:text-purple-300" />
                  {RETREAT_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#3B1E54] dark:text-purple-300" />
                  {RETREAT_INFO.duration}
                </span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-serif text-3xl font-light text-[#241734] dark:text-[#F5EEFA] block">
                ₹{RETREAT_INFO.totalPrice.toLocaleString('en-IN')}
                <span className="text-sm font-sans text-[#5C4573] dark:text-[#C5B4DA] font-normal ml-1">per person</span>
              </span>
              <span className="text-xs font-sans text-[#3B1E54] dark:text-purple-300 block font-medium mt-0.5">
                Booking amount: ₹{RETREAT_INFO.bookingAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Scenic Karjat Retreat Sanctuary Visual */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 aspect-[16/9] sm:aspect-[21/9] relative group shadow-sm">
            <img
              src={getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')}
              alt="Meet Little Me Karjat Retreat Sanctuary"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-300 block">
                  Aamantara Villa, Karjat • Private Villa Sanctuary
                </span>
                <span className="font-serif text-lg sm:text-2xl text-white font-light">
                  A Space to Pause, Reconnect & Transform
                </span>
              </div>
              <span className="text-xs font-mono bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white w-fit border border-white/20">
                {RETREAT_INFO.duration} • Sep 18–20
              </span>
            </div>
          </div>

          {/* Retreat Theme from Brief */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#3B1E54] dark:text-[#E2D5F2] tracking-wider block font-semibold">
              Retreat Theme
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA] tracking-wide font-normal">
              {RETREAT_INFO.theme}
            </h3>
            <p className="font-sans text-sm text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed max-w-3xl pt-1">
              {RETREAT_INFO.themeDescription}
            </p>
          </div>

          {/* Key Logistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-purple-100 dark:border-white/5 text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3]">
            <div>
              <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider">Accommodation</span>
              <span className="font-medium text-[#241734] dark:text-[#F5EEFA] mt-0.5 block">{RETREAT_INFO.accommodation}</span>
            </div>
            <div>
              <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider">Travel</span>
              <span className="font-medium text-[#241734] dark:text-[#F5EEFA] mt-0.5 block">{RETREAT_INFO.travel}</span>
            </div>
            <div>
              <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider">Food</span>
              <span className="font-medium text-[#241734] dark:text-[#F5EEFA] mt-0.5 block">{RETREAT_INFO.food}</span>
            </div>
            <div>
              <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider">Retreat Capacity</span>
              <span className="font-medium text-[#241734] dark:text-[#F5EEFA] mt-0.5 block">Suggested capacity: {RETREAT_INFO.capacity} participants</span>
            </div>
          </div>

          {/* Limited Capacity Notice */}
          <div className="p-3.5 rounded-2xl bg-purple-50/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 flex items-center justify-between text-xs text-[#5C4573] dark:text-[#C5B4DA]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#3B1E54] dark:text-purple-300 shrink-0" />
              <span>Limited slots section: Suggested capacity of 20 participants. Final capacity will be confirmed before live launch.</span>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#3B1E54] text-white text-[10px] font-mono uppercase tracking-wider">
              Limited Slots
            </span>
          </div>

          {/* 13 Approved Activities */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-[#E2D5F2] block font-semibold">
                Activities ({RETREAT_INFO.activities.length} Guided Experiences)
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-sans text-[#735391] dark:text-purple-300 hover:text-[#3B1E54] dark:hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{isExpanded ? 'Hide Details' : 'View Full Schedule & Itinerary'}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {RETREAT_INFO.activities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-purple-100 dark:border-white/5 bg-white/60 dark:bg-white/5 flex items-center gap-2.5 text-xs font-sans text-[#241734] dark:text-[#F5EEFA]"
                >
                  <span className="text-[10px] font-mono text-[#735391] dark:text-[#A792C0] w-5">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Itinerary Drawer */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-5 pt-2 border-t border-purple-100 dark:border-white/5"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-[#E2D5F2] block font-semibold">
                    Editable Itinerary
                  </span>
                  <p className="text-xs font-serif italic text-[#5C4573] dark:text-[#C5B4DA]">
                    “Please keep the detailed itinerary section editable. I will provide the final hour-by-hour itinerary separately.”
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RETREAT_INFO.itinerary.map((dayPlan, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 space-y-2">
                      <span className="text-xs font-mono uppercase text-[#3B1E54] dark:text-purple-300 font-semibold block">
                        {dayPlan.day} • {dayPlan.title}
                      </span>
                      <div className="space-y-1.5 text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3]">
                        {dayPlan.schedule.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="font-mono text-[10px] text-[#735391] dark:text-[#A792C0] shrink-0 mt-0.5">
                              {item.time}:
                            </span>
                            <span>{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions & CTA from Brief */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I would like to BOOK MY PLACE for the Meet Little Me retreat (ANGEL SOUL × PARVAT BUDDIES at ${RETREAT_INFO.location}, ${RETREAT_INFO.dates}. Booking amount: ₹10,000).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer"
              >
                <span>BOOK YOUR PLACE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, please share more details regarding the Meet Little Me retreat at ${RETREAT_INFO.location} (${RETREAT_INFO.dates}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-purple-200/80 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-white/60 dark:hover:bg-white/5 font-sans text-xs tracking-[0.15em] uppercase font-medium transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire via WhatsApp</span>
              </a>
            </div>

            <div className="text-xs font-sans text-[#735391] dark:text-[#A792C0] text-center sm:text-right">
              Booking amount: <strong className="text-[#3B1E54] dark:text-purple-200">₹10,000</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
