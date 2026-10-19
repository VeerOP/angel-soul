import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, BRAND_INFO } from '../data/spiritualData';
import { ProductCategory, Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');

  // Interactive selectors
  const [sprayIntention, setSprayIntention] = useState('Aura Cleansing');
  const [braceletDob, setBraceletDob] = useState('');
  const [braceletIntentions, setBraceletIntentions] = useState('');

  const categories: ProductCategory[] = [
    'All',
    'Energy Bracelets',
    'Aura Salts',
    'Energy Sprays',
    'Sacred Crystals'
  ];

  const handleAddSpray = (product: Product) => {
    addItem(product, 1, sprayIntention);
    showToast({
      title: 'Added to Bag',
      message: `${product.name} (${sprayIntention}) added to your bag.`,
      type: 'gold'
    });
  };

  const handleAddSalt = (product: Product) => {
    addItem(product, 1);
    showToast({
      title: 'Added to Bag',
      message: `${product.name} added to your bag.`,
      type: 'gold'
    });
  };

  const handleOrderBraceletWhatsApp = () => {
    if (!braceletDob.trim()) {
      showToast({
        title: 'Date of Birth Required',
        message: 'Please enter your Date of Birth so Arti can align your crystals.',
        type: 'info'
      });
      return;
    }
    const text = `Hello Arti, I would like to order a Personalised Energy Bracelet (Starting from ₹6,000). My Date of Birth is: ${braceletDob}. Required intentions/alignment: ${braceletIntentions || 'General alignment and balance'}.`;
    window.open(`https://wa.me/919619633432?text=${encodeURIComponent(text)}`, '_blank');
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <span>Consecrated Offerings</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Products & Pricing
          </h1>

          <div className="w-12 h-px bg-purple-300/40 dark:bg-white/20 mx-auto my-6" />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.1em] transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] font-medium shadow-xs'
                    : 'border border-purple-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[#5C4573] dark:text-[#C5B4DA] hover:border-purple-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Products Showcase */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* 1. Personalised Energy Bracelet */}
        {(selectedCategory === 'All' || selectedCategory === 'Energy Bracelets') && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-10 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10">
                  <img
                    src={PRODUCTS[0].images[0]}
                    alt="Personalised Energy Bracelet"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                      01 • Custom
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                      Personalised Energy Bracelet
                    </h2>
                  </div>
                  <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                    Starting from ₹6,000
                  </span>
                </div>

                <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

                <p className="text-[#4A3B5C] dark:text-[#D4C7E3] font-sans text-sm leading-relaxed">
                  Personalised according to DOB, current energies, intentions and required alignment.
                </p>

                {/* DOB & Alignment Input */}
                <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 space-y-3">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                      Date of Birth (DOB) *
                    </label>
                    <input
                      type="date"
                      value={braceletDob}
                      onChange={(e) => setBraceletDob(e.target.value)}
                      className="w-full text-xs font-sans p-2.5 rounded-lg border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] block mb-1">
                      Intentions / Alignment (Optional)
                    </label>
                    <input
                      type="text"
                      value={braceletIntentions}
                      onChange={(e) => setBraceletIntentions(e.target.value)}
                      placeholder="e.g. Protection, clarity, heart healing..."
                      className="w-full text-xs font-sans p-2.5 rounded-lg border border-purple-200/80 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-[#F5EEFA] focus:outline-none focus:border-[#3B1E54]"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleOrderBraceletWhatsApp}
                    className="w-full py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp (+91 96196 33432)</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* 2. AURA CLEANSING SALT */}
        {(selectedCategory === 'All' || selectedCategory === 'Aura Salts') && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-10 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10">
                  <img
                    src={PRODUCTS[1].images[0]}
                    alt="AURA CLEANSING SALT"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                      02 • Salt Blend
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                      AURA CLEANSING SALT
                    </h2>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-[#C5B4DA] mt-1">
                      Cleanse • Protect • Renew
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl text-[#3B1E54] dark:text-[#D5C2EC] block">
                      ₹2,000
                    </span>
                    <span className="text-xs text-[#5C4573] dark:text-[#C5B4DA] font-sans block mt-0.5">
                      Retreat / group: ₹1,500
                    </span>
                  </div>
                </div>

                <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

                <div className="p-3.5 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 space-y-1 text-xs text-[#4A3B5C] dark:text-[#D4C7E3] font-sans">
                  <p>• Standard Price: <strong>₹2,000</strong></p>
                  <p>• For retreat/group participants: <strong>₹1,500</strong></p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAddSalt(PRODUCTS[1])}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag (₹2,000)</span>
                  </button>
                  <a
                    href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to order the AURA CLEANSING SALT (₹2,000).')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:-translate-y-0.5 active:scale-98 transition-all text-center"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* 3. Energy Sprays (10 ml) */}
        {(selectedCategory === 'All' || selectedCategory === 'Energy Sprays') && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-10 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10">
                  <img
                    src={PRODUCTS[2].images[0]}
                    alt="Energy Sprays (10 ml)"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                      03 • Sacred Mists (10 ml)
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                      Energy Sprays (10 ml)
                    </h2>
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                    Starts at ₹1,111
                  </span>
                </div>

                <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#5C4573] dark:text-[#C5B4DA] block">
                    Available for (Click to select):
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRODUCTS[2].options?.map((opt) => {
                      const isSelected = sprayIntention === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSprayIntention(opt)}
                          className={`p-2.5 rounded-xl text-xs font-sans text-left transition-all duration-200 border ${
                            isSelected
                              ? 'border-[#3B1E54] bg-purple-50/80 dark:border-purple-300 dark:bg-white/10 font-medium text-[#241734] dark:text-white shadow-2xs'
                              : 'border-purple-200/70 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[#5C4573] dark:text-[#C5B4DA] hover:border-purple-400'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAddSpray(PRODUCTS[2])}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add {sprayIntention} (Starts ₹1,111)</span>
                  </button>
                  <a
                    href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I want to order the Energy Spray (10 ml) for ${sprayIntention} (Starts at ₹1,111).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-300 dark:border-white/15 bg-white/50 dark:bg-white/5 text-[#241734] dark:text-[#F5EEFA] hover:border-[#3B1E54] dark:hover:border-white text-xs font-sans uppercase tracking-[0.15em] font-medium hover:-translate-y-0.5 active:scale-98 transition-all text-center"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* 4. Crystals */}
        {(selectedCategory === 'All' || selectedCategory === 'Sacred Crystals') && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/75 dark:bg-[#1A0E28]/80 p-8 sm:p-10 rounded-2xl border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10">
                  <img
                    src={PRODUCTS[3].images[0]}
                    alt="Crystals"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-[#A792C0] block mb-1">
                      04 • Natural Minerals
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                      Crystals
                    </h2>
                  </div>
                  <span className="font-serif text-xl text-[#3B1E54] dark:text-[#D5C2EC] whitespace-nowrap">
                    Starting ₹888
                  </span>
                </div>

                <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

                <div className="space-y-2 p-4 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-xs sm:text-sm font-sans text-[#4A3B5C] dark:text-[#D4C7E3]">
                  <div className="flex justify-between py-1 border-b border-purple-100 dark:border-white/5">
                    <span>Crystal Tumbles</span>
                    <strong className="text-[#241734] dark:text-white">Starting ₹888</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-100 dark:border-white/5">
                    <span>Palm Stones</span>
                    <strong className="text-[#241734] dark:text-white">₹1,555</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Other crystals</span>
                    <span className="text-[#735391] dark:text-[#A792C0] italic">Pricing according to crystal, size and type</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent('Hello Arti, I want to inquire about purchasing Crystal Tumbles (Starting ₹888), Palm Stones (₹1,555), or other crystals.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire / Purchase Crystals via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};
