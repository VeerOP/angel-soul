import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { BRAND_INFO } from '../data/spiritualData';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetUrl';

export const SessionsPage: React.FC = () => {
  const { openBooking } = useBooking();
  const [selectedTarotFormat, setSelectedTarotFormat] = useState('WhatsApp');

  const tarotFormats = [
    { format: 'WhatsApp', price: 3500 },
    { format: 'Call', price: 4000 },
    { format: 'Video Call', price: 4500 },
    { format: 'In-person', price: 5500 }
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <span>Offerings & Investments</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Sessions, Readings & Prices
          </h1>

          <div className="w-12 h-px bg-purple-300/40 dark:bg-white/20 mx-auto my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-[#3B1E54] dark:text-[#E2D5F2] max-w-2xl mx-auto leading-relaxed">
            “The journey can begin with an Energy Scan, after which a personalised healing journey is created according to the individual’s needs.”
          </p>
        </motion.div>
      </div>

      {/* Main Sessions Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        {/* 1. Angel Tarot Reading */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-10 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                01 • Reading
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                Angel Tarot Reading
              </h2>
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
                Selected Fee
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#3B1E54] dark:text-[#D5C2EC] font-normal">
                ₹{tarotFormats.find((f) => f.format === selectedTarotFormat)?.price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#5C4573] dark:text-[#C5B4DA] block">
              Choose Medium:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tarotFormats.map((tf) => {
                const isSelected = selectedTarotFormat === tf.format;
                return (
                  <button
                    key={tf.format}
                    type="button"
                    onClick={() => setSelectedTarotFormat(tf.format)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-[#3B1E54] bg-purple-50/80 dark:border-purple-300 dark:bg-white/10 shadow-xs'
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
            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I would like to book an Angel Tarot Reading via ${selectedTarotFormat} (₹${tarotFormats.find((f) => f.format === selectedTarotFormat)?.price}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book Tarot Reading ({selectedTarotFormat})</span>
            </a>
            <button
              type="button"
              onClick={() => openBooking('angel-tarot-reading')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule via Wizard</span>
            </button>
          </div>
        </motion.section>

        {/* 2. Energy Scan (Featured Starting Point) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="bg-white/85 dark:bg-[#1A0E28]/90 p-8 sm:p-10 rounded-2xl border-2 border-purple-300/80 dark:border-white/30 card-hover shadow-sm backdrop-blur-xs space-y-6 relative"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-purple-300 dark:border-white/20 bg-purple-50 dark:bg-white/5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#4A2566] dark:text-[#E2D5F2] mb-2">
                Recommended First Step
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                Energy Scan
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                Session Fee
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#3B1E54] dark:text-[#D5C2EC] font-normal">
                ₹7,000
              </span>
            </div>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] font-sans text-sm sm:text-base leading-relaxed">
            Note: This is the starting point of the healing journey.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/energy-scan"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Book Energy Scan (₹7,000)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/energy-scan"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:-translate-y-0.5 active:scale-98 transition-all text-center"
            >
              Learn More About The Scan
            </Link>
          </div>
        </motion.section>

        {/* 3 to 8: Grid of Other Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3. Akashic Reading & Healing */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-7 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Akashic Reading & Healing
                </h3>
                <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                  ₹6,000
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                per session
              </span>
              <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans">
                Note: A 3-session process may be recommended depending on the individual’s requirement.
              </div>
            </div>

            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to book an Akashic Reading & Healing session (₹6,000 per session).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium text-center hover:-translate-y-0.5 transition-all"
            >
              Book Akashic Reading & Healing
            </a>
          </motion.section>

          {/* 4. Akashic Healing */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-7 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Akashic Healing
                </h3>
                <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                  ₹5,000
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                per session
              </span>
              <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans">
                Note: A minimum 3-session process may be recommended where required.
              </div>
            </div>

            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to book an Akashic Healing session (₹5,000 per session).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium text-center hover:-translate-y-0.5 transition-all"
            >
              Book Akashic Healing
            </a>
          </motion.section>

          {/* 5. Chakra Healing */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-7 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Chakra Healing
                </h3>
                <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                  ₹3,500
                </span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans">
                Note: Recommended after Energy Scan.
              </div>
            </div>

            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I would like to book a Chakra Healing session (₹3,500).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium text-center hover:-translate-y-0.5 transition-all"
            >
              Book Chakra Healing (₹3,500)
            </a>
          </motion.section>

          {/* 6. Cord Cutting / Relationship Healing */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-7 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Cord Cutting / Relationship Healing
                </h3>
                <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                  ₹6,000
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                for 30 minutes
              </span>
            </div>

            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to book a Cord Cutting / Relationship Healing session (₹6,000 for 30 minutes).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium text-center hover:-translate-y-0.5 transition-all"
            >
              Book Cord Cutting (₹6,000)
            </a>
          </motion.section>

          {/* 7. Access Bars */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-7 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Access Bars
                </h3>
                <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                  ₹6,000
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                per session
              </span>
            </div>

            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to book an Access Bars session (₹6,000 per session).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium text-center hover:-translate-y-0.5 transition-all"
            >
              Book Access Bars (₹6,000)
            </a>
          </motion.section>

          {/* 8. House Energy Scan & Cleansing */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-7 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  House Energy Scan & Cleansing
                </h3>
                <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                  From ₹8,000
                </span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans">
                Final pricing depends on the size of the space and the requirement.
              </div>
            </div>

            <a
              href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to inquire about a House Energy Scan & Cleansing (Starting from ₹8,000).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium text-center hover:-translate-y-0.5 transition-all"
            >
              Inquire for House Cleansing
            </a>
          </motion.section>
        </div>

        {/* 9. Transformation Healing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-10 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                09 • Complete Healing Journey
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                Transformation Healing
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                Fee
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#3B1E54] dark:text-[#D5C2EC] font-normal">
                Customised
              </span>
            </div>
          </div>

          <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] font-sans text-sm sm:text-base leading-relaxed">
            Customised after Energy Scan. Pricing depends on the combination of modalities recommended.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/transformation-healing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Transformation Healing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
