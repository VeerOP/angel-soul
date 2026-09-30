import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetUrl';

export const MyStoryPreview: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const allStoryParagraphs = [
    'My journey with healing did not begin with knowing everything.',
    'It began with me looking for guidance and healing for myself.',
    'Like many people, I too reached out to different people, explored healing, spirituality and guidance, and slowly started looking within myself.',
    'With no formal knowledge or wisdom in the beginning, something inside me started awakening. Intuitively, I began understanding myself, my patterns, my emotions and my energy in a completely different way.',
    'That was the beginning of my journey.',
    'And once this journey started, there was no looking back.',
    'I started learning. I started exploring different healing modalities. I started understanding energy, emotions, the mind and, most importantly, myself.',
    'But my biggest learning was not from any one modality.',
    'It was from experiencing my own transformation.',
    'There was a time when I was completely in a typical housewife mode. I had no personal income, no clear goals, no motivation and very little confidence in myself. I had no professional experience or idea of what I wanted to create for myself.',
    'My world was largely around home, watching television, kitty parties, socialising and gossiping with my large group of friends.',
    'There was nothing wrong with that life, but somewhere inside, I knew there was much more to me.',
    'Healing helped me discover that woman.',
    'Slowly, my thinking changed. My confidence changed. My purpose became clearer. I started learning, working on myself, exploring my abilities and stepping outside the identity I had created for myself.',
    'Today, when I look back, I can genuinely say that I have transformed my life 360 degrees.',
    'From having no personal earning, no clear direction and no professional experience, I have created a life where I have a purpose, a vision and a deep desire to serve and support others on their own journeys.',
    'And that is where Angel Soul was born.',
    'I know what it feels like to be confused, stuck, disconnected from yourself and unsure of what comes next because I have been there too.',
    'I also know what it feels like to slowly rediscover yourself, build your confidence, find your purpose and create a completely different version of your life.',
    'That is why my approach to healing is deeply personal.',
    'I don’t believe healing is about simply doing one session or following one modality. Every person’s journey is different.',
    'I begin by understanding the person and their energy, and then intuitively work with the modalities that are relevant to their journey.',
    'Energy Scan → Understanding → Personalised Healing → Transformation',
    'Today, my intention is not just to heal myself.',
    'It is to serve, share what I have learned and help others reconnect with the version of themselves they may have forgotten.',
    'Angel Soul is an extension of my own journey.'
  ];

  const previewParagraphs = allStoryParagraphs.slice(0, 6);
  const remainingParagraphs = allStoryParagraphs.slice(6);

  return (
    <section id="story" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block font-semibold">
              2. MY STORY – THE STORY BEHIND ANGEL SOUL
            </span>

            <div className="space-y-2 border-l-2 border-[#3B1E54] dark:border-purple-300 pl-4 py-1">
              <p className="font-serif italic text-lg sm:text-xl text-[#241734] dark:text-[#F5EEFA]">
                I transformed myself.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#241734] dark:text-[#F5EEFA]">
                I discovered my purpose.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#3B1E54] dark:text-purple-300 font-medium">
                And now, I am here to help you discover yours.
              </p>
            </div>

            <div className="space-y-4 text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base font-sans leading-relaxed">
              {previewParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4 overflow-hidden pt-2"
                  >
                    {remainingParagraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className={
                          p.includes('Energy Scan → Understanding')
                            ? 'py-2 px-3 rounded-xl bg-purple-50 dark:bg-white/5 border border-purple-200/70 dark:border-white/10 text-xs font-mono tracking-wider text-[#3B1E54] dark:text-purple-200 text-center'
                            : ''
                        }
                      >
                        {p}
                      </p>
                    ))}

                    <div className="pt-4 border-t border-purple-200/80 dark:border-white/10 space-y-1">
                      <p className="font-serif italic text-base sm:text-lg text-[#241734] dark:text-white">
                        I transformed myself.
                      </p>
                      <p className="font-serif italic text-base sm:text-lg text-[#241734] dark:text-white">
                        I discovered my purpose.
                      </p>
                      <p className="font-serif italic text-base sm:text-lg text-[#3B1E54] dark:text-purple-300 font-medium">
                        And now, I am here to help you discover yours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.18em] uppercase text-[#3B1E54] dark:text-[#F5EEFA] hover:text-[#5B2E82] dark:hover:text-[#D5C2EC] font-medium border-b border-purple-300 dark:border-white/20 pb-1 transition-all cursor-pointer"
              >
                <span>{isExpanded ? 'Show Less' : 'Read Complete Story'}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1.5'}`} />
              </button>

              <a
                href="#energy-scan"
                className="text-xs font-sans tracking-[0.15em] uppercase text-[#735391] dark:text-purple-300 hover:text-[#3B1E54] dark:hover:text-white transition-colors"
              >
                Start with Energy Scan (₹7,000) →
              </a>
            </div>
          </div>

          {/* Arti Bhadra Portrait Card with Prominent Placement */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="group relative rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-[#1A0E28]/80 card-hover shadow-sm backdrop-blur-xs">
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')}
                  alt="Arti Bhadra – Founder of Angel Soul"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-4 bg-white/90 dark:bg-[#1A0E28]/95 border-t border-purple-100 dark:border-white/5 text-center">
                <span className="font-serif text-lg text-[#241734] dark:text-[#F5EEFA] block">Arti Bhadra</span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#5C4573] dark:text-[#C5B4DA] block mt-0.5">
                  Founder, Angel Soul
                </span>
                <span className="text-[10px] font-sans text-[#735391] dark:text-[#A792C0] block mt-1">
                  Holistic & Transformational Healer | Spiritual Guide
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
