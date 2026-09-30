import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TRANSFORMATION_HEALING } from '../../data/spiritualData';
import { getAssetUrl } from '../../utils/assetUrl';

export const TransformationHealingSection: React.FC = () => {
  return (
    <section
      id="transformation-healing"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border border-purple-200/80 dark:border-white/10 rounded-3xl overflow-hidden bg-white/80 dark:bg-[#1A0E28]/85 shadow-sm card-hover backdrop-blur-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content (Exact Brief) */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 dark:bg-white/5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#4A2566] dark:text-[#E2D5F2]">
                  <Sparkles className="w-3 h-3 text-[#735391] dark:text-[#C5B4DA]" />
                  <span>{TRANSFORMATION_HEALING.title}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#241734] dark:text-[#F5EEFA]">
                  {TRANSFORMATION_HEALING.headline}
                </h2>

                <div className="space-y-3 text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base font-sans leading-relaxed">
                  <p>{TRANSFORMATION_HEALING.intro}</p>
                  <p>{TRANSFORMATION_HEALING.description}</p>
                </div>
              </div>

              {/* Modalities Combined Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#735391] dark:text-[#A792C0] block font-medium">
                  The healing journey may combine modalities such as:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#3B1E54] dark:text-[#E2D5F2]">
                  {TRANSFORMATION_HEALING.modalitiesList.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 p-2 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100/60 dark:border-white/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B1E54] dark:bg-purple-300 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Note */}
              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#241734] dark:text-[#F5EEFA] font-medium block">
                  Pricing: Customised after the Energy Scan
                </span>
                <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
                  {TRANSFORMATION_HEALING.pricingNote}
                </p>
              </div>

              {/* CTA from Brief */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#energy-scan"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.14em] uppercase font-medium shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer shrink-0"
                >
                  <span>{TRANSFORMATION_HEALING.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <span className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA]">
                  {TRANSFORMATION_HEALING.ctaSubtext}
                </span>
              </div>
            </div>

            {/* Right Visual Panel: Holistic Healing Altar Artwork */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full flex flex-col justify-between overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-[#2A153E] to-[#150A22] text-white border-t lg:border-t-0 lg:border-l border-purple-200/40 dark:border-white/10">
              {/* Background Sacred Atmosphere Image */}
              <img
                src={getAssetUrl('/images/products/holistic-altar-hero.jpg')}
                alt="Holistic Altar and Healing Space"
                className="absolute inset-0 w-full h-full object-cover opacity-35 hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150A22] via-[#1E0C30]/70 to-transparent pointer-events-none" />

              {/* Top Card Badge */}
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-purple-300 block">
                  Sacred Process
                </span>
                <h3 className="font-serif text-2xl font-light tracking-wide text-white">
                  The Transformation Roadmap
                </h3>
              </div>

              {/* Journey Steps Visual */}
              <div className="relative z-10 space-y-3.5 my-auto py-6">
                {[
                  { step: '01', title: 'Energy Scan', desc: 'Identify emotional & energetic patterns' },
                  { step: '02', title: 'Deep Understanding', desc: 'Discover what your energy is asking for' },
                  { step: '03', title: 'Personalised Journey', desc: 'Tailored combination of 12+ modalities' },
                  { step: '04', title: 'Lifelong Transformation', desc: 'Release old cycles, renew your life' }
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="font-mono text-xs text-purple-300 font-semibold mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">
                        {s.title}
                      </h4>
                      <p className="text-[11px] text-purple-200/80 mt-0.5 leading-snug">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Callout */}
              <div className="relative z-10 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <p className="font-serif italic text-xs sm:text-sm text-purple-100 text-center">
                  “Energy Scan → Understanding → Personalised Healing → Transformation”
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
