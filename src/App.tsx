import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { ToastProvider } from './context/ToastContext';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/shop/CartDrawer';
import { BookingModal } from './components/booking/BookingModal';
import { FloatingConnect } from './components/common/FloatingConnect';
import { HomePage } from './pages/HomePage';

// Redirect any direct path visits (e.g. /about, /sessions) to the single-page anchor
const SinglePageRouterHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.toLowerCase().replace(/\/$/, '');

    const pathToHash: Record<string, string> = {
      '/about': 'about',
      '/my-story': 'story',
      '/energy-scan': 'energy-scan',
      '/modalities': 'modalities',
      '/daily-tarot': 'daily-tarot',
      '/tarot': 'daily-tarot',
      '/transformation-healing': 'transformation-healing',
      '/sessions': 'sessions',
      '/services': 'sessions',
      '/products': 'products',
      '/shop': 'products',
      '/retreats': 'retreats',
      '/testimonials': 'testimonials',
      '/gallery': 'gallery',
      '/contact': 'contact',
      '/booking': 'contact'
    };

    if (pathToHash[path]) {
      const hash = pathToHash[path];
      navigate(`/#${hash}`, { replace: true });
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, navigate]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <SinglePageRouterHandler />
        <ToastProvider>
          <CartProvider>
            <BookingProvider>
              <div className="min-h-screen flex flex-col bg-[#F7F3FB] text-[#241734] dark:bg-[#12091C] dark:text-[#F5EEFA] font-sans selection:bg-[#3B1E54] selection:text-white dark:selection:bg-[#F5EEFA] dark:selection:text-[#12091C] transition-colors duration-300 relative overflow-x-clip">
                {/* Clean Top Scroll Indicator */}
                <ScrollProgress />

                {/* Shaded Sticky Navbar with Single-Page Anchor Navigation */}
                <Navbar />

                {/* Single Page Flow */}
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                  </Routes>
                </div>

                {/* Global Overlays & Modals */}
                <CartDrawer />
                <BookingModal />
                <FloatingConnect />

                {/* Universal Single-Page Footer */}
                <Footer />
              </div>
            </BookingProvider>
          </CartProvider>
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
