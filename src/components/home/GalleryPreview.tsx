import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/spiritualData';

export const GalleryPreview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ['All', 'Sanctuary', 'Retreats', 'Sessions', 'Crystals & Products'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-[#735391] dark:text-[#C5B4DA]" />
            <span>Visual Sanctuary</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#241734] dark:text-[#F5EEFA]">
            Sanctuary & Healing Spaces
          </h2>

          <p className="text-[#4A3B5C] dark:text-[#D4C7E3] text-sm sm:text-base font-sans leading-relaxed">
            Moments of stillness, retreat connections in Karjat, consecrated crystals, and sacred spaces.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] shadow-xs'
                    : 'bg-white/60 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 text-[#5C4573] dark:text-[#C5B4DA] hover:border-purple-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Responsive Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => setActiveImage(item)}
                className="group aspect-[4/5] rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/10 bg-white/70 dark:bg-[#1A0E28]/80 relative card-hover shadow-xs cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241734]/90 via-[#241734]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-200">
                    {item.category}
                  </span>
                  <span className="font-serif text-base font-normal mt-0.5">{item.title}</span>
                  {item.caption && (
                    <span className="text-xs text-white/80 font-sans mt-1 line-clamp-2">
                      {item.caption}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full bg-[#1A0E28] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[70vh] overflow-hidden bg-black/40">
                  <img
                    src={activeImage.image}
                    alt={activeImage.title}
                    className="w-full h-full object-contain max-h-[70vh] mx-auto"
                  />
                </div>

                <div className="p-6 text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 block">
                    {activeImage.category}
                  </span>
                  <h3 className="font-serif text-2xl font-normal">{activeImage.title}</h3>
                  {activeImage.caption && (
                    <p className="text-xs font-sans text-[#D4C7E3] pt-1 leading-relaxed">
                      {activeImage.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
