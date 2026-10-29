import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../../data/spiritualData';
import { useBooking } from '../../context/BookingContext';
import { getAssetUrl } from '../../utils/assetUrl';

export const SessionsSection: React.FC = () => {
  const { openBooking } = useBooking();
  const [selectedTarotFormat, setSelectedTarotFormat] = useState('WhatsApp');

  const tarotFormats = [
    { format: 'WhatsApp', price: 3500 },
    { format: 'Call', price: 4000 },
    { format: 'Video Call', price: 4500 },
    { format: 'In-person', price: 5500 }
  ];

  return (
    <section id="sessions" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <span>Offerings & Investments</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
            Sessions, Readings & Prices
          </h2>

          <div className="w-12 h-px bg-purple-300/40 dark:bg-white/20 mx-auto" />

          <p className="font-serif italic text-base sm:text-lg text-[#3B1E54] dark:text-[#E2D5F2] max-w-xl mx-auto leading-relaxed">
            “The journey can begin with an Energy Scan, after which a personalised healing journey is created according to the individual’s needs.”
          </p>
        </motion.div>

        {/* Sessions Grid */}
        <div className="space-y-6">
          {/* 1. Angel Tarot Reading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-8 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] border border-purple-100 dark:border-white/10 relative shadow-xs">
                <img
                  src={getAssetUrl('/images/products/angel-tarot-reading-altar.jpg')}
                  alt="Angel Tarot Reading with Arti Bhadra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="md:col-span-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                      01 • Intuitive Reading
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                      Angel Tarot Reading
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex -space-x-1.5">
                        {[
                          { img: '/images/tarot/the-hierophant.jpg', alt: 'The Hierophant' },
                          { img: '/images/tarot/the-lovers.jpg', alt: 'The Lovers' },
                          { img: '/images/tarot/the-star.jpg', alt: 'The Star' },
                          { img: '/images/tarot/the-chariot.jpg', alt: 'The Chariot' }
                        ].map((c, i) => (
                          <img
                            key={i}
                            src={getAssetUrl(c.img)}
                            alt={c.alt}
                            className="w-6 h-9 object-cover rounded-md border border-white dark:border-[#1A0E28] shadow-xs"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-sans text-[#735391] dark:text-[#C5B4DA]">
                        Channeled with the Angel Soul Sacred Deck
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                      Investment
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl text-[#3B1E54] dark:text-[#D5C2EC] font-normal">
                      ₹{tarotFormats.find((f) => f.format === selectedTarotFormat)?.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#5C4573] dark:text-[#C5B4DA] block">
                    Choose Consultation Medium:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {tarotFormats.map((tf) => {
                      const isSelected = selectedTarotFormat === tf.format;
                      return (
                        <button
                          key={tf.format}
                          type="button"
                          onClick={() => setSelectedTarotFormat(tf.format)}
                          className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'border-[#3B1E54] bg-[#F2ECF7]/80 dark:border-purple-300 dark:bg-white/10 shadow-xs'
                              : 'border-purple-200/70 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-purple-400'
                          }`}
                        >
                          <span className="block text-xs font-sans font-medium text-[#241734] dark:text-white">
                            {tf.format}
                          </span>
                          <span className="font-serif text-sm text-[#4A2566] dark:text-[#D5C2EC] font-normal mt-0.5 block">
                            ₹{tf.price.toLocaleString('en-IN')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openBooking('angel-tarot-reading')}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Tarot Session</span>
                  </button>
                  <a
                    href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I would like to book an Angel Tarot Reading via ${selectedTarotFormat} (₹${tarotFormats.find((f) => f.format === selectedTarotFormat)?.price.toLocaleString('en-IN')}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-purple-50 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2-Column Grid for other offerings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2. Energy Scan */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                      02 • Foundation
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-white/10 text-[10px] font-mono uppercase text-[#3B1E54] dark:text-[#F5EEFA]">
                      Starting Point
                    </span>
                  </div>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    ₹7,000
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Energy Scan
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  The primary starting point of your Angel Soul journey. Understand what your energy is holding, blocking, and asking for before creating a personalised roadmap.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openBooking('energy-scan')}
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center cursor-pointer shadow-xs"
                >
                  Book Scan (₹7,000)
                </button>
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book an Energy Scan session (₹7,000).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-[#E2D5F2] hover:bg-purple-50 dark:hover:bg-white/5 text-xs font-sans transition-colors flex items-center justify-center cursor-pointer"
                  title="WhatsApp Arti"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* 3. Akashic Reading & Healing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                    03 • Soul Records
                  </span>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    ₹6,000 <span className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA]">/ session</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Akashic Reading & Healing
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  Accessing soul records to understand deeper patterns and karmic dynamics. A 3-session process may be recommended depending on the individual’s requirement.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book an Akashic Reading & Healing session (₹6,000 per session).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 4. Akashic Healing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                    04 • Soul Healing
                  </span>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    ₹5,000 <span className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA]">/ session</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Akashic Healing
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  Dedicated healing at the soul level. A minimum 3-session process may be recommended where required.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book an Akashic Healing session (₹5,000 per session).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 5. Chakra Healing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                    05 • Alignment
                  </span>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    ₹3,500
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Chakra Healing
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  Realignment and cleansing across the chakras. Recommended after Energy Scan.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book a Chakra Healing session (₹3,500 - Recommended after Energy Scan).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 6. Cord Cutting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                    06 • Detachment
                  </span>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    ₹6,000 <span className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA]">/ 30 minutes</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Cord Cutting / Relationship Healing
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  Releasing draining energetic cords and emotional attachments to restore healthy boundaries.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book a Cord Cutting / Relationship Healing session (₹6,000 for 30 minutes).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 7. Access Bars */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                    07 • Mind Deconditioning
                  </span>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    ₹6,000 <span className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA]">/ session</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  Access Bars
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  Gentle touch on 32 points on the head to release mental clutter and conditioning.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book an Access Bars session (₹6,000 per session).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 8. House Energy Scan & Cleansing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-[#1A0E28]/85 p-6 sm:p-7 rounded-3xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                    08 • Spatial Cleansing
                  </span>
                  <span className="font-serif text-2xl text-[#3B1E54] dark:text-[#D5C2EC]">
                    From ₹8,000
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#241734] dark:text-[#F5EEFA]">
                  House Energy Scan & Cleansing
                </h3>
                <p className="text-xs font-sans text-[#4A3B5C] dark:text-[#D4C7E3] leading-relaxed">
                  Starting from ₹8,000. Final pricing depends on the size of the space and the requirement.
                </p>
              </div>
              <div className="pt-3 border-t border-purple-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to inquire about House Energy Scan & Cleansing (Starting from ₹8,000).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* 8. Transformation Healing Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-[#F2ECF7]/80 dark:bg-white/5 border border-purple-200/80 dark:border-white/10 card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0]">
                08 • Custom Journey
              </span>
              <h4 className="font-serif text-2xl text-[#241734] dark:text-[#F5EEFA]">
                Transformation Healing
              </h4>
              <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] max-w-xl">
                Not a fixed package. A personalised journey created after the Energy Scan according to your energy's exact needs.
              </p>
            </div>
            <a
              href="#energy-scan"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.15em] font-medium shrink-0 cursor-pointer shadow-xs group"
            >
              <span>Begin with Energy Scan</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
