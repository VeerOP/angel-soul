import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/spiritualData';
import { useToast } from '../context/ToastContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [fullName, setFullName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [selectedService, setSelectedService] = useState('Energy Scan (₹7,000)');
  const [format, setFormat] = useState('WhatsApp');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneOrEmail.trim()) {
      showToast({
        title: 'Details Required',
        message: 'Please provide your full name and contact information.',
        type: 'info'
      });
      return;
    }

    setIsSubmitted(true);
    showToast({
      title: 'Inquiry Prepared',
      message: 'Connecting to WhatsApp with your details.',
      type: 'gold'
    });

    const msg = `Hello Arti, I would like to book/inquire with Angel Soul.
• Name: ${fullName}
• Contact: ${phoneOrEmail}
• Modality/Session: ${selectedService}
• Preferred Format: ${format}
${dateOfBirth ? `• Date of Birth: ${dateOfBirth}` : ''}
${notes ? `• Notes: ${notes}` : ''}`;

    setTimeout(() => {
      window.open(`https://wa.me/919619633432?text=${encodeURIComponent(msg)}`, '_blank');
    }, 600);
  };

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300">
            <span>Direct Inquiries</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Contact & Book a Session
          </h1>

          <div className="w-12 h-px bg-purple-300/60 dark:bg-white/20 mx-auto my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-[#4A3B5C] dark:text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Reach out directly to Arti Bhadra for 1:1 sessions, the foundational Energy Scan, consecrated crystal orders, or retreat bookings.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Information from Section 15 */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-6 card-hover backdrop-blur-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block mb-1">
                  Founder & Brand
                </span>
                <h3 className="font-heading text-2xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Arti Bhadra
                </h3>
                <p className="text-xs text-[#735391] dark:text-purple-300 font-sans mt-0.5">
                  Angel Soul
                </p>
              </div>

              <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                {/* Phone / WhatsApp */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:9619633432"
                    className="font-sans font-medium text-[#241734] dark:text-white hover:text-[#3B1E54] dark:hover:text-purple-300 transition-colors block"
                  >
                    9619633432
                  </a>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                    Email
                  </span>
                  <a
                    href="mailto:artibhadra@gmail.com"
                    className="font-sans font-medium text-[#241734] dark:text-white hover:text-[#3B1E54] dark:hover:text-purple-300 transition-colors block"
                  >
                    artibhadra@gmail.com
                  </a>
                </div>

                {/* Instagram */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                    Instagram
                  </span>
                  <a
                    href={BRAND_INFO.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-medium text-[#241734] dark:text-white hover:text-[#3B1E54] dark:hover:text-purple-300 transition-colors block"
                  >
                    @angel_soul_55566
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-900/10 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp (+91 96196 33432)</span>
                </a>
              </div>
            </div>

            {/* Central Philosophy Quote from Brief */}
            <div className="p-6 rounded-3xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/5 space-y-2 card-hover">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block font-medium">
                Central Philosophy
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-[#4A3B5C] dark:text-purple-200/80 leading-relaxed">
                “Every person’s healing journey is different. We begin by understanding the person and their energy through an Energy Scan. Based on what is needed, a personalised healing journey is created using the relevant modalities.”
              </p>
            </div>
          </div>

          {/* Right: Clean Inquiry Form */}
          <div className="md:col-span-7">
            <div className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-10 rounded-3xl border border-purple-200/80 dark:border-white/10 space-y-6 card-hover backdrop-blur-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block mb-1">
                  Inquiry Form
                </span>
                <h3 className="font-heading text-2xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  Reserve a Session with Arti
                </h3>
              </div>

              <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#3B1E54] dark:text-purple-300 mx-auto" />
                  <h4 className="font-heading text-2xl text-[#241734] dark:text-white font-normal">
                    Inquiry Prepared
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3B5C] dark:text-purple-200/80 font-sans max-w-sm mx-auto leading-relaxed">
                    Your details have been formatted for WhatsApp. Opening your chat with Arti Bhadra now.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-purple-200 dark:border-white/20 text-[#3B1E54] dark:text-purple-200 text-xs font-sans uppercase tracking-[0.15em] font-medium hover:bg-purple-50 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your name..."
                        className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneOrEmail}
                        onChange={(e) => setPhoneOrEmail(e.target.value)}
                        placeholder="e.g. 98200XXXXX"
                        className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                        Modality / Session *
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                      >
                        <option value="Energy Scan (₹7,000)">Energy Scan (₹7,000)</option>
                        <option value="Angel Tarot Reading (From ₹3,500)">Angel Tarot Reading (₹3,500 - ₹5,500)</option>
                        <option value="Transformation Healing">Transformation Healing (Personalised)</option>
                        <option value="Meet Little Me Retreat (Karjat)">Meet Little Me Retreat • Karjat (₹17,777)</option>
                        <option value="Akashic Reading & Healing (₹6,000)">Akashic Reading & Healing (₹6,000)</option>
                        <option value="Akashic Healing (₹5,000)">Akashic Healing (₹5,000)</option>
                        <option value="Chakra Healing (₹3,500)">Chakra Healing (₹3,500)</option>
                        <option value="Cord Cutting (₹6,000 / 30 mins)">Cord Cutting / Relationship Healing (₹6,000)</option>
                        <option value="Access Bars (₹6,000)">Access Bars (₹6,000)</option>
                        <option value="House Energy Scan (From ₹8,000)">House Energy Scan & Cleansing (From ₹8,000)</option>
                        <option value="Personalised Energy Bracelet (From ₹6,000)">Personalised Energy Bracelet</option>
                        <option value="Aura Cleansing Salt (₹2,000)">Aura Cleansing Salt (₹2,000)</option>
                        <option value="Energy Sprays 100ml (₹1,111)">Energy Sprays 100ml (₹1,111)</option>
                        <option value="Crystals">Crystals (From ₹888)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                        Preferred Medium
                      </label>
                      <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Call">Call</option>
                        <option value="Video Call">Video Call</option>
                        <option value="In-person">In-person</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                      Date of Birth (Optional / For Bracelet)
                    </label>
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                      Notes / Areas Requiring Guidance (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly describe what areas of your life or energy you wish to explore..."
                      className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-900/10 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to WhatsApp (+91 96196 33432)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
