import React from 'react';

export const SacredMarquee: React.FC = () => {
  const announcements = [
    '✦ ANGEL SOUL • Heal. Release. Reconnect. Transform.',
    '✦ Holistic & Transformational Healing by Arti Bhadra',
    '✦ Daily Angel Tarot Reading • Personalised Everyday by Date of Birth',
    '✦ Energy Scan → Understanding → Personalised Healing → Transformation',
    '✦ Start Your Healing Journey • Begin with an Energy Scan (₹7,000)',
    '✦ Meet Little Me Retreat • ANGEL SOUL × PARVAT BUDDIES • Aamantara Villa, Karjat • 18th, 19th & 20th September',
    '✦ WhatsApp & Appointment Hotline: +91 96196 33432',
    '✦ Connect on Instagram: @angel_soul_55566',
  ];

  return (
    <div className="bg-purple-100/70 dark:bg-[#180A2E] text-neutral-900 dark:text-lavender-100 py-2 border-b border-purple-200/50 dark:border-white/5 overflow-hidden relative z-30 select-none transition-colors duration-300">
      <div className="flex w-max animate-marquee">
        {[...announcements, ...announcements].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 text-[10px] sm:text-[11px] uppercase font-heading font-bold tracking-[0.2em] text-neutral-800 dark:text-purple-100 whitespace-nowrap px-6"
          >
            <span>{item}</span>
            <span className="text-purple-600 dark:text-purple-300 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
