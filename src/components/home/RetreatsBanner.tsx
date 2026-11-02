import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bell, Calendar, MapPin, Users, MessageCircle, ArrowRight, Compass, Heart, Sun } from 'lucide-react';
import { BRAND_INFO } from '../../data/spiritualData';
import { getAssetUrl } from '../../utils/assetUrl';

export const RetreatsBanner: React.FC = () => {
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
    <section id="retreats" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border border-purple-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/75 dark:bg-[#1A0E28]/80 card-hover shadow-sm backdrop-blur-xs space-y-10"
        >
          {/* Header & Coming Soon Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-100 dark:border-white/5 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-300/70 dark:border-purple-400/20 bg-purple-100/60 dark:bg-purple-900/30 text-[11px] font-mono tracking-[0.2em] uppercase text-[#4A2566] dark:text-[#E2D5F2] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300 animate-pulse" />
                <span>Sacred Immersions • Bookings Opening Soon</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
                Spiritual Retreats
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                Step away from the noise of the everyday and immerse yourself in transformative healing. We are curating our next multi-day retreat sanctuary designed for deep inner child healing, conscious release, and soul reconnection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 dark:border-amber-400/25 text-amber-800 dark:text-amber-200 text-xs font-mono uppercase tracking-wider font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping shrink-0" />
                <span>Coming Soon</span>
              </div>
              <span className="text-xs font-mono text-[#735391] dark:text-[#A792C0]">
                Intimate Cohorts • 15–20 Seats
              </span>
            </div>
          </div>

          {/* Atmospheric Sanctuary Visual with Coming Soon Overlay */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 aspect-[16/9] sm:aspect-[21/9] relative group shadow-sm">
            <img
              src={getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')}
              alt="Angel Soul Sacred Retreat Sanctuary"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full text-purple-200 border border-white/15 inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-300" />
                <span>Next Destination & Dates Announcing Soon</span>
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="space-y-1">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-300 block font-medium">
                  Private Villa Sanctuaries • Nature & Healing
                </span>
                <span className="font-serif text-xl sm:text-3xl text-white font-light block">
                  A Space to Pause, Reconnect & Transform
                </span>
              </div>
              <div className="text-xs font-sans text-purple-100/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 sm:max-w-xs">
                Private pool unwind • Pure vegetarian food • Complete energetic renewal
              </div>
            </div>
          </div>

          {/* Retreat Experience Pillars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-[#E2D5F2] block font-semibold">
                What to Expect at Angel Soul Retreats
              </span>
              <span className="text-xs font-mono text-[#735391] dark:text-[#A792C0]">
                Curated Immersive Flow
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {retreatPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-purple-100 dark:border-white/5 bg-white/60 dark:bg-white/5 space-y-2 hover:border-purple-200/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-purple-100/80 dark:bg-purple-900/40 flex items-center justify-center text-[#3B1E54] dark:text-purple-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-base text-[#241734] dark:text-[#F5EEFA] font-medium">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed pl-10.5">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Early Access / Bookings Opening Soon Notification Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-50/80 via-white to-purple-50/50 dark:from-[#241438]/60 dark:via-[#1A0E28] dark:to-[#2A1442]/50 border border-purple-200/80 dark:border-white/10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-purple-300 font-semibold">
                  <Bell className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                  <span>Early Access & Waitlist Priority</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Be First in Line When Bookings Open
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                  Because cohorts are strictly limited to ensure personal guidance and energetic care, spaces fill rapidly. Connect directly with Arti Bhadra on WhatsApp to join our priority waitlist and receive early-bird booking details before public launch.
                </p>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-xs text-[#5C4573] dark:text-[#C5B4DA] shrink-0">
                <Users className="w-4 h-4 text-purple-600 dark:text-purple-300 shrink-0" />
                <span>Small Intimate Groups Only</span>
              </div>
            </div>

            {/* Actions & WhatsApp Direct Connect */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, please add me to the early access list and notify me when bookings open for upcoming Angel Soul spiritual retreats.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Me on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to inquire about upcoming spiritual retreats and private group healing sessions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-purple-200/80 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-white/60 dark:hover:bg-white/5 font-sans text-xs tracking-[0.15em] uppercase font-medium transition-colors cursor-pointer"
              >
                <span>Inquire About Retreats</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
