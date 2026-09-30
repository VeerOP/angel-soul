export type ModalityCategory = 
  | 'All' 
  | 'Intuitive & Readings' 
  | 'Energy & Healing' 
  | 'Consciousness & Mind' 
  | 'Manifestation & Soul Growth';

export interface HealingModality {
  id: string;
  name: string;
  category: ModalityCategory;
  tagline: string;
  description: string;
  iconName?: string;
  benefits: string[];
  combinedWith?: string[];
  image: string;
}

export interface SessionPricingOption {
  format: string; // e.g. 'WhatsApp' | 'Call' | 'Video Call' | 'In-person' | 'Standard'
  price: number;
  duration?: string;
  note?: string;
}

export interface SessionOffering {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pricingOptions: SessionPricingOption[];
  startingPrice: number;
  recommendedAfterScan?: boolean;
  notes?: string;
  duration?: string;
  benefits: string[];
  image: string;
  isPopular?: boolean;
}

export type ProductCategory = 
  | 'All'
  | 'Energy Bracelets'
  | 'Aura Salts'
  | 'Energy Sprays'
  | 'Sacred Crystals';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  tagline?: string;
  description: string;
  features: string[];
  specifications?: Record<string, string>;
  options?: string[]; // e.g. available intentions for sprays
  images: string[];
  inStock: boolean;
  isCustomizable?: boolean;
  badge?: string;
  availableSizes?: string[];
}

export interface RetreatActivity {
  title: string;
  description?: string;
  icon?: string;
}

export interface RetreatDayPlan {
  day: string;
  title: string;
  schedule: { time: string; activity: string }[];
}

export interface RetreatDetails {
  id: string;
  title: string;
  collaboration: string;
  theme: string;
  themeDescription: string;
  dates: string;
  location: string;
  duration: string;
  totalPrice: number;
  bookingAmount: number;
  accommodation: string;
  travel: string;
  food: string;
  capacity: number;
  spotsRemaining: number;
  activities: string[];
  inclusions: string[];
  itinerary: RetreatDayPlan[];
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location?: string;
  experienceType: string;
  quote: string;
  fullStory: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sessions' | 'Retreats' | 'Crystals & Products' | 'Sanctuary';
  caption: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedOption?: string; // chosen spray intention
  includeBlessingRitual?: boolean;
  customizationDetails?: {
    dateOfBirth?: string;
    intentions?: string;
  };
}

export interface BookingFormData {
  sessionId: string;
  sessionTitle: string;
  format: string;
  price: number;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  primaryConcern: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  notes?: string;
}

export interface DailyTarotCard {
  id: string;
  number: string;
  name: string;
  archangel: string;
  theme: string;
  keywords: string[];
  element: string;
  image: string;
  message: string;
  affirmation: string;
  guidance: string;
}
