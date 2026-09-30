import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { AboutAndStorySection } from '../components/home/AboutAndStorySection';
import { ModalitiesSection } from '../components/home/ModalitiesSection';
import { EnergyScanFlowSection } from '../components/home/EnergyScanFlowSection';
import { TransformationHealingSection } from '../components/home/TransformationHealingSection';
import { SessionsSection } from '../components/home/SessionsSection';
import { DailyTarotSection } from '../components/home/DailyTarotSection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { RetreatsBanner } from '../components/home/RetreatsBanner';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { HomeContactSection } from '../components/home/HomeContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  return (
    <main className="overflow-x-clip">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Unified About Angel Soul & My Story (One prominent portrait, tabbed story/bio) */}
      <AboutAndStorySection />

      {/* 4. Energy Scan (5-Step Visual Flow) */}
      <EnergyScanFlowSection />

      {/* 5. Healing Modalities (16 Modalities) */}
      <ModalitiesSection />

      {/* 6. Daily Angel Tarot Reading & Infinite Carousel (Randomized Daily by DOB) */}
      <DailyTarotSection />

      {/* 7. Transformation Healing (Personalised Roadmap) */}
      <TransformationHealingSection />

      {/* 7. Sessions, Readings & Prices */}
      <SessionsSection />

      {/* 8. Angel Soul Products */}
      <FeaturedProductsSection />

      {/* 9. Retreats (Meet Little Me in Karjat) */}
      <RetreatsBanner />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Gallery */}
      <GalleryPreview />

      {/* 12. Contact & Booking */}
      <HomeContactSection />
    </main>
  );
};
