import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sun, Moon, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_INFO } from '../../data/spiritualData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const { totalItemsCount, setIsOpen: setCartOpen } = useCart();
  const { openBooking } = useBooking();
  const { toggleTheme, isDark } = useTheme();

  // ScrollSpy to track active section smoothly
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'story',
      'energy-scan',
      'modalities',
      'daily-tarot',
      'transformation-healing',
      'sessions',
      'products',
      'retreats',
      'testimonials',
      'gallery',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About & Story' },
    { id: 'daily-tarot', label: 'Daily Tarot', isSpecial: true },
    { id: 'sessions', label: 'Sessions & Healing' },
    { id: 'products', label: 'Products' },
    { id: 'retreats', label: 'Retreats' },
    { id: 'contact', label: 'Contact' },
  ];

  const isLinkActive = (id: string) => {
    if (id === 'about') return activeSection === 'about' || activeSection === 'story';
    if (id === 'sessions') return ['sessions', 'energy-scan', 'modalities', 'transformation-healing'].includes(activeSection);
    return activeSection === id;
  };

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3.5 bg-[#FAF5FD]/95 dark:bg-[#150A22]/95 backdrop-blur-md border-b border-[#E2D5F2] dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(115,83,145,0.08)] dark:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex flex-col group text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0"
        >
          <span className="tracking-[0.24em] text-base sm:text-lg text-[#241734] dark:text-[#F5EEFA] uppercase font-medium">
            {BRAND_INFO.brandName}
          </span>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#735391] dark:text-[#C5B4DA] font-medium mt-0.5">
            {BRAND_INFO.founderName}
          </span>
        </button>

        {/* Desktop Navigation Links (Spacious, Uncrowded 6 items) */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[13px] tracking-wide text-[#5C4573] dark:text-[#C5B4DA]">
          {navLinks.map((link) => {
            const active = isLinkActive(link.id);
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`relative py-1.5 transition-colors duration-200 hover:text-[#241734] dark:hover:text-white cursor-pointer flex items-center gap-1.5 font-medium ${
                  active ? 'text-[#241734] dark:text-white font-semibold' : ''
                }`}
              >
                {link.isSpecial && (
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-purple-300" />
                )}
                <span>{link.label}</span>
                {active && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B1E54] dark:bg-purple-300 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle, Cart, Primary CTA */}
        <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-purple-200/80 dark:border-white/10 text-[#5C4573] hover:text-[#241734] dark:text-[#C5B4DA] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-700" />}
          </button>

          {/* Cart Icon */}
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Shopping Cart"
            className="relative p-2 rounded-full border border-purple-200/80 dark:border-white/10 text-[#5C4573] hover:text-[#241734] dark:text-[#C5B4DA] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3B1E54] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Primary CTA Button (Desktop) */}
          <button
            type="button"
            onClick={() => openBooking('energy-scan')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs tracking-[0.12em] uppercase font-medium shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Book Energy Scan</span>
            <span className="opacity-80 text-[11px] font-mono">(₹7,000)</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-2 lg:hidden text-[#241734] dark:text-[#F5EEFA] hover:text-purple-600 transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF5FD] dark:bg-[#170B26] p-6 z-50 flex flex-col justify-between overflow-y-auto border-l border-purple-200/80 dark:border-white/10 shadow-2xl lg:hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-purple-200/60 dark:border-white/10">
                  <div className="flex flex-col">
                    <span className="tracking-[0.2em] text-base text-[#241734] dark:text-[#F5EEFA] uppercase font-medium">
                      {BRAND_INFO.brandName}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-[#735391] dark:text-[#C5B4DA]">
                      {BRAND_INFO.founderName}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-[#5C4573] dark:text-[#C5B4DA] hover:text-[#241734] dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col space-y-2 text-sm">
                  <button
                    type="button"
                    onClick={() => scrollToSection('home')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('about')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    About Angel Soul & Arti
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('story')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    My Story – The Story Behind Angel Soul
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('energy-scan')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium flex items-center justify-between cursor-pointer"
                  >
                    <span>Energy Scan (Foundation)</span>
                    <span className="text-xs font-mono text-[#735391] dark:text-[#C5B4DA]">₹7,000</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('daily-tarot')}
                    className="text-left px-3 py-2 rounded-xl bg-purple-100/50 dark:bg-white/5 text-[#3B1E54] dark:text-purple-200 font-semibold flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Daily Birthday Tarot
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider bg-[#3B1E54] text-white px-2 py-0.5 rounded-full">
                      Free
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('modalities')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    16 Healing Modalities
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('transformation-healing')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Transformation Healing
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('sessions')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Sessions, Readings & Prices
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('products')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Angel Soul Products
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('retreats')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Retreats (Meet Little Me)
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('testimonials')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Testimonials
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="text-left px-3 py-2 rounded-xl text-[#3B2C4A] dark:text-[#E2D5F2] hover:bg-purple-100/60 dark:hover:bg-white/5 font-medium cursor-pointer"
                  >
                    Contact / Book
                  </button>
                </div>
              </div>

              {/* Mobile Drawer Footer with CTA */}
              <div className="pt-6 border-t border-purple-200/60 dark:border-white/10 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking('energy-scan');
                  }}
                  className="w-full py-3 px-4 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs uppercase tracking-[0.14em] font-medium text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Book Energy Scan (₹7,000)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={BRAND_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full border border-purple-200 dark:border-white/10 text-xs text-center text-[#3B1E54] dark:text-white font-medium block"
                >
                  WhatsApp: {BRAND_INFO.contact.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
