import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { BookingWizard } from './BookingWizard';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, selectedServiceId } = useBooking();

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-[#12091C]/75 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#FAF7FD] dark:bg-[#1A0E28] rounded-3xl border border-purple-200/90 dark:border-white/10 shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto text-[#241734] dark:text-[#F5EEFA]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeBooking}
              className="absolute top-5 right-5 p-2 rounded-full text-[#735391] hover:text-[#3B1E54] dark:hover:text-white transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <BookingWizard
              initialServiceId={selectedServiceId}
              onComplete={closeBooking}
              isModal={true}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
