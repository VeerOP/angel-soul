import React from 'react';
import { BRAND_INFO } from '../../data/spiritualData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-[#ECE2F6]/60 dark:bg-[#0E0617] text-[#4A3B5C] dark:text-[#D4C7E3] pt-16 pb-12 border-t border-purple-200/60 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Central Brand Message */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-8 border-b border-purple-200/60 dark:border-white/5">
          <span className="font-serif tracking-[0.2em] text-lg text-[#241734] dark:text-[#F5EEFA] uppercase block">
            ANGEL SOUL
          </span>
          <p className="font-serif italic text-base sm:text-lg text-[#3B1E54] dark:text-[#E2D5F2] leading-relaxed">
            "{BRAND_INFO.centralMessage}"
          </p>
          <p className="text-xs font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0]">
            {BRAND_INFO.framework}
          </p>
        </div>

        {/* 4 Clean Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-sans">
          {/* Col 1: Arti Bhadra */}
          <div className="space-y-3">
            <span className="font-serif text-sm text-[#241734] dark:text-[#F5EEFA] block font-medium">
              Arti Bhadra
            </span>
            <p className="text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
              Holistic & Transformational Healer | Spiritual Guide.
            </p>
            <p className="text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed">
              Angel Soul is about coming back to yourself, understanding your energy, releasing what no longer serves you and consciously creating a new direction for your life.
            </p>
          </div>

          {/* Col 2: About & Story */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block font-medium">
              Sanctuary Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Angel Soul
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('story')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  My Story (Arti Bhadra)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sanctuary Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Healing & Sessions */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block font-medium">
              Healing & Sessions
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('energy-scan')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Energy Scan (₹7,000)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('modalities')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  16 Healing Modalities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('transformation-healing')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Transformation Healing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('daily-tarot')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>✦ Daily Angel Tarot Reading</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('sessions')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left font-medium"
                >
                  Sessions, Readings & Prices
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('products')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Angel Soul Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('retreats')}
                  className="hover:text-[#241734] dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Aamantara Villa, Karjat Retreat (Meet Little Me)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details from Brief */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block font-medium">
              Contact Details
            </span>
            <ul className="space-y-2 text-[#4A3B5C] dark:text-[#D4C7E3]">
              <li>
                <span className="text-[#735391] dark:text-[#A792C0] block text-[10px] font-mono uppercase">Appointment Contact</span>
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="hover:underline text-[#241734] dark:text-white font-medium">
                  {BRAND_INFO.contact.phone}
                </a>
              </li>
              <li>
                <span className="text-[#735391] dark:text-[#A792C0] block text-[10px] font-mono uppercase">WhatsApp</span>
                <a href={BRAND_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#241734] dark:text-white font-medium">
                  +91 96196 33432 →
                </a>
              </li>
              <li>
                <span className="text-[#735391] dark:text-[#A792C0] block text-[10px] font-mono uppercase">Instagram</span>
                <a href={BRAND_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#241734] dark:text-white font-medium">
                  {BRAND_INFO.contact.instagram} →
                </a>
              </li>
              <li>
                <span className="text-[#735391] dark:text-[#A792C0] block text-[10px] font-mono uppercase">Email</span>
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:underline text-[#241734] dark:text-white font-medium">
                  {BRAND_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-purple-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#735391] dark:text-[#A792C0]">
          <div>
            © {new Date().getFullYear()} Angel Soul by Arti Bhadra. All Rights Reserved.
          </div>
          <div className="mt-2 sm:mt-0 font-mono">
            <span>Appointment Contact: 9619633432</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
