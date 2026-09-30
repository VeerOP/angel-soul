import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIAL_QUOTE } from '../../data/spiritualData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="scroll-mt-28 py-20 sm:py-28 bg-[#F7F3FB] dark:bg-[#12091C] border-t border-purple-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-2xl bg-white/70 dark:bg-[#1A0E28]/80 border border-purple-200/80 dark:border-white/10 card-hover shadow-xs backdrop-blur-xs space-y-8"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#4A2566] dark:text-[#E2D5F2] block">
            Testimonials & Reflections
          </span>

          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#241734] dark:text-[#F5EEFA] font-normal leading-snug">
            "{TESTIMONIAL_QUOTE.quote}"
          </blockquote>

          <div className="space-y-1">
            <span className="font-serif text-lg text-[#241734] dark:text-[#F5EEFA] block">
              {TESTIMONIAL_QUOTE.author}
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-[#5C4573] dark:text-[#C5B4DA] block">
              {TESTIMONIAL_QUOTE.title}
            </span>
          </div>

          <p className="text-xs font-serif italic text-[#5C4573] dark:text-[#C5B4DA] pt-4 border-t border-purple-100 dark:border-white/5 max-w-lg mx-auto">
            “I feel safe here. I feel understood. I feel guided. I feel this is a space for my transformation.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
