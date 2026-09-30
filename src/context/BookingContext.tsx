import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isBookingOpen: boolean;
  selectedServiceId: string | null;
  openBooking: (serviceId?: string) => void;
  closeBooking: () => void;
  setSelectedServiceId: (serviceId: string | null) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const openBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        selectedServiceId,
        openBooking,
        closeBooking,
        setSelectedServiceId,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
