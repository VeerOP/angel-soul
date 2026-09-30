import { 
  HealingModality, 
  SessionOffering, 
  Product, 
  RetreatDetails, 
  Testimonial, 
  GalleryItem 
} from '../types';
import { getAssetUrl } from '../utils/assetUrl';

export const BRAND_INFO = {
  brandName: 'ANGEL SOUL',
  founderName: 'Arti Bhadra',
  title: 'Holistic & Transformational Healer | Spiritual Guide',
  tagline: 'Heal. Release. Reconnect. Transform.',
  subheading: 'Holistic & Transformational Healing by Arti Bhadra',
  positioning: 'Angel Soul is a holistic healing and transformation space founded by Arti Bhadra. My work combines intuitive guidance with different healing modalities to help people understand themselves, identify patterns, release what no longer serves them and move towards personal transformation.',
  centralMessage: 'Every person’s healing journey is different. We begin by understanding the person and their energy through an Energy Scan. Based on what is needed, a personalised healing journey is created using the relevant modalities.',
  framework: 'Energy Scan → Understanding → Personalised Healing → Transformation',
  brandEssence: 'Angel Soul is about coming back to yourself, understanding your energy, releasing what no longer serves you and consciously creating a new direction for your life.',
  contact: {
    phone: '9619633432',
    phoneDisplay: '+91 96196 33432',
    whatsappUrl: 'https://wa.me/919619633432',
    instagram: '@angel_soul_55566',
    instagramUrl: 'https://instagram.com/angel_soul_55566',
    email: 'artibhadra@gmail.com'
  },
  credibility: [
    { metric: '8+', label: 'Years Experience' },
    { metric: '100+', label: '1:1 Readings' },
    { metric: '10+', label: 'Events & Healing Experiences' }
  ]
};

export const MY_STORY = {
  headline: 'MY STORY – THE STORY BEHIND ANGEL SOUL',
  subtitle: 'From a typical housewife with no personal income or direction, to discovering my purpose and helping you discover yours.',
  paragraphs: [
    'My journey with healing did not begin with knowing everything.',
    'It began with me looking for guidance and healing for myself.',
    'Like many people, I too reached out to different people, explored healing, spirituality and guidance, and slowly started looking within myself.',
    'With no formal knowledge or wisdom in the beginning, something inside me started awakening. Intuitively, I began understanding myself, my patterns, my emotions and my energy in a completely different way.',
    'That was the beginning of my journey.',
    'And once this journey started, there was no looking back.',
    'I started learning. I started exploring different healing modalities. I started understanding energy, emotions, the mind and, most importantly, myself.',
    'But my biggest learning was not from any one modality.',
    'It was from experiencing my own transformation.',
    'There was a time when I was completely in a typical housewife mode. I had no personal income, no clear goals, no motivation and very little confidence in myself. I had no professional experience or idea of what I wanted to create for myself.',
    'My world was largely around home, watching television, kitty parties, socialising and gossiping with my large group of friends.',
    'There was nothing wrong with that life, but somewhere inside, I knew there was much more to me.',
    'Healing helped me discover that woman.',
    'Slowly, my thinking changed. My confidence changed. My purpose became clearer. I started learning, working on myself, exploring my abilities and stepping outside the identity I had created for myself.',
    'Today, when I look back, I can genuinely say that I have transformed my life 360 degrees.',
    'From having no personal earning, no clear direction and no professional experience, I have created a life where I have a purpose, a vision and a deep desire to serve and support others on their own journeys.',
    'And that is where Angel Soul was born.',
    'I know what it feels like to be confused, stuck, disconnected from yourself and unsure of what comes next because I have been there too.',
    'I also know what it feels like to slowly rediscover yourself, build your confidence, find your purpose and create a completely different version of your life.',
    'That is why my approach to healing is deeply personal.',
    'I don’t believe healing is about simply doing one session or following one modality. Every person’s journey is different.',
    'I begin by understanding the person and their energy, and then intuitively work with the modalities that are relevant to their journey.',
    'Energy Scan → Understanding → Personalised Healing → Transformation',
    'Today, my intention is not just to heal myself.',
    'It is to serve, share what I have learned and help others reconnect with the version of themselves they may have forgotten.',
    'Angel Soul is an extension of my own journey.'
  ],
  quoteLines: [
    'I transformed myself.',
    'I discovered my purpose.',
    'And now, I am here to help you discover yours.'
  ],
  quote: 'I transformed myself. I discovered my purpose. And now, I am here to help you discover yours.'
};

export const ABOUT_ARTI = {
  title: 'About Arti Bhadra',
  subtitle: 'Founder of Angel Soul | Holistic & Transformational Healer | Spiritual Guide',
  bio: 'Arti Bhadra is the founder of Angel Soul, a holistic and transformational healing space created to support people through emotional, energetic and personal transformation. With around 8 years of experience in different healing modalities, Arti combines intuitive guidance and energy-based healing practices to support people in understanding themselves, releasing emotional patterns and moving forward with greater clarity.',
  modalitiesSummary: 'Her work includes Tarot, Reiki, Pranic Healing, Crystal Healing, Akashic Reading & Healing, Chakra Healing, Manifestation, Access Bars, Cord Cutting and Hypnotherapy.',
  philosophy: 'Her approach is personalised because every individual has a different story, different experiences and different energy. At Angel Soul, the intention is not simply to provide one healing session. The focus is on understanding the person, identifying the areas that need support and creating a personalised healing journey.'
};

export const ENERGY_SCAN_FLOW = [
  {
    stepNumber: '01',
    stepName: 'STEP 1',
    title: 'Energy Scan',
    price: '₹7,000',
    description: 'The foundation of the healing journey to understand your current emotional and energetic patterns.'
  },
  {
    stepNumber: '02',
    stepName: 'STEP 2',
    title: 'Understand Your Patterns & Energy',
    description: 'Identifying where you feel stuck, what you are carrying, and what areas require healing and support.'
  },
  {
    stepNumber: '03',
    stepName: 'STEP 3',
    title: 'Personalised Healing Plan',
    description: 'Creating a tailored healing plan combining the exact modalities relevant to your individual needs.'
  },
  {
    stepNumber: '04',
    stepName: 'STEP 4',
    title: 'Healing & Transformation',
    description: 'Undergoing guided healing sessions to release emotional blockages, align your energy, and shift patterns.'
  },
  {
    stepNumber: '05',
    stepName: 'STEP 5',
    title: 'Integration & Moving Forward',
    description: 'Grounding your transformation, reconnecting with yourself, and consciously creating a new direction for your life.'
  }
];

export const HEALING_MODALITIES: HealingModality[] = [
  {
    id: 'angel-tarot-reading',
    name: 'Angel Tarot Reading',
    category: 'Intuitive & Readings',
    tagline: 'Intuitive guidance through angel tarot',
    description: 'Combining intuitive guidance and card reflection to help understand your current path, patterns, and decisions.',
    benefits: ['Clarity on decisions', 'Understanding patterns', 'Loving intuitive guidance'],
    combinedWith: ['Energy Scanning', 'Spiritual Guidance'],
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'energy-scanning',
    name: 'Energy Scanning',
    category: 'Energy & Healing',
    tagline: 'The starting point of the journey',
    description: 'Scanning your energy to understand current emotional and energetic patterns and identify areas requiring support.',
    benefits: ['Pinpoint blockages', 'Understand your energy', 'Baseline for personalised healing'],
    combinedWith: ['All modalities'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reiki-healing',
    name: 'Reiki Healing',
    category: 'Energy & Healing',
    tagline: 'Subtle life-force energy healing',
    description: 'Channeling universal energy to restore balance, release stress, and promote emotional and energetic well-being.',
    benefits: ['Stress release', 'Energetic balance', 'Peace and calm'],
    combinedWith: ['Chakra Healing', 'Crystal Healing'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pranic-healing',
    name: 'Pranic Healing',
    category: 'Energy & Healing',
    tagline: 'No-touch energy cleansing and balancing',
    description: 'Cleansing congested energies from chakras and projecting fresh life energy to harmonize the energy body.',
    benefits: ['Aura cleansing', 'Chakra balancing', 'Renewed vitality'],
    combinedWith: ['Aura Cleansing', 'Chakra Healing'],
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crystal-healing',
    name: 'Crystal Healing',
    category: 'Energy & Healing',
    tagline: 'Vibrational alignment with natural crystals',
    description: 'Working with natural energized crystals to support energetic alignment, grounding, and healing intentions.',
    benefits: ['Grounding', 'Energetic resonance', 'Chakra alignment'],
    combinedWith: ['Reiki', 'Chakra Healing'],
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'akashic-reading-healing',
    name: 'Akashic Reading & Healing',
    category: 'Intuitive & Readings',
    tagline: 'Soul-level understanding and healing',
    description: 'Accessing soul records to understand deeper patterns, karmic dynamics, and energetic lessons across lifetimes.',
    benefits: ['Understanding soul patterns', 'Resolving repetitive blocks', 'Deep spiritual clarity'],
    combinedWith: ['Cord Cutting', 'Spiritual Guidance'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chakra-healing',
    name: 'Chakra Healing',
    category: 'Energy & Healing',
    tagline: 'Alignment of the 7 vital energy centres',
    description: 'Focused healing and balancing across the chakras to clear blockages and restore harmonious flow.',
    benefits: ['Chakra realignment', 'Emotional stability', 'Renewed vitality'],
    combinedWith: ['Energy Scan', 'Reiki'],
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'manifestation-intention-work',
    name: 'Manifestation & Intention Work',
    category: 'Manifestation & Soul Growth',
    tagline: 'Aligning energy with conscious intentions',
    description: 'Practices to clear inner resistance and align your energy and mindset with your true goals and intentions.',
    benefits: ['Clarity of intention', 'Clearing resistance', 'Focused manifestation'],
    combinedWith: ['Vision Board Work'],
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'access-bars',
    name: 'Access Bars',
    category: 'Consciousness & Mind',
    tagline: 'Releasing limiting thoughts and mental charge',
    description: 'Gentle touch on 32 points on the head to release electromagnetic charge and mental conditioning.',
    benefits: ['Mental lightness', 'Releasing conditioned limitations', 'Deep relaxation'],
    combinedWith: ['Hypnotherapy'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cord-cutting-relationship-healing',
    name: 'Cord Cutting & Relationship Healing',
    category: 'Energy & Healing',
    tagline: 'Releasing unhealthy energetic attachments',
    description: 'Releasing draining energetic cords and emotional attachments to restore your energy and healthy boundaries.',
    benefits: ['Emotional release', 'Energetic sovereignty', 'Relationship peace'],
    combinedWith: ['Aura Cleansing', 'Akashic Healing'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hypnotherapy',
    name: 'Hypnotherapy',
    category: 'Consciousness & Mind',
    tagline: 'Guided subconscious exploration and healing',
    description: 'Working with the subconscious mind to uncover root emotional patterns and support positive transformation.',
    benefits: ['Subconscious healing', 'Overcoming mental blocks', 'Self-awareness'],
    combinedWith: ['Access Bars'],
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aura-cleansing-energy-healing',
    name: 'Aura Cleansing & Energy Healing',
    category: 'Energy & Healing',
    tagline: 'Clearing accumulated heavy energies',
    description: 'Cleansing the energetic field from external negativity, emotional residue, and daily fatigue.',
    benefits: ['Feeling lighter', 'Clear energy field', 'Refreshed presence'],
    combinedWith: ['Aura Cleansing Salt', 'Energy Protection'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'energy-protection',
    name: 'Energy Protection',
    category: 'Energy & Healing',
    tagline: 'Shielding and preserving your personal energy',
    description: 'Techniques and energy practices to protect sensitive individuals and prevent absorbing external negativity.',
    benefits: ['Boundary protection', 'Preserving vitality', 'Emotional shielding'],
    combinedWith: ['Energy Sprays', 'Aura Cleansing'],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'light-codes-activation',
    name: 'Light Codes / Energy Activation',
    category: 'Manifestation & Soul Growth',
    tagline: 'High-frequency energetic activation',
    description: 'Working with subtle spiritual frequencies to activate higher awareness and inner spiritual connection.',
    benefits: ['Spiritual elevation', 'Expanded awareness', 'Inner connection'],
    combinedWith: ['Spiritual Guidance'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spiritual-guidance',
    name: 'Spiritual Guidance',
    category: 'Intuitive & Readings',
    tagline: 'Personalised 1:1 guidance with Arti Bhadra',
    description: 'Compassionate conversations to understand your journey, navigate life challenges, and find clarity.',
    benefits: ['Compassionate listening', 'Spiritual perspective', 'Clarity for next steps'],
    combinedWith: ['Angel Tarot', 'Transformation Healing'],
    image: getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')
  },
  {
    id: 'vision-board-manifestation',
    name: 'Vision Board & Manifestation Work',
    category: 'Manifestation & Soul Growth',
    tagline: 'Creating clarity and conscious life direction',
    description: 'Structuring your goals and visualising the life you want to consciously create through guided intention work.',
    benefits: ['Visual clarity', 'Goal alignment', 'Focused motivation'],
    combinedWith: ['Manifestation & Intention Work'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRANSFORMATION_HEALING = {
  title: 'Transformation Healing',
  headline: 'Transformation Healing is not a fixed package.',
  intro: 'The journey begins with an Energy Scan. Through the Energy Scan, I understand the person’s current emotional and energetic patterns and identify the areas that require support.',
  description: 'Based on the scan and the individual’s requirements, I create a personalised complete healing journey.',
  modalitiesList: [
    'Energy Healing',
    'Reiki',
    'Pranic Healing',
    'Chakra Healing',
    'Crystal Healing',
    'Akashic Reading & Healing',
    'Cord Cutting',
    'Access Bars',
    'Hypnotherapy',
    'Manifestation Work',
    'Aura Cleansing & Protection',
    'Other personalised healing practices'
  ],
  pricingNote: 'Customised after the Energy Scan. The complete healing journey and pricing depend on the individual’s requirements and the modalities/sessions recommended.',
  ctaText: 'START YOUR HEALING JOURNEY',
  ctaSubtext: 'Begin with an Energy Scan and discover what your energy is asking for.'
};

export const SESSIONS_OFFERINGS: SessionOffering[] = [
  {
    id: 'angel-tarot-reading',
    slug: 'angel-tarot-reading',
    title: 'Angel Tarot Reading',
    subtitle: 'Intuitive guidance through angel tarot',
    description: 'Channeled intuitive reading with Arti Bhadra using angel tarot.',
    startingPrice: 3500,
    pricingOptions: [
      { format: 'WhatsApp', price: 3500 },
      { format: 'Call', price: 4000 },
      { format: 'Video Call', price: 4500 },
      { format: 'In-person', price: 5500 }
    ],
    benefits: ['WhatsApp — ₹3,500', 'Call — ₹4,000', 'Video Call — ₹4,500', 'In-person — ₹5,500'],
    image: getAssetUrl('/images/products/angel-tarot-reading-altar.jpg')
  },
  {
    id: 'energy-scan',
    slug: 'energy-scan',
    title: 'Energy Scan',
    subtitle: 'The starting point of the healing journey',
    description: 'Scanning your energy to understand current emotional and energetic patterns and identify areas requiring support.',
    startingPrice: 7000,
    pricingOptions: [
      { format: 'Standard', price: 7000 }
    ],
    benefits: ['Understand current emotional & energetic patterns', 'Identify areas requiring support', 'Foundation for personalised healing'],
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'akashic-reading-healing',
    slug: 'akashic-reading-healing',
    title: 'Akashic Reading & Healing',
    subtitle: '₹6,000 per session',
    description: 'Accessing soul records to understand deeper patterns and karmic dynamics.',
    startingPrice: 6000,
    notes: 'A 3-session process may be recommended depending on the individual’s requirement.',
    pricingOptions: [
      { format: 'Per Session', price: 6000, note: 'A 3-session process may be recommended' }
    ],
    benefits: ['Soul records inquiry', 'Karmic pattern release'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'akashic-healing',
    slug: 'akashic-healing',
    title: 'Akashic Healing',
    subtitle: '₹5,000 per session',
    description: 'Dedicated healing at the soul level in the Akashic records.',
    startingPrice: 5000,
    notes: 'A minimum 3-session process may be recommended where required.',
    pricingOptions: [
      { format: 'Per Session', price: 5000, note: 'Minimum 3-session process recommended where required' }
    ],
    benefits: ['Soul-level healing', 'Deep energetic clearing'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chakra-healing',
    slug: 'chakra-healing',
    title: 'Chakra Healing',
    subtitle: '₹3,500',
    description: 'Purifying and balancing the chakras to clear blockages and restore flow.',
    startingPrice: 3500,
    recommendedAfterScan: true,
    notes: 'Recommended after Energy Scan.',
    pricingOptions: [
      { format: 'Session', price: 3500, note: 'Recommended after Energy Scan' }
    ],
    benefits: ['Chakra alignment', 'Recommended after Energy Scan'],
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cord-cutting-relationship-healing',
    slug: 'cord-cutting-relationship-healing',
    title: 'Cord Cutting / Relationship Healing',
    subtitle: '₹6,000 for 30 minutes',
    description: 'Releasing draining energetic cords and emotional attachments to restore healthy boundaries.',
    startingPrice: 6000,
    duration: '30 minutes',
    pricingOptions: [
      { format: '30 minutes', price: 6000, duration: '30 minutes' }
    ],
    benefits: ['30 minutes focused session', 'Releasing negative cords'],
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'access-bars',
    slug: 'access-bars',
    title: 'Access Bars',
    subtitle: '₹6,000 per session',
    description: 'Gentle touch on 32 points on the head to release mental clutter and conditioning.',
    startingPrice: 6000,
    pricingOptions: [
      { format: 'Per Session', price: 6000 }
    ],
    benefits: ['Releasing mental charge', 'Deep relaxation'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'house-energy-scan-cleansing',
    slug: 'house-energy-scan-cleansing',
    title: 'House Energy Scan & Cleansing',
    subtitle: 'Starting from ₹8,000',
    description: 'Scanning and clearing stagnant or heavy energy from homes and spaces.',
    startingPrice: 8000,
    notes: 'Starting from ₹8,000. Final pricing depends on the size of the space and the requirement.',
    pricingOptions: [
      { format: 'Starting from ₹8,000', price: 8000, note: 'Depends on size and requirement' }
    ],
    benefits: ['Space clearing', 'Clearing heavy or stagnant energies'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'transformation-healing',
    slug: 'transformation-healing',
    title: 'Transformation Healing',
    subtitle: 'Customised after Energy Scan',
    description: 'Not a fixed package. Created after the Energy Scan according to your personal requirements.',
    startingPrice: 0,
    notes: 'Customised after Energy Scan.',
    pricingOptions: [
      { format: 'Customised', price: 0, note: 'Determined after Energy Scan' }
    ],
    benefits: ['Personalised combination of modalities', 'Begins with Energy Scan'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'personalised-energy-bracelet',
    slug: 'personalised-energy-bracelet',
    name: 'Personalised Energy Bracelet',
    category: 'Energy Bracelets',
    price: 6000,
    tagline: 'Starting from ₹6,000',
    description: 'Personalised according to DOB, current energies, intentions and required alignment.',
    features: [
      'Personalised according to Date of Birth (DOB)',
      'Attuned to current energies and intentions',
      'Custom alignment crafted by Arti Bhadra'
    ],
    images: [
      getAssetUrl('/images/products/energy-bracelet-chakra.jpg'),
      getAssetUrl('/images/products/energy-bracelet-citrine.jpg'),
      getAssetUrl('/images/products/energy-bracelet-jade.jpg')
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Starting from ₹6,000'
  },
  {
    id: 'aura-cleansing-salt',
    slug: 'aura-cleansing-salt',
    name: 'AURA CLEANSING SALT',
    category: 'Aura Salts',
    price: 2000,
    originalPrice: 2000,
    tagline: 'Cleanse • Protect • Renew',
    description: 'Crafted for energetic bathing and cleansing. Standard price: ₹2,000. Retreat/group price: ₹1,500.',
    features: [
      'AURA CLEANSING SALT',
      'Cleanse • Protect • Renew',
      'Standard price: ₹2,000',
      'Retreat/group price: ₹1,500'
    ],
    images: [
      getAssetUrl('/images/products/aura-cleansing-salt.jpg'),
      getAssetUrl('/images/products/all-products-altar.jpg')
    ],
    inStock: true,
    badge: '₹2,000 (Retreat: ₹1,500)'
  },
  {
    id: 'energy-sprays-100ml',
    slug: 'energy-sprays-100ml',
    name: 'Energy Sprays – 100 ml',
    category: 'Energy Sprays',
    price: 1111,
    tagline: '₹1,111 each',
    description: 'Sacred intention mists. Available in 9 specific intentions.',
    features: [
      'Volume: 100 ml',
      'Price: ₹1,111 each',
      'Available in 9 conscious intentions'
    ],
    options: [
      'Aura Cleansing',
      'Protection',
      'Love',
      'Prosperity',
      'Abundance',
      'Money',
      'Road Opener',
      'Block Removal',
      'Negativity Removal'
    ],
    images: [
      getAssetUrl('/images/products/energy-sprays-100ml.jpg'),
      getAssetUrl('/images/products/holistic-altar-hero.jpg')
    ],
    inStock: true,
    badge: '₹1,111 each'
  },
  {
    id: 'sacred-crystals',
    slug: 'sacred-crystals',
    name: 'Crystals',
    category: 'Sacred Crystals',
    price: 888,
    tagline: 'Crystal Tumbles starting ₹888 | Palm Stones ₹1,555',
    description: 'Natural energized crystals. Other crystals priced according to crystal, size and type.',
    features: [
      'Crystal Tumbles — Starting ₹888',
      'Palm Stones — ₹1,555',
      'Other crystals — pricing according to crystal, size and type'
    ],
    images: [
      getAssetUrl('/images/products/sacred-crystals.jpg'),
      getAssetUrl('/images/products/all-products-altar.jpg')
    ],
    inStock: true,
    badge: 'From ₹888'
  }
];

export const RETREAT_INFO: RetreatDetails = {
  id: 'meet-little-me-karjat-2026',
  title: 'MEET LITTLE ME',
  collaboration: 'ANGEL SOUL × PARVAT BUDDIES',
  theme: 'ACKNOWLEDGE • FEEL • REMEMBER • HEAL • PROMISE NEW YOU',
  themeDescription: 'The retreat is designed as a space to pause, reconnect with yourself, understand what you have been carrying from the past and consciously create a new way forward.',
  dates: '24–25 October 2026',
  location: 'Karjat',
  duration: '1 Night / 2 Days',
  totalPrice: 17777,
  bookingAmount: 10000,
  accommodation: 'Twin / Triple sharing',
  travel: 'Included',
  food: 'Healthy Indian + Continental',
  capacity: 20,
  spotsRemaining: 7,
  activities: [
    'Nature walk',
    'Trek / hiking',
    'Yoga',
    'Meditation',
    'Breathwork',
    'Artwork',
    'Journaling',
    'Chakra Healing',
    'Crystal Healing',
    'Guided self-reflection',
    'Nature connection',
    'Personal transformation activities',
    'Relaxation and integration'
  ],
  inclusions: [
    'Stay: Twin / Triple sharing in Karjat',
    'Travel: Included',
    'Food: Healthy Indian + Continental',
    'All guided retreat activities & materials'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Acknowledge • Feel • Remember',
      schedule: [
        { time: 'Morning & Afternoon', activity: 'Arrival in Karjat, nature connection, opening circle & guided self-reflection' },
        { time: 'Evening', activity: 'Artwork, journaling, chakra & crystal healing' }
      ]
    },
    {
      day: 'Day 2',
      title: 'Heal • Promise New You',
      schedule: [
        { time: 'Morning', activity: 'Trek / hiking, yoga, breathwork' },
        { time: 'Afternoon', activity: 'Personal transformation activities, closing promise & departure' }
      ]
    }
  ],
  image: getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')
};

// Testimonials: strictly following section 13 where Arti provides them
export const TESTIMONIALS: Testimonial[] = [];

export const TESTIMONIAL_QUOTE = {
  quote: 'I transformed myself. I discovered my purpose. And now, I am here to help you discover yours.',
  author: 'Arti Bhadra',
  title: 'Founder of Angel Soul'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-arti',
    title: 'Arti Bhadra – Founder of Angel Soul',
    category: 'Sessions',
    caption: 'Holistic & Transformational Healer and Spiritual Guide leading personalised healing sessions.',
    image: getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')
  },
  {
    id: 'gal-1',
    title: 'Holistic Offerings Altar',
    category: 'Sanctuary',
    caption: 'Sacred sanctuary space with consecrations, aura salt, and crystal energy.',
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'gal-2',
    title: 'Angel Tarot Sacred Reading',
    category: 'Sessions',
    caption: 'Gold-gilded Angel Tarot cards channeling divine guidance with Archangels Michael, Gabriel and Raphael.',
    image: getAssetUrl('/images/products/angel-tarot-reading-altar.jpg')
  },
  {
    id: 'gal-3',
    title: 'Personalised Energy Bracelet (Chakra)',
    category: 'Crystals & Products',
    caption: 'Personalised according to Date of Birth, current energies, and sacred alignment.',
    image: getAssetUrl('/images/products/energy-bracelet-chakra.jpg')
  },
  {
    id: 'gal-4',
    title: 'Aura Cleansing Salt',
    category: 'Crystals & Products',
    caption: 'Cleanse • Protect • Renew. Crafted with natural salts, dried botanicals, and raw amethyst.',
    image: getAssetUrl('/images/products/aura-cleansing-salt.jpg')
  },
  {
    id: 'gal-5',
    title: 'Consecrated Energy Sprays (100 ml)',
    category: 'Crystals & Products',
    caption: 'Sacred intention mists: Aura Cleansing, Protection, Love, Abundance, Prosperity & Road Opener.',
    image: getAssetUrl('/images/products/energy-sprays-100ml.jpg')
  },
  {
    id: 'gal-6',
    title: 'Labradorite Palm Stone & Tumbles',
    category: 'Crystals & Products',
    caption: 'Natural energized crystals: Peacock-flash Labradorite palm stone with amethyst and quartz tumbles.',
    image: getAssetUrl('/images/products/sacred-crystals.jpg')
  },
  {
    id: 'gal-7',
    title: 'Citrine & Tiger’s Eye Sun Bracelet',
    category: 'Crystals & Products',
    caption: 'Energized crystal bracelet aligned for abundance, confidence, and solar plexus vitality.',
    image: getAssetUrl('/images/products/energy-bracelet-citrine.jpg')
  },
  {
    id: 'gal-8',
    title: 'Jade & Hematite Grounding Bracelet',
    category: 'Crystals & Products',
    caption: 'Protective and heart-balancing natural stone bracelet custom attuned to the wearer.',
    image: getAssetUrl('/images/products/energy-bracelet-jade.jpg')
  },
  {
    id: 'gal-9',
    title: 'Meet Little Me Retreat in Karjat',
    category: 'Retreats',
    caption: 'Angel Soul × Parvat Buddies retreat sanctuary in tranquil Karjat Western Ghats.',
    image: getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')
  }
];

export const SERVICES = SESSIONS_OFFERINGS;
export const RETREATS = [RETREAT_INFO];
