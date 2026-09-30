import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, Check, Sparkles } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../../data/spiritualData';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { Product } from '../../types';
import { getAssetUrl } from '../../utils/assetUrl';

interface CarouselProductItem {
  id: string;
  name: string;
  category: string;
  priceDisplay: string;
  priceNum: number;
  tagline: string;
  badge?: string;
  image: string;
  productRef: Product;
  selectedOption?: string;
}

export const FeaturedProductsSection: React.FC = () => {
  const { addItem, setIsOpen: setCartOpen } = useCart();
  const { showToast } = useToast();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'both' | 'carousel' | 'grid'>('both');

  // Expanded items for the Infinite Carousel showcasing top selling items + intentions
  const carouselItems: CarouselProductItem[] = [
    {
      id: 'carousel-bracelet',
      name: 'Personalised Energy Bracelet (Chakra)',
      category: 'Energy Bracelets',
      priceDisplay: 'From ₹6,000',
      priceNum: 6000,
      tagline: 'Personalised to your DOB & alignment',
      badge: 'DOB Personalised',
      image: getAssetUrl('/images/products/energy-bracelet-chakra.jpg'),
      productRef: PRODUCTS[0]
    },
    {
      id: 'carousel-bracelet-citrine',
      name: 'Personalised Energy Bracelet (Solar)',
      category: 'Energy Bracelets',
      priceDisplay: 'From ₹6,000',
      priceNum: 6000,
      tagline: 'Attuned for solar plexus & abundance',
      badge: 'DOB Attuned',
      image: getAssetUrl('/images/products/energy-bracelet-citrine.jpg'),
      productRef: PRODUCTS[0]
    },
    {
      id: 'carousel-salt',
      name: 'AURA CLEANSING SALT',
      category: 'Aura Salts',
      priceDisplay: '₹2,000 (Retreat: ₹1,500)',
      priceNum: 2000,
      tagline: 'Cleanse • Protect • Renew',
      badge: 'Cleanse • Protect • Renew',
      image: getAssetUrl('/images/products/aura-cleansing-salt.jpg'),
      productRef: PRODUCTS[1]
    },
    {
      id: 'carousel-spray-aura',
      name: 'Energy Spray: Aura Cleansing',
      category: 'Energy Sprays – 100 ml',
      priceDisplay: '₹1,111',
      priceNum: 1111,
      tagline: 'Clears accumulated emotional fatigue',
      badge: '₹1,111',
      image: getAssetUrl('/images/products/energy-sprays-100ml.jpg'),
      productRef: PRODUCTS[2],
      selectedOption: 'Aura Cleansing'
    },
    {
      id: 'carousel-spray-protection',
      name: 'Energy Spray: Protection',
      category: 'Energy Sprays – 100 ml',
      priceDisplay: '₹1,111',
      priceNum: 1111,
      tagline: 'Etheric boundary shielding',
      badge: '₹1,111',
      image: getAssetUrl('/images/products/energy-sprays-100ml.jpg'),
      productRef: PRODUCTS[2],
      selectedOption: 'Protection'
    },
    {
      id: 'carousel-spray-abundance',
      name: 'Energy Spray: Prosperity & Abundance',
      category: 'Energy Sprays – 100 ml',
      priceDisplay: '₹1,111',
      priceNum: 1111,
      tagline: 'Opens channels for wealth & abundance',
      badge: 'Top Selling',
      image: getAssetUrl('/images/products/energy-sprays-100ml.jpg'),
      productRef: PRODUCTS[2],
      selectedOption: 'Abundance'
    },
    {
      id: 'carousel-spray-love',
      name: 'Energy Spray: Love',
      category: 'Energy Sprays – 100 ml',
      priceDisplay: '₹1,111',
      priceNum: 1111,
      tagline: 'Heart chakra opening & harmony',
      badge: '₹1,111',
      image: getAssetUrl('/images/products/energy-sprays-100ml.jpg'),
      productRef: PRODUCTS[2],
      selectedOption: 'Love'
    },
    {
      id: 'carousel-spray-road-opener',
      name: 'Energy Spray: Road Opener',
      category: 'Energy Sprays – 100 ml',
      priceDisplay: '₹1,111',
      priceNum: 1111,
      tagline: 'Dissolves stagnation & blockages',
      badge: '₹1,111',
      image: getAssetUrl('/images/products/energy-sprays-100ml.jpg'),
      productRef: PRODUCTS[2],
      selectedOption: 'Road Opener'
    },
    {
      id: 'carousel-crystals-tumbles',
      name: 'Natural Crystal Tumbles',
      category: 'Crystals',
      priceDisplay: 'Starting ₹888',
      priceNum: 888,
      tagline: 'Energised natural crystals for alignment',
      badge: 'From ₹888',
      image: getAssetUrl('/images/products/sacred-crystals.jpg'),
      productRef: PRODUCTS[3]
    },
    {
      id: 'carousel-crystals-palms',
      name: 'Polished Labradorite Palm Stones',
      category: 'Crystals',
      priceDisplay: '₹1,555',
      priceNum: 1555,
      tagline: 'Iridescent peacock blue meditative flash',
      badge: '₹1,555',
      image: getAssetUrl('/images/products/sacred-crystals.jpg'),
      productRef: PRODUCTS[3]
    }
  ];

  const handleAddToCart = (product: Product, option?: string, customId?: string) => {
    addItem(product, 1, undefined, true, option);
    const identifier = customId || product.id;
    setAddedId(identifier);
    showToast({
      title: 'Added to Bag',
      message: `${product.name} ${option ? `(${option})` : ''} has been added to your shopping bag.`,
      type: 'gold'
    });
    setCartOpen(true);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section id="products" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-[#735391] dark:text-[#C5B4DA]" />
            <span>9. ANGEL SOUL PRODUCTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
            Angel Soul Products
          </h2>

          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base font-sans leading-relaxed">
            Personalised energy bracelets, cleansing salts, intention sprays, and crystals.
          </p>

          <p className="text-xs font-serif italic text-[#3B1E54] dark:text-[#E2D5F2] pt-1">
            “All products are cleansed and energised before delivery.”
          </p>

          {/* View Mode Switcher */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode('both')}
              className={`px-3 py-1 rounded-full text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                viewMode === 'both'
                  ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31]'
                  : 'bg-white/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 text-[#5C4573] dark:text-[#C5B4DA]'
              }`}
            >
              Showcase & Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`px-3 py-1 rounded-full text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31]'
                  : 'bg-white/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 text-[#5C4573] dark:text-[#C5B4DA]'
              }`}
            >
              Infinite Carousel
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-full text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31]'
                  : 'bg-white/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 text-[#5C4573] dark:text-[#C5B4DA]'
              }`}
            >
              Full Categories Grid
            </button>
          </div>
        </motion.div>

        {/* 1. INFINITE CAROUSEL FOR TOP SELLING PRODUCTS */}
        {(viewMode === 'both' || viewMode === 'carousel') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#3B1E54] dark:text-purple-300" />
                <span>Top Selling Products • Infinite Gliding Showcase</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-sans lowercase text-[#5C4573] dark:text-[#C5B4DA]">
                Hover to pause carousel
              </span>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl border border-purple-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 py-6 backdrop-blur-xs shadow-xs group">
              {/* Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F7F3FB] dark:from-[#12091C] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F7F3FB] dark:from-[#12091C] to-transparent z-10 pointer-events-none" />

              {/* Looping Track */}
              <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                {[...carouselItems, ...carouselItems].map((item, idx) => {
                  const isAdded = addedId === `${item.id}-${idx}`;
                  return (
                    <div
                      key={`${item.id}-${idx}`}
                      className="mx-3 w-64 sm:w-72 p-4 rounded-2xl border border-purple-200/80 dark:border-white/10 bg-white/85 dark:bg-[#1A0E28]/90 card-hover flex flex-col justify-between space-y-3 shrink-0 shadow-xs backdrop-blur-xs"
                    >
                      <div className="space-y-2.5">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {item.badge && (
                            <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#3B1E54]/90 dark:bg-[#1F0E31]/90 text-white text-[10px] font-mono tracking-wider backdrop-blur-xs shadow-xs">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block">
                            {item.category}
                          </span>
                          <h4 className="font-serif text-base font-medium text-[#241734] dark:text-[#F5EEFA] truncate mt-0.5">
                            {item.name}
                          </h4>
                          <span className="font-serif text-sm text-[#3B1E54] dark:text-[#D5C2EC] font-semibold block mt-0.5">
                            {item.priceDisplay}
                          </span>
                          <p className="text-[11px] font-sans text-[#5C4573] dark:text-[#C5B4DA] line-clamp-1 mt-1">
                            {item.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Carousel Action Buttons */}
                      <div className="pt-2 border-t border-purple-100 dark:border-white/5 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item.productRef, item.selectedOption, `${item.id}-${idx}`)}
                          className="py-2 px-2 rounded-xl bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-[10px] font-sans uppercase tracking-[0.1em] font-medium transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3 h-3" />
                              <span>Add</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I am interested in ordering: ${item.name} (${item.priceDisplay}).`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-2 rounded-xl border border-purple-200/80 dark:border-white/10 hover:border-purple-300 text-[#5C4573] dark:text-[#C5B4DA] hover:text-[#241734] dark:hover:text-white text-[10px] font-sans uppercase tracking-[0.1em] font-medium transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <MessageCircle className="w-3 h-3 text-[#735391] dark:text-[#A792C0]" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 2. CATEGORY-BY-CATEGORY GRID (FROM SECTION 9 OF APPROVED BRIEF) */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div className="space-y-8 pt-4">
            {/* Editorial Consecrated Altar Showcase Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 shadow-lg group"
            >
              <div className="aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden relative">
                <img
                  src={getAssetUrl('/images/products/holistic-altar-hero.jpg')}
                  alt="Angel Soul Consecrated Holistic Offerings Altar"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0E31]/95 via-[#1F0E31]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest uppercase text-purple-200 w-max">
                    ✦ Consecrated In Stillness & Devotion
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light">
                    Energised Before Every Delivery
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-purple-100/90 max-w-xl leading-relaxed">
                    Every custom bracelet, cleansing salt blend, and fine intention mist is individually attuned by Arti Bhadra according to sacred energy principles.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between px-2 text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0]">
              <span>Section 9 Products Directory</span>
              <span className="text-[11px] font-sans text-[#5C4573] dark:text-[#C5B4DA]">
                Personalised & Consecrated
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((prod, idx) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group rounded-3xl border border-purple-200/80 dark:border-white/10 p-5 bg-white/75 dark:bg-[#1A0E28]/80 card-hover shadow-xs flex flex-col justify-between space-y-4 backdrop-blur-xs"
                >
                  <div className="space-y-3.5">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/5 relative">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {prod.badge && (
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#3B1E54]/90 dark:bg-[#1F0E31]/90 text-white text-[10px] font-mono tracking-wider backdrop-blur-xs shadow-xs">
                          {prod.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#735391] dark:text-[#A792C0] block">
                        {prod.category}
                      </span>
                      <h3 className="font-serif text-xl text-[#241734] dark:text-[#F5EEFA] font-medium leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA] leading-relaxed line-clamp-3">
                        {prod.description}
                      </p>

                      {/* Display Intentions for Energy Sprays */}
                      {prod.options && prod.options.length > 0 && (
                        <div className="pt-2 space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#735391] dark:text-[#A792C0] block">
                            Available Intentions:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {prod.options.map((opt, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-full border border-purple-200/70 dark:border-white/10 text-[9px] font-sans text-[#3B1E54] dark:text-[#E2D5F2] bg-purple-50/50 dark:bg-white/5"
                              >
                                {opt}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-purple-100 dark:border-white/5 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(prod)}
                      className="w-full py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.12em] font-medium transition-all text-center flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      {addedId === prod.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I am interested in ordering: ${prod.name} (${prod.badge || prod.tagline || ''}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-full border border-purple-200/80 dark:border-white/10 hover:border-purple-300 text-[#5C4573] dark:text-[#C5B4DA] hover:text-[#241734] dark:hover:text-white text-[11px] font-sans uppercase tracking-[0.1em] font-medium transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3 h-3 text-[#735391] dark:text-[#A792C0]" />
                      <span>Order via WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Assurance Banner from Section 9 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-purple-200/70 dark:border-white/10 text-center max-w-xl mx-auto space-y-1 backdrop-blur-xs"
        >
          <span className="font-serif italic text-sm sm:text-base text-[#3B1E54] dark:text-[#E2D5F2] block">
            “All products are cleansed and energised before delivery.”
          </span>
          <p className="text-xs font-sans text-[#5C4573] dark:text-[#C5B4DA]">
            Bracelets are crafted with personal alignment according to your Date of Birth & specific intentions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
