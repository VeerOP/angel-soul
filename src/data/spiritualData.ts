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
    image: getAssetUrl('/images/tarot/the-hierophant.jpg')
  },
  {
    id: 'energy-scanning',
    name: 'Energy Scanning',
    category: 'Energy & Healing',
    tagline: 'The starting point of the journey',
    description: 'Scanning your energy to understand current emotional and energetic patterns and identify areas requiring support.',
    benefits: ['Pinpoint blockages', 'Understand your energy', 'Baseline for personalised healing'],
    combinedWith: ['All modalities'],
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'reiki-healing',
    name: 'Reiki Healing',
    category: 'Energy & Healing',
    tagline: 'Subtle life-force energy healing',
    description: 'Channeling universal energy to restore balance, release stress, and promote emotional and energetic well-being.',
    benefits: ['Stress release', 'Energetic balance', 'Peace and calm'],
    combinedWith: ['Chakra Healing', 'Crystal Healing'],
    image: getAssetUrl('/images/products/sacred-crystals.jpg')
  },
  {
    id: 'pranic-healing',
    name: 'Pranic Healing',
    category: 'Energy & Healing',
    tagline: 'No-touch energy cleansing and balancing',
    description: 'Cleansing congested energies from chakras and projecting fresh life energy to harmonize the energy body.',
    benefits: ['Aura cleansing', 'Chakra balancing', 'Renewed vitality'],
    combinedWith: ['Aura Cleansing', 'Chakra Healing'],
    image: getAssetUrl('/images/products/all-products-altar.jpg')
  },
  {
    id: 'crystal-healing',
    name: 'Crystal Healing',
    category: 'Energy & Healing',
    tagline: 'Vibrational alignment with natural crystals',
    description: 'Working with natural energized crystals to support energetic alignment, grounding, and healing intentions.',
    benefits: ['Grounding', 'Energetic resonance', 'Chakra alignment'],
    combinedWith: ['Reiki', 'Chakra Healing'],
    image: getAssetUrl('/images/products/sacred-crystals.jpg')
  },
  {
    id: 'akashic-reading-healing',
    name: 'Akashic Reading & Healing',
    category: 'Intuitive & Readings',
    tagline: 'Soul-level understanding and healing',
    description: 'Accessing soul records to understand deeper patterns, karmic dynamics, and energetic lessons across lifetimes.',
    benefits: ['Understanding soul patterns', 'Resolving repetitive blocks', 'Deep spiritual clarity'],
    combinedWith: ['Cord Cutting', 'Spiritual Guidance'],
    image: getAssetUrl('/images/tarot/the-star.jpg')
  },
  {
    id: 'chakra-healing',
    name: 'Chakra Healing',
    category: 'Energy & Healing',
    tagline: 'Alignment of the 7 vital energy centres',
    description: 'Focused healing and balancing across the chakras to clear blockages and restore harmonious flow.',
    benefits: ['Chakra realignment', 'Emotional stability', 'Renewed vitality'],
    combinedWith: ['Energy Scan', 'Reiki'],
    image: getAssetUrl('/images/products/energy-bracelet-chakra.jpg')
  },
  {
    id: 'manifestation-intention-work',
    name: 'Manifestation & Intention Work',
    category: 'Manifestation & Soul Growth',
    tagline: 'Aligning energy with conscious intentions',
    description: 'Practices to clear inner resistance and align your energy and mindset with your true goals and intentions.',
    benefits: ['Clarity of intention', 'Clearing resistance', 'Focused manifestation'],
    combinedWith: ['Vision Board Work'],
    image: getAssetUrl('/images/tarot/wheel-of-fortune.jpg')
  },
  {
    id: 'access-bars',
    name: 'Access Bars',
    category: 'Consciousness & Mind',
    tagline: 'Releasing limiting thoughts and mental charge',
    description: 'Gentle touch on 32 points on the head to release electromagnetic charge and mental conditioning.',
    benefits: ['Mental lightness', 'Releasing conditioned limitations', 'Deep relaxation'],
    combinedWith: ['Hypnotherapy'],
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'cord-cutting-relationship-healing',
    name: 'Cord Cutting & Relationship Healing',
    category: 'Energy & Healing',
    tagline: 'Releasing unhealthy energetic attachments',
    description: 'Releasing draining energetic cords and emotional attachments to restore your energy and healthy boundaries.',
    benefits: ['Emotional release', 'Energetic sovereignty', 'Relationship peace'],
    combinedWith: ['Aura Cleansing', 'Akashic Healing'],
    image: getAssetUrl('/images/tarot/the-lovers.jpg')
  },
  {
    id: 'hypnotherapy',
    name: 'Hypnotherapy',
    category: 'Consciousness & Mind',
    tagline: 'Guided subconscious exploration and healing',
    description: 'Working with the subconscious mind to uncover root emotional patterns and support positive transformation.',
    benefits: ['Subconscious healing', 'Overcoming mental blocks', 'Self-awareness'],
    combinedWith: ['Access Bars'],
    image: getAssetUrl('/images/tarot/the-moon.jpg')
  },
  {
    id: 'aura-cleansing-energy-healing',
    name: 'Aura Cleansing & Energy Healing',
    category: 'Energy & Healing',
    tagline: 'Clearing accumulated heavy energies',
    description: 'Cleansing the energetic field from external negativity, emotional residue, and daily fatigue.',
    benefits: ['Feeling lighter', 'Clear energy field', 'Refreshed presence'],
    combinedWith: ['Aura Cleansing Salt', 'Energy Protection'],
    image: getAssetUrl('/images/products/aura-cleansing-salt.jpg')
  },
  {
    id: 'energy-protection',
    name: 'Energy Protection',
    category: 'Energy & Healing',
    tagline: 'Shielding and preserving your personal energy',
    description: 'Techniques and energy practices to protect sensitive individuals and prevent absorbing external negativity.',
    benefits: ['Boundary protection', 'Preserving vitality', 'Emotional shielding'],
    combinedWith: ['Energy Sprays', 'Aura Cleansing'],
    image: getAssetUrl('/images/tarot/strength.jpg')
  },
  {
    id: 'light-codes-activation',
    name: 'Light Codes / Energy Activation',
    category: 'Manifestation & Soul Growth',
    tagline: 'High-frequency energetic activation',
    description: 'Working with subtle spiritual frequencies to activate higher awareness and inner spiritual connection.',
    benefits: ['Spiritual elevation', 'Expanded awareness', 'Inner connection'],
    combinedWith: ['Spiritual Guidance'],
    image: getAssetUrl('/images/tarot/renewal.jpg')
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
    image: getAssetUrl('/images/tarot/the-chariot.jpg')
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
    image: getAssetUrl('/images/tarot/the-star.jpg')
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
    image: getAssetUrl('/images/tarot/renewal.jpg')
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
    image: getAssetUrl('/images/products/energy-bracelet-chakra.jpg')
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
    image: getAssetUrl('/images/tarot/the-lovers.jpg')
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
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
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
    image: getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')
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
    image: getAssetUrl('/images/products/all-products-altar.jpg')
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
    name: 'Energy Sprays (10 ml)',
    category: 'Energy Sprays',
    price: 1111,
    tagline: 'Starting at ₹1,111 (10 ml)',
    description: 'Sacred intention mists. Available in 9 specific intentions. Starts at ₹1,111 for 10 ml capacity.',
    features: [
      'Capacity: 10 ml',
      'Price: Starting at ₹1,111',
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
    badge: 'Starts at ₹1,111 (10 ml)'
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
  themeDescription: 'Escape the city and retreat to Aamantara Villa, Karjat. A sacred sanctuary designed to pause, reconnect with yourself, enjoy the refreshing pool, lush greenery, delicious homely veg meals, games & quality time with your loved ones while consciously creating a new way forward.',
  dates: '18th, 19th & 20th September',
  location: 'Aamantara Villa, Karjat',
  duration: '2 Nights / 3 Days',
  totalPrice: 17777,
  bookingAmount: 10000,
  accommodation: 'Private Villa with Pool (Twin / Triple sharing)',
  travel: 'Included',
  food: 'Delicious homely veg meals (Pure Vegetarian)',
  capacity: 20,
  spotsRemaining: 7,
  activities: [
    'Nature walk & lush greenery exploration',
    'Trek / hiking',
    'Yoga',
    'Meditation',
    'Breathwork',
    'Artwork',
    'Journaling',
    'Chakra Healing',
    'Crystal Healing',
    'Guided self-reflection',
    'Refreshing pool unwind & group games',
    'Personal transformation activities',
    'Relaxation, integration & quality bonding'
  ],
  inclusions: [
    'Stay: Private villa with refreshing pool at Aamantara Villa, Karjat',
    'Travel: Included',
    'Food: Delicious homely pure veg meals',
    'All guided retreat activities, materials & group games'
  ],
  itinerary: [
    {
      day: 'Day 1 (18th Sep)',
      title: 'Arrival • Acknowledge • Feel',
      schedule: [
        { time: 'Morning & Afternoon', activity: 'Arrival at Aamantara Villa, Karjat, nature connection, private pool & lush greenery unwind, opening circle' },
        { time: 'Evening', activity: 'Artwork, journaling, chakra & crystal healing under the stars' }
      ]
    },
    {
      day: 'Day 2 (19th Sep)',
      title: 'Heal • Deep Reconnection',
      schedule: [
        { time: 'Morning', activity: 'Lush greenery nature walk, morning yoga & breathwork' },
        { time: 'Afternoon & Evening', activity: 'Personal transformation activities, interactive group games, refreshing pool relaxation & evening meditation' }
      ]
    },
    {
      day: 'Day 3 (20th Sep)',
      title: 'Promise New You • Integration & Farewell',
      schedule: [
        { time: 'Morning', activity: 'Integration circle, final healing rituals & sacred quality bonding' },
        { time: 'Afternoon', activity: 'Closing promise, delicious homely veg farewell lunch & departure' }
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
  // --- SANCTUARY (6 items) ---
  {
    id: 'gal-sanc-1',
    title: 'Holistic Offerings Altar',
    category: 'Sanctuary',
    caption: 'Sacred altar space consecrated with candles, aura salt, and crystal energy.',
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'gal-sanc-2',
    title: 'Nature Sanctuary at Aamantara Villa',
    category: 'Sanctuary',
    caption: 'Serene outdoor healing sanctuary surrounded by lush Karjat greenery and tranquil mountain air.',
    image: getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')
  },
  {
    id: 'gal-sanc-3',
    title: 'Angel Tarot Sacred Space',
    category: 'Sanctuary',
    caption: 'Quiet intuitive reflection altar with candles, clear quartz, and archangel guidance.',
    image: getAssetUrl('/images/products/angel-tarot-reading-altar.jpg')
  },
  {
    id: 'gal-sanc-4',
    title: 'Consecrated Energy Mist Altar',
    category: 'Sanctuary',
    caption: 'Sacred healing sprays and natural raw crystals charged in deep meditation.',
    image: getAssetUrl('/images/products/energy-sprays-100ml.jpg')
  },
  {
    id: 'gal-sanc-5',
    title: 'Holistic Energy Toolset',
    category: 'Sanctuary',
    caption: 'Complete collection of consecrated aura salts, crystal bracelets, and energetic sprays.',
    image: getAssetUrl('/images/products/all-products-altar.jpg')
  },
  {
    id: 'gal-sanc-6',
    title: 'Master Healer Crystal Space',
    category: 'Sanctuary',
    caption: 'Peacock-flash labradorite palm stone, raw amethyst cluster, and rainbow fluorite.',
    image: getAssetUrl('/images/products/sacred-crystals.jpg')
  },

  // --- RETREATS (6 items) ---
  {
    id: 'gal-ret-1',
    title: 'Meet Little Me Retreat • Karjat',
    category: 'Retreats',
    caption: 'Angel Soul × Parvat Buddies retreat sanctuary at Aamantara Villa in lush Karjat (Sep 18–20).',
    image: getAssetUrl('/images/retreats/karjat-retreat-sanctuary.jpg')
  },
  {
    id: 'gal-ret-2',
    title: 'Inner Child Meditation Altar',
    category: 'Retreats',
    caption: 'Sacred altar arranged for breathwork, sound healing, and emotional release circles.',
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'gal-ret-3',
    title: 'Retreat Auric Clearing Station',
    category: 'Retreats',
    caption: 'Consecrated 10ml essential oil mists and crystal cleansing for retreat participants.',
    image: getAssetUrl('/images/products/energy-sprays-100ml.jpg')
  },
  {
    id: 'gal-ret-4',
    title: '1:1 Channeled Retreat Readings',
    category: 'Retreats',
    caption: 'Personalized card channeling and spiritual mentoring in quiet nature corners.',
    image: getAssetUrl('/images/products/angel-tarot-reading-altar.jpg')
  },
  {
    id: 'gal-ret-5',
    title: 'Arti Bhadra • Retreat Guide',
    category: 'Retreats',
    caption: 'Founder of Angel Soul holding space for personal breakthroughs and conscious inner child healing.',
    image: getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')
  },
  {
    id: 'gal-ret-6',
    title: 'Consecrated Retreat Blessings',
    category: 'Retreats',
    caption: 'Blessed crystals and handcrafted energetic tools gifted to retreat attendees.',
    image: getAssetUrl('/images/products/all-products-altar.jpg')
  },

  // --- SESSIONS (6 items) ---
  {
    id: 'gal-sess-1',
    title: 'Arti Bhadra • Sacred Healer',
    category: 'Sessions',
    caption: 'Founder of Angel Soul holding compassionate presence during 1:1 intuitive healing sessions.',
    image: getAssetUrl('/images/arti/arti-bhadra-portrait.jpg')
  },
  {
    id: 'gal-sess-2',
    title: 'Angel Tarot Channeled Reading',
    category: 'Sessions',
    caption: 'Channeled card layout with authentic gold-gilded deck and archangel frequencies.',
    image: getAssetUrl('/images/products/angel-tarot-reading-altar.jpg')
  },
  {
    id: 'gal-sess-3',
    title: 'Holistic Energy Scanning',
    category: 'Sessions',
    caption: 'Pinpointing emotional and physical blockages to establish a foundation for healing.',
    image: getAssetUrl('/images/products/holistic-altar-hero.jpg')
  },
  {
    id: 'gal-sess-4',
    title: 'Spiritual Wisdom & Guidance',
    category: 'Sessions',
    caption: 'Archangel Sandalphon – Spiritual Wisdom & Answered Prayers. Channeled guidance.',
    image: getAssetUrl('/images/tarot/the-hierophant.jpg')
  },
  {
    id: 'gal-sess-5',
    title: 'Heart Alignment & Cord Cutting',
    category: 'Sessions',
    caption: 'Archangel Chamuel – Unconditional Love. Severing draining cords to restore self-worth.',
    image: getAssetUrl('/images/tarot/the-lovers.jpg')
  },
  {
    id: 'gal-sess-6',
    title: 'Aura Cleansing & Energetic Reset',
    category: 'Sessions',
    caption: 'Sacred Himalayan salt and amethyst ritual for energetic purification and protection.',
    image: getAssetUrl('/images/products/aura-cleansing-salt.jpg')
  },

  // --- ANGEL TAROT (12 items) ---
  {
    id: 'gal-tarot-lovers',
    title: 'VI • The Lovers',
    category: 'Angel Tarot',
    caption: 'Archangel Chamuel – Unconditional Love & Soul Alignment. Authentic card from the Angel Soul sacred deck.',
    image: getAssetUrl('/images/tarot/the-lovers.jpg')
  },
  {
    id: 'gal-tarot-star',
    title: 'XVII • The Star',
    category: 'Angel Tarot',
    caption: 'Archangel Jophiel – Renewed Hope, Faith & Divine Inspiration. Gold-gilded sacred arcana.',
    image: getAssetUrl('/images/tarot/the-star.jpg')
  },
  {
    id: 'gal-tarot-hierophant',
    title: 'V • The Hierophant',
    category: 'Angel Tarot',
    caption: 'Archangel Sandalphon – Spiritual Wisdom & Answered Prayers. Guidance, tradition, and belief.',
    image: getAssetUrl('/images/tarot/the-hierophant.jpg')
  },
  {
    id: 'gal-tarot-chariot',
    title: 'VII • The Chariot',
    category: 'Angel Tarot',
    caption: 'Archangel Metatron – Will • Control • Victory. Channeled momentum and focus.',
    image: getAssetUrl('/images/tarot/the-chariot.jpg')
  },
  {
    id: 'gal-tarot-strength',
    title: 'VIII • Strength',
    category: 'Angel Tarot',
    caption: 'Archangel Ariel – Courage • Compassion • Control. Gentle inner resilience.',
    image: getAssetUrl('/images/tarot/strength.jpg')
  },
  {
    id: 'gal-tarot-moon',
    title: 'XVIII • The Moon',
    category: 'Angel Tarot',
    caption: 'Archangel Haniel – Illusion • Intuition • Revelation. Subconscious clearing and psychic gifts.',
    image: getAssetUrl('/images/tarot/the-moon.jpg')
  },
  {
    id: 'gal-tarot-renewal',
    title: 'XX • Renewal (Judgement)',
    category: 'Angel Tarot',
    caption: 'Archangel Jeremiel – Awakening • Calling • Renewal. Soul ascension and conscious life review.',
    image: getAssetUrl('/images/tarot/renewal.jpg')
  },
  {
    id: 'gal-tarot-world',
    title: 'XXI • The World',
    category: 'Angel Tarot',
    caption: 'Archangel Michael – Completion • Harmony • Fulfillment. Wholeness and cosmic alignment.',
    image: getAssetUrl('/images/tarot/the-world.jpg')
  },
  {
    id: 'gal-tarot-hermit',
    title: 'IX • The Hermit',
    category: 'Angel Tarot',
    caption: 'Archangel Raziel – Soul Search, Wisdom, Solitude. Inner illumination.',
    image: getAssetUrl('/images/tarot/the-hermit.jpg')
  },
  {
    id: 'gal-tarot-wheel',
    title: 'X • Wheel of Fortune',
    category: 'Angel Tarot',
    caption: 'Archangel Jeremiel – Change, Cycle, Destiny. Divine timing in motion.',
    image: getAssetUrl('/images/tarot/wheel-of-fortune.jpg')
  },
  {
    id: 'gal-tarot-cups',
    title: 'Six of Cups • Heart Innocence',
    category: 'Angel Tarot',
    caption: 'Suit of Cups – Nostalgia • Innocence • Gift. Healing the inner child through pure warmth.',
    image: getAssetUrl('/images/tarot/six-of-cups.jpg')
  },
  {
    id: 'gal-tarot-pentacles',
    title: 'Four of Pentacles • Fortress of Strength',
    category: 'Angel Tarot',
    caption: 'Suit of Pentacles – I Am My Own Fortress, I Hoard My Strength. Sacred boundary affirmation.',
    image: getAssetUrl('/images/tarot/four-of-pentacles-affirmation.jpg')
  },

  // --- CRYSTALS & PRODUCTS (8 items) ---
  {
    id: 'gal-prod-chakra',
    title: 'Chakra Balancing Crystal Bracelet',
    category: 'Crystals & Products',
    caption: 'Personalised according to Date of Birth, current energies, and sacred alignment.',
    image: getAssetUrl('/images/products/energy-bracelet-chakra.jpg')
  },
  {
    id: 'gal-prod-salt',
    title: 'Aura Cleansing Himalayan Salt',
    category: 'Crystals & Products',
    caption: 'Cleanse • Protect • Renew. Crafted with natural salts, dried botanicals, and raw amethyst.',
    image: getAssetUrl('/images/products/aura-cleansing-salt.jpg')
  },
  {
    id: 'gal-prod-sprays',
    title: 'Consecrated Energy Sprays (10 ml)',
    category: 'Crystals & Products',
    caption: 'Sacred intention mists (10 ml): Aura Cleansing, Protection, Love, Abundance, Prosperity & Road Opener.',
    image: getAssetUrl('/images/products/energy-sprays-100ml.jpg')
  },
  {
    id: 'gal-prod-crystals',
    title: 'Labradorite Palm Stone & Tumbles',
    category: 'Crystals & Products',
    caption: 'Natural energized crystals: Peacock-flash Labradorite palm stone with amethyst and quartz tumbles.',
    image: getAssetUrl('/images/products/sacred-crystals.jpg')
  },
  {
    id: 'gal-prod-citrine',
    title: 'Citrine & Tiger’s Eye Sun Bracelet',
    category: 'Crystals & Products',
    caption: 'Energized crystal bracelet aligned for abundance, confidence, and solar plexus vitality.',
    image: getAssetUrl('/images/products/energy-bracelet-citrine.jpg')
  },
  {
    id: 'gal-prod-jade',
    title: 'Jade & Hematite Grounding Bracelet',
    category: 'Crystals & Products',
    caption: 'Protective and heart-balancing natural stone bracelet custom attuned to the wearer.',
    image: getAssetUrl('/images/products/energy-bracelet-jade.jpg')
  },
  {
    id: 'gal-prod-altar',
    title: 'Complete Sacred Altar Collection',
    category: 'Crystals & Products',
    caption: 'All handcrafted holistic products together on the sacred altar.',
    image: getAssetUrl('/images/products/all-products-altar.jpg')
  },
  {
    id: 'gal-prod-showcase',
    title: 'Consecrated Product Grid Showcase',
    category: 'Crystals & Products',
    caption: 'Curated display of consecrated energy bracelets, aura salts, and archangel sprays.',
    image: getAssetUrl('/images/products/products-grid-showcase.png')
  }
];

export const SERVICES = SESSIONS_OFFERINGS;
export const RETREATS = [RETREAT_INFO];
