import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { BRAND_INFO } from '../../data/spiritualData';

export const HomeContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [interest, setInterest] = useState('Energy Scan (₹7,000)');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    const text = `Hello Arti, my name is ${name}. I am interested in: ${interest}. Contact: ${contact}. Message: ${message || 'Please share session details.'}`;
    window.open(`https://wa.me/919619633432?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Column: Direct Contact Details from Brief */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block">
                Contact Details
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#241734] dark:text-[#F5EEFA]">
                Connect with Arti Bhadra
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[#4A3B5C] dark:text-[#D4C7E3]">
              <div className="border-b border-purple-200/60 dark:border-white/10 pb-3">
                <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider mb-0.5">
                  Appointment / Retreat Contact
                </span>
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="font-medium text-[#241734] dark:text-[#F5EEFA] hover:underline">
                  {BRAND_INFO.contact.phone}
                </a>
              </div>

              <div className="border-b border-purple-200/60 dark:border-white/10 pb-3">
                <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider mb-0.5">
                  WhatsApp
                </span>
                <a href={BRAND_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#241734] dark:text-[#F5EEFA] hover:underline">
                  +91 96196 33432 →
                </a>
              </div>

              <div className="border-b border-purple-200/60 dark:border-white/10 pb-3">
                <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider mb-0.5">
                  Instagram
                </span>
                <a href={BRAND_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#241734] dark:text-[#F5EEFA] hover:underline">
                  {BRAND_INFO.contact.instagram} →
                </a>
              </div>

              <div>
                <span className="text-[#735391] dark:text-[#A792C0] block uppercase text-[10px] font-mono tracking-wider mb-0.5">
                  Email
                </span>
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="font-medium text-[#241734] dark:text-[#F5EEFA] hover:underline">
                  {BRAND_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-purple-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 bg-white/75 dark:bg-[#1A0E28]/80 card-hover shadow-sm backdrop-blur-xs">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block mb-2">
                Inquiry & Booking Form
              </span>
              <h3 className="font-serif text-2xl font-light text-[#241734] dark:text-[#F5EEFA] mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs sm:text-sm font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white/60 dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    WhatsApp Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. 96196XXXXX"
                    className="w-full text-xs sm:text-sm font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white/60 dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    Offering / Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full text-xs sm:text-sm font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white/60 dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors"
                  >
                    <option value="Energy Scan (₹7,000)">Energy Scan (₹7,000)</option>
                    <option value="Transformation Healing">Transformation Healing (Customised)</option>
                    <option value="Meet Little Me Retreat (Karjat)">Meet Little Me Retreat • Karjat (₹17,777)</option>
                    <option value="Angel Tarot Reading">Angel Tarot Reading (₹3,500 – ₹5,500)</option>
                    <option value="Chakra Healing (₹3,500)">Chakra Healing (₹3,500)</option>
                    <option value="Akashic Reading & Healing (₹6,000)">Akashic Reading & Healing (₹6,000)</option>
                    <option value="Akashic Healing (₹5,000)">Akashic Healing (₹5,000)</option>
                    <option value="Cord Cutting (₹6,000)">Cord Cutting / Relationship Healing (₹6,000)</option>
                    <option value="Access Bars (₹6,000)">Access Bars (₹6,000)</option>
                    <option value="House Energy Scan (Starting ₹8,000)">House Energy Scan & Cleansing (Starting ₹8,000)</option>
                    <option value="Personalised Energy Bracelet">Personalised Energy Bracelet (From ₹6,000)</option>
                    <option value="Aura Cleansing Salt (₹2,000)">Aura Cleansing Salt (₹2,000)</option>
                    <option value="Energy Sprays 100ml (₹1,111)">Energy Sprays 100ml (₹1,111)</option>
                    <option value="Crystals">Crystals</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                    Your Message / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs sm:text-sm font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white/60 dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54] dark:focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white font-sans text-xs tracking-[0.15em] uppercase font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp (+91 96196 33432)</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
