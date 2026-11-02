import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bell, Calendar, MapPin, Users, MessageCircle, ArrowRight, Compass, Heart, Sun } from 'lucide-react';
import { BRAND_INFO } from '../data/spiritualData';
import { getAssetUrl } from '../utils/assetUrl';

export const RetreatsPage: React.FC = () => {
  const retreatPillars = [
    {
      icon: Heart,
      title: 'Inner Child & Emotional Clearing',
      description: 'Gentle, guided healing journeys to acknowledge, release, and integrate deeply held emotional patterns in a safe, compassionate space.'
    },
    {
      icon: Sun,
      title: 'Energy & Chakra Realignment',
      description: 'Multi-dimensional aura cleansing, crystal frequencies, breathwork, and chakra balancing to restore your natural vitality.'
    },
    {
      icon: Compass,
      title: 'Channeled Angelic Meditations',
      description: 'Intimate channeled readings, angel invocations, quiet reflection circles, and soul wisdom to bring clarity to your life path.'
    },
    {
      icon: MapPin,
      title: 'Tranquil Nature Sanctuaries',
      description: 'Handpicked, private secluded villas surrounded by lush nature, peaceful pools, pure vegetarian food, and restorative silence.'
    }
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#4A2566] dark:text-[#E2D5F2] font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300 animate-pulse" />
            <span>Sacred Immersions • Bookings Opening Soon</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-light tracking-tight">
            Spiritual Retreats
          </h1>

          <div className="w-12 h-px bg-purple-300/60 dark:bg-white/20 mx-auto my-6" />

          <p className="font-sans text-sm sm:text-base text-[#4A3B5C] dark:text-[#D4C7E3] max-w-2xl mx-auto leading-relaxed">
            Step away from daily demands into a nurturing sanctuary of stillness, healing, and self-discovery. We are curating our next transformational retreat experience to guide you through emotional clearing, energy balance, and mindful rebirth.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, please add me to the early access list and notify me when bookings open for upcoming Angel Soul spiritual retreats.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Notified on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Sanctuary Visual Banner */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-16">
        <div className="rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 aspect-[16/9] sm:aspect-[21/9] relative group shadow-md">
          <img
            src={getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')}
            alt="Angel Soul Sacred Retreat Sanctuary"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

          {/* Top Badge */}
          <div className="absolute top-6 left-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-purple-200 border border-white/15 inline-flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-purple-300" />
              <span>Next Destination & Dates Announcing Soon</span>
            </span>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-300 block font-medium">
                Private Villa Sanctuaries • Nature & Healing
              </span>
              <span className="font-serif text-xl sm:text-3xl text-white font-light">
                A Space to Pause, Reconnect & Transform
              </span>
            </div>
            <span className="text-xs font-mono bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white border border-white/20 w-fit">
              Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Retreat Pillars */}
        <section className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-10 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-6 card-hover backdrop-blur-xs">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 font-semibold">
              The Retreat Experience
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
              What to Expect at Angel Soul Immersions
            </h2>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {retreatPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F2ECF7]/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-100/80 dark:bg-purple-900/40 flex items-center justify-center text-[#3B1E54] dark:text-purple-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base text-[#241734] dark:text-[#F5EEFA] font-medium">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed pl-10.5">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Priority Access / Early Bird Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#F2ECF7] via-white to-[#F2ECF7]/60 dark:from-[#241438]/80 dark:via-[#1A0E28] dark:to-[#241438]/60 border border-purple-200/80 dark:border-white/10 space-y-6 text-center">
          <div className="space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-white/10 text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-purple-300 font-semibold">
              <Bell className="w-3.5 h-3.5" />
              <span>Priority Waitlist</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA]">
              Bookings Opening Soon
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
              To preserve personal energetic attention and an intimate healing atmosphere, cohorts are strictly limited to small groups of 15–20 participants. Register your interest early to receive full details and priority booking access before dates are announced publicly.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, please add me to the early access list and notify me when bookings open for upcoming Angel Soul spiritual retreats.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join Early Access Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to inquire about upcoming spiritual retreats and private group sessions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-white/60 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#735391] dark:text-[#A792C0]">
            <Users className="w-4 h-4" />
            <span>Strictly limited to 15–20 participants per immersion</span>
          </div>
        </div>
      </div>
    </div>
  );
};
