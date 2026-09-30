import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, MessageCircle } from 'lucide-react';
import { RETREAT_INFO, BRAND_INFO } from '../data/spiritualData';
import { getAssetUrl } from '../utils/assetUrl';

export const RetreatsPage: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#4A2566] dark:text-[#E2D5F2] font-semibold backdrop-blur-xs">
            <span>Retreat Collaboration: {RETREAT_INFO.collaboration}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-light tracking-tight">
            {RETREAT_INFO.title}
          </h1>

          <div className="w-12 h-px bg-purple-300/60 dark:bg-white/20 mx-auto my-6" />

          {/* Quick Details Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-sans text-[#5C4573] dark:text-purple-200/80">
            <span className="flex items-center gap-1.5 font-medium text-[#241734] dark:text-white">
              <Calendar className="w-4 h-4 text-[#735391] dark:text-purple-300" />
              {RETREAT_INFO.dates}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-[#241734] dark:text-white">
              <Clock className="w-4 h-4 text-[#735391] dark:text-purple-300" />
              {RETREAT_INFO.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-[#241734] dark:text-white">
              <MapPin className="w-4 h-4 text-[#735391] dark:text-purple-300" />
              {RETREAT_INFO.location}
            </span>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#735391] dark:text-[#A792C0] block font-semibold">
              Retreat Theme
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              {RETREAT_INFO.theme}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4A3B5C] dark:text-[#D4C7E3] max-w-2xl mx-auto leading-relaxed pt-1">
              {RETREAT_INFO.themeDescription}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to BOOK MY PLACE for the Meet Little Me retreat in Karjat (Booking amount: ₹10,000).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all shadow-sm hover:shadow-md hover:shadow-purple-900/10 flex items-center gap-2 group cursor-pointer"
            >
              <span>BOOK YOUR PLACE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-xs font-sans text-[#735391] dark:text-[#A792C0]">
              Booking amount: <strong className="text-[#3B1E54] dark:text-purple-200">₹{RETREAT_INFO.bookingAmount.toLocaleString('en-IN')}</strong>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scenic Karjat Retreat Sanctuary Banner */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-12">
        <div className="rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 aspect-[16/9] sm:aspect-[21/9] relative group shadow-md">
          <img
            src={getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')}
            alt="Meet Little Me Retreat in Karjat Western Ghats"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-300 block">
                Karjat Western Ghats • 1 Night / 2 Days
              </span>
              <span className="font-serif text-xl sm:text-3xl text-white font-light">
                Meet Little Me • Reconnect & Heal
              </span>
            </div>
            <span className="text-xs font-mono bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white border border-white/20">
              ₹17,777 / person
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Logistics & Pricing Card */}
        <section className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-10 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-6 card-hover backdrop-blur-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block mb-1">
                Overview & Capacity
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                Suggested capacity: {RETREAT_INFO.capacity} participants
              </h2>
              <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] mt-1">
                Final capacity will be confirmed before the website goes live.
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                Price Per Person
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#3B1E54] dark:text-purple-200 font-normal">
                ₹{RETREAT_INFO.totalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#5C4573] dark:text-purple-300 font-sans block mt-0.5">
                Booking amount: <strong>₹{RETREAT_INFO.bookingAmount.toLocaleString('en-IN')}</strong>
              </span>
            </div>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          {/* Key Logistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-1 card-hover">
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                Accommodation
              </span>
              <p className="text-sm font-sans font-medium text-[#241734] dark:text-white">
                {RETREAT_INFO.accommodation}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-1 card-hover">
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                Food
              </span>
              <p className="text-sm font-sans font-medium text-[#241734] dark:text-white">
                {RETREAT_INFO.food}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-1 card-hover">
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                Travel
              </span>
              <p className="text-sm font-sans font-medium text-[#241734] dark:text-white">
                {RETREAT_INFO.travel}
              </p>
            </div>
          </div>
        </section>

        {/* 13 Approved Activities */}
        <section className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-10 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-6 card-hover backdrop-blur-xs">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300">
              Immersive Practices
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              Retreat Activities ({RETREAT_INFO.activities.length} Curated Experiences)
            </h2>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {RETREAT_INFO.activities.map((act, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-xl bg-[#F2ECF7]/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 flex items-center gap-3 text-xs sm:text-sm font-sans text-[#241734] dark:text-purple-100 hover:border-purple-300 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B1E54] dark:bg-purple-300 flex-shrink-0" />
                <span>{act}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Editable Itinerary Section */}
        <section className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-10 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-6 card-hover backdrop-blur-xs">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300">
              Schedule Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              Retreat Itinerary
            </h2>
            <p className="text-xs font-serif italic text-[#5C4573] dark:text-[#C5B4DA]">
              “Please keep the detailed itinerary section editable. I will provide the final hour-by-hour itinerary separately.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RETREAT_INFO.itinerary.map((dayPlan, i) => (
              <div key={i} className="p-5 rounded-2xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 space-y-3">
                <span className="text-sm font-serif text-[#3B1E54] dark:text-purple-300 font-medium block">
                  {dayPlan.day} • {dayPlan.title}
                </span>
                <div className="space-y-2 text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3]">
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
        </section>

        {/* Booking CTA Footer */}
        <div className="p-8 rounded-3xl bg-[#F2ECF7]/80 dark:bg-white/5 border border-purple-200/80 dark:border-white/10 text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#241734] dark:text-[#F5EEFA]">
            Ready to Join Us in Karjat?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-[#5C4573] dark:text-[#C5B4DA] max-w-lg mx-auto">
            Book your place with a booking amount of ₹10,000. Limited to 20 participants.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to BOOK MY PLACE for the Meet Little Me retreat in Karjat (Booking amount: ₹10,000).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>BOOK YOUR PLACE (₹10,000)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, please share more details regarding the Meet Little Me retreat.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-white/60 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
