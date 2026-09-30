import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/spiritualData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Sanctuary', 'Sessions', 'Retreats', 'Crystals & Products'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

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
            <span>Visual Archive</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#241734] dark:text-[#F5EEFA] font-normal tracking-tight">
            Moments of Healing
          </h1>

          <div className="w-12 h-px bg-purple-300/60 dark:bg-white/20 mx-auto my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-[#4A3B5C] dark:text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Pictures of sessions, retreats, crystal creations, and workshop moments at Angel Soul.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.1em] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] shadow-sm'
                    : 'border border-purple-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 text-[#5C4573] dark:text-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-purple-50 dark:bg-white/5 border border-purple-200/80 dark:border-white/10 cursor-pointer card-hover"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0E31]/80 via-[#1F0E31]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-200 block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-normal text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-purple-200/80 font-sans mt-0.5 line-clamp-2">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1F0E31]/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxItem(null)}
              className="fixed inset-0 bg-[#12091C]/80 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full bg-white dark:bg-[#1A0E28] rounded-3xl overflow-hidden shadow-2xl border border-purple-200 dark:border-white/10 z-10"
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#1F0E31]/70 text-white hover:bg-[#1F0E31] transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block">
                  {lightboxItem.category}
                </span>
                <h3 className="font-heading text-xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3B5C] dark:text-purple-200/80 font-sans">
                  {lightboxItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
