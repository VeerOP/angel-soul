import { DailyTarotCard } from '../types';
import { getAssetUrl } from '../utils/assetUrl';

export const ANGEL_TAROT_CARDS: DailyTarotCard[] = [
  {
    id: 'tarot-0',
    number: '0',
    name: 'The Dreamer',
    archangel: 'Archangel Metatron',
    theme: 'Pure Potential & Sacred Leaps',
    keywords: ['New Chapter', 'Trust', 'Innocence', 'Leap of Faith'],
    element: 'Air / Ether',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-dreamer.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-dreamer.webp'),
    message: 'Embrace your sacred journey with childlike wonder. The universe is inviting you to release overthinking and step boldly onto a brand new path.',
    affirmation: 'I release past limitations and lovingly step forward into my highest divine potential.',
    guidance: 'Today is asking you to trust your intuitive spark. Even if you cannot see the entire staircase, take the first gentle step with open arms.'
  },
  {
    id: 'tarot-1',
    number: 'I',
    name: 'The Magician',
    archangel: 'Archangel Raziel',
    theme: 'Conscious Manifestation & Divine Resources',
    keywords: ['Empowerment', 'Focus', 'Manifestation', 'Alignment'],
    element: 'Air / Fire',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-magician.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-magician.webp'),
    message: 'Everything you need to create positive shifts is already within your energetic reach. Align your conscious thoughts with your heart’s true purpose.',
    affirmation: 'I am a conscious creator of my reality. My energy attracts blessings, clarity, and grace.',
    guidance: 'Channel your energy with singular intention today. Focus on what you wish to bring into existence rather than what is falling away.'
  },
  {
    id: 'tarot-2',
    number: 'II',
    name: 'The High Priestess',
    archangel: 'Archangel Haniel',
    theme: 'Intuitive Wisdom & The Sacred Feminine',
    keywords: ['Inner Knowing', 'Mysticism', 'Subconscious', 'Grace'],
    element: 'Water',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-high-priestess.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-high-priestess.webp'),
    message: 'Look beyond surface appearances. Your soul possesses deep intuitive wisdom that cannot be accessed through logic alone.',
    affirmation: 'I quiet my mind and listen reverently to the quiet voice of my inner guidance.',
    guidance: 'Take moments of solitude today. An intuitive insight or dream is waiting to reveal your next emotional and spiritual breakthrough.'
  },
  {
    id: 'tarot-3',
    number: 'III',
    name: 'The Empress',
    archangel: 'Archangel Gabriel',
    theme: 'Divine Nurturance, Creativity & Abundance',
    keywords: ['Abundance', 'Fertility of Ideas', 'Self-Care', 'Expansion'],
    element: 'Earth',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-empress.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-empress.webp'),
    message: 'You are worthy of receiving kindness, comfort, and rich abundance. Allow yourself to be nurtured just as deeply as you nurture others.',
    affirmation: 'I open my heart to receive universal blessings and hold gentle love for myself.',
    guidance: 'Engage in grounding self-care today. Treat your body and mind as a sacred altar, allowing fresh creative inspirations to take root.'
  },
  {
    id: 'tarot-4',
    number: 'IV',
    name: 'The Emperor',
    archangel: 'Archangel Michael',
    theme: 'Divine Protection, Structure & Boundaries',
    keywords: ['Protection', 'Healthy Boundaries', 'Stability', 'Inner Sovereignty'],
    element: 'Fire',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-emperor.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-emperor.webp'),
    message: 'Archangel Michael surrounds your energy field with a shield of golden light. Reclaim your personal sovereignty and establish healthy boundaries.',
    affirmation: 'I am safe, protected, and grounded. My boundaries honor my soul and vitality.',
    guidance: 'Identify areas where your energy is being drained. Speak your truth with loving firmness and stand secure in your spiritual integrity.'
  },
  {
    id: 'tarot-5',
    number: 'V',
    name: 'The Hierophant',
    archangel: 'Archangel Sandalphon',
    theme: 'Spiritual Wisdom & Answered Prayers',
    keywords: ['Guidance', 'Tradition', 'Belief', 'Higher Wisdom'],
    element: 'Earth',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-hierophant.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-hierophant.webp'),
    message: 'Your prayers and silent requests for clarity have been heard. Seek mentors, sacred knowledge, and soul-level understandings rooted in divine truth.',
    affirmation: 'I welcome sacred wisdom and divine teaching into every dimension of my life.',
    guidance: 'Reflect on the spiritual lessons in your current relationships and life patterns. What is your soul learning to master right now?'
  },
  {
    id: 'tarot-6',
    number: 'VI',
    name: 'The Lovers',
    archangel: 'Archangel Chamuel',
    theme: 'Unconditional Love & Soul Alignment',
    keywords: ['Harmonious Bonds', 'Soul Choices', 'Compassion', 'Heart Healing'],
    element: 'Air',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-lovers.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-lovers.webp'),
    message: 'Open your heart chakra to receive pure loving frequencies. Align your outer decisions with your authentic core values and cherish sacred soul connections.',
    affirmation: 'My heart is healed and radiant. I choose connections and thoughts rooted in pure love.',
    guidance: 'Forgive an old hurt or misunderstanding. Approach every conversation today from compassionate neutrality and mutual respect.'
  },
  {
    id: 'tarot-7',
    number: 'VII',
    name: 'The Chariot',
    archangel: 'Archangel Metatron',
    theme: 'Victorious Momentum & Sacred Focus',
    keywords: ['Will', 'Control', 'Victory', 'Momentum'],
    element: 'Water / Fire',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-chariot.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-chariot.webp'),
    message: 'Conflicting emotions are reconciling into unified momentum. Will, control, and victory are yours when you align your intention with Spirit.',
    affirmation: 'I channel my energy with divine focus. Every obstacle dissolves in the presence of my dedication.',
    guidance: 'Do not let temporary distractions sway you from your soul goals. Keep your eyes on the horizon and celebrate every small victory.'
  },
  {
    id: 'tarot-8',
    number: 'VIII',
    name: 'Strength',
    archangel: 'Archangel Ariel',
    theme: 'Gentle Courage, Patience & Compassion',
    keywords: ['Courage', 'Compassion', 'Control', 'Resilience'],
    element: 'Fire',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/strength.jpg'),
    webpImage: getAssetUrl('/images/tarot/strength.webp'),
    message: 'True spiritual power is gentle, patient, and compassionate. You do not need to fight or force; courage and compassion will carry you through.',
    affirmation: 'I possess infinite inner strength. With love and patience, I overcome every trial.',
    guidance: 'Breathe through any tension today. Respond to agitation or stress with soft words, deep breathwork, and unconditional self-compassion.'
  },
  {
    id: 'tarot-9',
    number: 'IX',
    name: 'The Hermit',
    archangel: 'Archangel Raziel',
    theme: 'Sacred Solitude & The Inner Lantern',
    keywords: ['Soul Search', 'Wisdom', 'Solitude', 'Inner Light'],
    element: 'Earth',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-hermit.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-hermit.webp'),
    message: 'Step back from outer noise and turn your attention within. Soul searching and holy solitude reveal the brilliant lantern of your own inner wisdom.',
    affirmation: 'In the stillness of my soul, divine truth illuminates my path forward.',
    guidance: 'Dedicate at least 10 minutes to silent meditation or reflective journaling today. Disconnect from digital chatter and listen to your spirit.'
  },
  {
    id: 'tarot-10',
    number: 'X',
    name: 'Wheel of Fortune',
    archangel: 'Archangel Jeremiel',
    theme: 'Divine Timing, Destiny & Positive Shifts',
    keywords: ['Change', 'Cycle', 'Destiny', 'Divine Timing'],
    element: 'Fire / Air',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/wheel-of-fortune.jpg'),
    webpImage: getAssetUrl('/images/tarot/wheel-of-fortune.webp'),
    message: 'The cosmic wheel is turning in your favor. A cycle of change and destiny is completing to make room for unexpected divine blessings.',
    affirmation: 'I surrender to divine timing. Every shift is moving me closer to my greatest good.',
    guidance: 'Welcome unexpected changes with an open mind. What seems like an interruption is often the universe clearing a faster path for your growth.'
  },
  {
    id: 'tarot-11',
    number: 'XI',
    name: 'Justice',
    archangel: 'Archangel Raguel',
    theme: 'Truth, Balance & Karmic Harmony',
    keywords: ['Truth', 'Balance', 'Fairness', 'Integrity'],
    element: 'Air',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/justice.jpg'),
    webpImage: getAssetUrl('/images/tarot/justice.webp'),
    message: 'Universal law seeks equilibrium and honesty. Make decisions based on truth, balance, fairness, and long-term energetic integrity.',
    affirmation: 'I live in truth and clarity. My actions are in harmony with highest universal love.',
    guidance: 'Be truthful with yourself about what is working and what is not in your life. Honest recognition is the prerequisite for authentic healing.'
  },
  {
    id: 'tarot-12',
    number: 'XII',
    name: 'Awakening',
    archangel: 'Archangel Chamuel',
    theme: 'Higher Perspective, Surrender & Peaceful Pause',
    keywords: ['Surrender', 'Shift in Viewpoint', 'Patience', 'Deep Release'],
    element: 'Water',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/awakening.jpg'),
    webpImage: getAssetUrl('/images/tarot/awakening.webp'),
    message: 'Release the urge to control the outcome. By pausing and looking at your situation from a higher angle, profound liberation will occur.',
    affirmation: 'I surrender resistance and trust the higher plan unfolding for my soul.',
    guidance: 'If a project or conversation feels blocked, step back. Allow things to breathe. Solutions will arrive effortlessly once you cease forcing.'
  },
  {
    id: 'tarot-13',
    number: 'XIII',
    name: 'Transformation',
    archangel: 'Archangel Azrael',
    theme: 'Sacred Rebirth & Releasing What No Longer Serves',
    keywords: ['Rebirth', 'Closure', 'Metamorphosis', 'Fresh Start'],
    element: 'Water',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/transformation.jpg'),
    webpImage: getAssetUrl('/images/tarot/transformation.webp'),
    message: 'Do not fear endings; they are the fertile soil from which your highest transformation blooms. Release with gratitude and welcome your rebirth.',
    affirmation: 'I courageously release what no longer serves me. I welcome the vibrant new version of myself.',
    guidance: 'Perform a small physical or emotional declutter today. Cleanse your space with intention, honoring what was while stepping into the new.'
  },
  {
    id: 'tarot-14',
    number: 'XIV',
    name: 'Peace & Balance',
    archangel: 'Archangel Zadkiel',
    theme: 'Spiritual Alchemy, Moderation & Forgiveness',
    keywords: ['Harmony', 'Alchemy', 'Grace', 'Forgiveness'],
    element: 'Fire / Water',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/peace-balance.jpg'),
    webpImage: getAssetUrl('/images/tarot/peace-balance.webp'),
    message: 'Archangel Zadkiel extends the violet flame of compassion and emotional balance. Blend patience, diplomacy, and forgiveness into your heart.',
    affirmation: 'I forgive the past, release resentment, and embody tranquil inner harmony.',
    guidance: 'Avoid extremes today. Strive for balanced eating, balanced emotional responses, and gentle words in all your interactions.'
  },
  {
    id: 'tarot-15',
    number: 'XV',
    name: 'Freedom',
    archangel: 'Archangel Jophiel',
    theme: 'Liberation from Limiting Beliefs & Cord Release',
    keywords: ['Cord Cutting', 'Breaking Chains', 'Liberation', 'Self-Awareness'],
    element: 'Earth',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/freedom.jpg'),
    webpImage: getAssetUrl('/images/tarot/freedom.webp'),
    message: 'Illusions of unworthiness or helplessness are dissolving. You are not trapped by your past or other people’s emotional demands.',
    affirmation: 'I sever the energetic cords of fear and codependency. I step into radiant freedom.',
    guidance: 'Notice whenever self-doubt whispers old stories. Affirm your independence and remember how far you have already transformed.'
  },
  {
    id: 'tarot-16',
    number: 'XVI',
    name: 'The Tower of Light',
    archangel: 'Archangel Chamuel',
    theme: 'Sudden Breakthrough & Awakening to Truth',
    keywords: ['Epiphany', 'Breakthrough', 'Clearing Illusions', 'Liberating Shift'],
    element: 'Fire',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-tower-of-light.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-tower-of-light.webp'),
    message: 'A false limitation or shaky foundation is being lovingly removed by Spirit to protect your future. What shatters is only what was holding you back.',
    affirmation: 'I welcome sudden epiphanies. The light of truth rebuilds my life on unbreakable foundations.',
    guidance: 'If unexpected news arrives, recognize the hidden blessing. Trust that divine order is re-routing you to your highest aligned path.'
  },
  {
    id: 'tarot-17',
    number: 'XVII',
    name: 'The Star',
    archangel: 'Archangel Jophiel',
    theme: 'Renewed Hope, Faith & Divine Inspiration',
    keywords: ['Renewed Hope', 'Faith', 'Divine Inspiration', 'Healing'],
    element: 'Air',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-star.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-star.webp'),
    message: 'The storm has cleared and the night sky is filled with guiding stars. Renew your faith; blessings and peaceful healing are pouring down upon you.',
    affirmation: 'My spirit shines with hope and divine light. I trust my sacred journey implicitly.',
    guidance: 'Make a wish with a pure heart today. Visualise your highest dreams already taking form and send gratitude to your guiding angels.'
  },
  {
    id: 'tarot-18',
    number: 'XVIII',
    name: 'The Moon',
    archangel: 'Archangel Haniel',
    theme: 'Subconscious Clearing & Psychic Gifts',
    keywords: ['Illusion', 'Intuition', 'Revelation', 'Dreamwork'],
    element: 'Water',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-moon.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-moon.webp'),
    message: 'Subconscious emotions, memories, and dreams are rising to be acknowledged and gently released. Move through illusions into clear intuitive revelation.',
    affirmation: 'I honor my feelings, release my shadows into the light, and trust my intuition.',
    guidance: 'Pay attention to your dreams tonight and gut feelings during the day. Cleanse with water or aura salts to release lingering emotional residue.'
  },
  {
    id: 'tarot-19',
    number: 'XIX',
    name: 'The Sun',
    archangel: 'Archangel Uriel',
    theme: 'Radiant Joy, Vitality & Triumph',
    keywords: ['Celebration', 'Success', 'Vitality', 'Optimism', 'Warmth'],
    element: 'Fire',
    suit: 'Major Arcana',
    image: getAssetUrl('/images/tarot/the-sun.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-sun.webp'),
    message: 'Step out into the warm sunlight of life! Joy, abundance, health, and loving recognition are surrounding you. Celebrate your radiant soul.',
    affirmation: 'I radiate happiness, good health, and abundant vitality. I am deeply blessed.',
    guidance: 'Spend time in natural daylight today. Share a warm smile, express heartfelt appreciation, and let yourself revel in simple delights.'
  },
  {
    id: 'tarot-20',
    number: 'XX',
    name: 'Renewal',
    archangel: 'Archangel Jeremiel',
    theme: 'Soul Awakening & Conscious Life Review',
    keywords: ['Awakening', 'Calling', 'Renewal', 'Fresh Chapter'],
    element: 'Fire / Ether',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/renewal.jpg'),
    webpImage: getAssetUrl('/images/tarot/renewal.webp'),
    message: 'A higher call is sounding for your soul: Awakening, Calling, Renewal. You are graduating from old karmic lessons into a life of purpose and vision.',
    affirmation: 'I step boldly into my soul purpose. I am renewed, aligned, and awake.',
    guidance: 'Look back at where you were 5 years ago with deep tenderness. Acknowledge your growth and commit to being the author of your future.'
  },
  {
    id: 'tarot-21',
    number: 'XXI',
    name: 'The World',
    archangel: 'Archangel Michael',
    theme: 'Wholeness, Completion & Cosmic Fulfillment',
    keywords: ['Completion', 'Harmony', 'Fulfillment', 'Wholeness'],
    element: 'Earth / Ether',
    suit: 'Major Arcana',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/the-world.jpg'),
    webpImage: getAssetUrl('/images/tarot/the-world.webp'),
    message: 'A significant life cycle has successfully reached completion. You have integrated deep wisdom. Completion, harmony, and fulfillment are yours.',
    affirmation: 'I am whole, fulfilled, and connected to the universal flow of grace.',
    guidance: 'Take time to celebrate this moment of closure. Honor all that you have traversed and prepare to welcome expanded horizons with grace.'
  }
];

export const MINOR_ARCANA_CARDS: DailyTarotCard[] = [
  // --- SUIT OF CUPS (Water / Emotion / Heart / Intuition) ---
  {
    id: 'tarot-six-cups',
    number: '6',
    name: 'Six of Cups',
    archangel: 'Archangel Gabriel',
    theme: 'Sweet Nostalgia, Innocence & Heart Gifts',
    keywords: ['Nostalgia', 'Innocence', 'Gift', 'Inner Child'],
    element: 'Water',
    suit: 'Cups',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/six-of-cups.jpg'),
    webpImage: getAssetUrl('/images/tarot/six-of-cups.webp'),
    message: 'A tender wave of nostalgia, childhood innocence, or a soul gift from the past is gracing your day. Honor your inner child with kindness and gentle joy.',
    affirmation: 'I embrace the sweet innocence of my soul. I receive love and give warmth freely.',
    guidance: 'Reconnect with a joyful memory or do something playful today. Let simple delights heal your heart.'
  },
  {
    id: 'tarot-seven-cups',
    number: '7',
    name: 'Seven of Cups',
    archangel: 'Archangel Gabriel',
    theme: 'Discerning Truth, Sacred Choices & Intuition',
    keywords: ['Illusion', 'Choice', 'Fantasy', 'Discernment'],
    element: 'Water',
    suit: 'Cups',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/seven-of-cups.jpg'),
    webpImage: getAssetUrl('/images/tarot/seven-of-cups.webp'),
    message: 'Many glittering possibilities surround you. Look beyond surface fantasy and choose the path that brings lasting peace to your soul.',
    affirmation: 'I see through illusions with clarity. I choose what genuinely aligns with my soul purpose.',
    guidance: 'Ground your dreams into one tangible, practical step today rather than scattering your focus.'
  },
  {
    id: 'tarot-knight-cups',
    number: 'Knight',
    name: 'Knight of Cups',
    archangel: 'Archangel Gabriel',
    theme: 'Romantic Idealism, Charm & Emotional Messenger',
    keywords: ['Romance', 'Idealism', 'Charm', 'Creative Call'],
    element: 'Water',
    suit: 'Cups',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/knight-of-cups.jpg'),
    webpImage: getAssetUrl('/images/tarot/knight-of-cups.webp'),
    message: 'Follow your poetic heart. An invitation filled with love, creative inspiration, or heart-centered romance is riding into your awareness.',
    affirmation: 'I lead with compassion, empathy, and romantic grace. Love surrounds my every step.',
    guidance: 'Express affection openly. Send an encouraging, uplifting note or message to someone you cherish.'
  },
  {
    id: 'tarot-page-cups',
    number: 'Page',
    name: 'Page of Cups',
    archangel: 'Archangel Gabriel',
    theme: 'Intuitive Whispers & Creative Synchronicity',
    keywords: ['Messenger', 'Intuition', 'Creativity', 'Wonder'],
    element: 'Water',
    suit: 'Cups',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/page-of-cups.jpg'),
    webpImage: getAssetUrl('/images/tarot/page-of-cups.webp'),
    message: 'Expect surprising intuitive insights or creative sparks. Stay receptive to gentle nudges from the angelic realm disguised as delightful synchronicities.',
    affirmation: 'My intuition is alive and vibrant. I greet every creative whisper with joy.',
    guidance: 'Trust unexpected emotional impressions today. An innocent idea holds the key to your next breakthrough.'
  },

  // --- SUIT OF PENTACLES (Earth / Grounding / Mastery / Abundance) ---
  {
    id: 'tarot-three-pentacles',
    number: '3',
    name: 'Three of Pentacles',
    archangel: 'Archangel Uriel',
    theme: 'Sacred Teamwork, Skill & Community Growth',
    keywords: ['Collaboration', 'Skill', 'Growth', 'Mastery'],
    element: 'Earth',
    suit: 'Pentacles',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/three-of-pentacles.jpg'),
    webpImage: getAssetUrl('/images/tarot/three-of-pentacles.webp'),
    message: 'When kindred souls unite in shared purpose, magic manifests. Your talents are recognized, valued, and elevated through harmonious collaboration.',
    affirmation: 'I thrive in supportive teamwork. Together, we build creations of enduring beauty.',
    guidance: 'Welcome feedback from trusted mentors or partners today. Combining strengths multiplies your success.'
  },
  {
    id: 'tarot-four-pentacles',
    number: '4',
    name: 'Four of Pentacles',
    archangel: 'Archangel Uriel',
    theme: 'Security, Healthy Boundaries & Conservation',
    keywords: ['Security', 'Control', 'Conservation', 'Stability'],
    element: 'Earth',
    suit: 'Pentacles',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/four-of-pentacles.jpg'),
    webpImage: getAssetUrl('/images/tarot/four-of-pentacles.webp'),
    message: 'Establish stability and sacred energetic protection. Guard your reserves wisely, while allowing love and abundance to circulate freely.',
    affirmation: 'I am safe, grounded, and secure. I hold healthy boundaries while trusting universal abundance.',
    guidance: 'Conserve your physical vitality and financial resources today. Practice energetic boundary-setting.'
  },
  {
    id: 'tarot-four-pentacles-aff',
    number: 'IV',
    name: 'Four of Pentacles (Fortress of Strength)',
    archangel: 'Archangel Uriel',
    theme: 'I Am My Own Fortress, I Hoard My Strength',
    keywords: ['Fortress', 'Inner Strength', 'Energetic Shield', 'Sacred Sovereignty'],
    element: 'Earth',
    suit: 'Pentacles',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/four-of-pentacles-affirmation.jpg'),
    webpImage: getAssetUrl('/images/tarot/four-of-pentacles-affirmation.webp'),
    message: 'A sacred affirmation card reminding you that your energy is sacred. Fortify your aura, protect your peace, and allow your core strength to regenerate.',
    affirmation: 'I am my own fortress. I hoard my strength for what truly serves my highest good.',
    guidance: 'Take refuge in quiet sacred space today. Replenish your physical stamina in sacred solitude.'
  },
  {
    id: 'tarot-eight-pentacles',
    number: '8',
    name: 'Eight of Pentacles',
    archangel: 'Archangel Uriel',
    theme: 'Dedicated Mastery, Focus & Conscious Craft',
    keywords: ['Skill', 'Focus', 'Mastery', 'Diligence'],
    element: 'Earth',
    suit: 'Pentacles',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/eight-of-pentacles.jpg'),
    webpImage: getAssetUrl('/images/tarot/eight-of-pentacles.webp'),
    message: 'Patience, repetitive practice, and quiet focus are turning your skills into gold. Celebrate the beauty of gradual, steady dedication.',
    affirmation: 'I commit wholeheartedly to my craft. Every hour of focused effort blossoms into mastery.',
    guidance: 'Focus with undivided attention on one meaningful task today. Mastery is found in loving details.'
  },

  // --- SUIT OF SWORDS (Air / Mind / Truth / Clarity) ---
  {
    id: 'tarot-two-swords',
    number: '2',
    name: 'Two of Swords',
    archangel: 'Archangel Michael',
    theme: 'Inner Stillness at the Crossroads & Balance',
    keywords: ['Balance', 'Choices', 'Indecision', 'Peace'],
    element: 'Air',
    suit: 'Swords',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/two-of-swords.jpg'),
    webpImage: getAssetUrl('/images/tarot/two-of-swords.webp'),
    message: 'Quiet the mental turbulence. The answers you seek cannot be forced by logic alone; take a deep breath and listen to the wisdom of your heart.',
    affirmation: 'I center my mind in serene peace. I trust my inner clarity to make the right choice.',
    guidance: 'Pause before making important decisions today. Balance your emotions with clear logic.'
  },
  {
    id: 'tarot-nine-swords',
    number: '9',
    name: 'Nine of Swords',
    archangel: 'Archangel Michael',
    theme: 'Releasing Anxiety, Night Worries & Mind Healing',
    keywords: ['Anxiety Release', 'Fear Clearing', 'Night Healing', 'Peace of Mind'],
    element: 'Air',
    suit: 'Swords',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/nine-of-swords.jpg'),
    webpImage: getAssetUrl('/images/tarot/nine-of-swords.webp'),
    message: 'The shadows that haunt your thoughts are often far larger in imagination than reality. Surrender your worries to the angelic realm for complete healing.',
    affirmation: 'I release anxious thoughts into divine light. My mind is calm, protected, and peaceful.',
    guidance: 'When worrisome thoughts arise, do not fight them. Breathe deeply, ground your feet on the earth, and know that joy awaits you in the morning.'
  },
  {
    id: 'tarot-queen-swords',
    number: 'Queen',
    name: 'Queen of Swords',
    archangel: 'Archangel Michael',
    theme: 'Clear Thinking, Truth & Sacred Boundaries',
    keywords: ['Clear Thinking', 'Truth', 'Boundaries', 'Discernment'],
    element: 'Air',
    suit: 'Swords',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/queen-of-swords.jpg'),
    webpImage: getAssetUrl('/images/tarot/queen-of-swords.webp'),
    message: 'You are blessed with piercing perception and clear vision. Speak your truth with loving grace, and maintain healthy boundaries without apology.',
    affirmation: 'I honor my truth with crystalline clarity. My boundaries are rooted in self-respect.',
    guidance: 'Cut through unnecessary emotional drama today with gentle, factual honesty.'
  },

  // --- SUIT OF WANDS (Fire / Action / Passion / Acceleration) ---
  {
    id: 'tarot-two-wands',
    number: '2',
    name: 'Two of Wands',
    archangel: 'Archangel Raphael',
    theme: 'Visionary Horizons, Planning & Possibility',
    keywords: ['Planning', 'Future', 'Possibility', 'Vision'],
    element: 'Fire',
    suit: 'Wands',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/two-of-wands.jpg'),
    webpImage: getAssetUrl('/images/tarot/two-of-wands.webp'),
    message: 'You stand at the gateway of exciting new horizons. Hold your sacred vision firmly while formulating thoughtful plans for the road ahead.',
    affirmation: 'The world is full of radiant possibilities. I step forward into my destiny with confidence.',
    guidance: 'Map out your next creative steps. Take time to journal your goals for the coming season.'
  },
  {
    id: 'tarot-eight-wands',
    number: '8',
    name: 'Eight of Wands',
    archangel: 'Archangel Raphael',
    theme: 'Swift Action, Progress & Divine Acceleration',
    keywords: ['Swift Action', 'Progress', 'Momentum', 'Alignment'],
    element: 'Fire',
    suit: 'Wands',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/eight-of-wands.jpg'),
    webpImage: getAssetUrl('/images/tarot/eight-of-wands.webp'),
    message: 'Stagnant energy is clearing rapidly. Expect swift communication, fast-moving shifts, and accelerated progress towards your cherished goals.',
    affirmation: 'I welcome positive momentum. Divine blessings rush smoothly into my life.',
    guidance: 'Stay alert and ready to act. The universe is sending synchronistic green lights.'
  },
  {
    id: 'tarot-ten-wands',
    number: '10',
    name: 'Ten of Wands',
    archangel: 'Archangel Raphael',
    theme: 'Releasing Burdens, Duty & Lightening the Load',
    keywords: ['Burden', 'Duty', 'Endurance', 'Liberation'],
    element: 'Fire',
    suit: 'Wands',
    isAuthenticCard: true,
    image: getAssetUrl('/images/tarot/ten-of-wands.jpg'),
    webpImage: getAssetUrl('/images/tarot/ten-of-wands.webp'),
    message: 'You have carried heavy responsibilities with courageous endurance. It is now time to put down the burdens that are not yours to bear.',
    affirmation: 'I lovingly delegate and release all heavy weights. My spirit is light, buoyant, and free.',
    guidance: 'Say no to extra tasks that drain your vitality. Rest and nourish your physical body today.'
  }
];

/**
 * All cards from the client's final images physical deck
 */
export const AUTHENTIC_DECK_CARDS: DailyTarotCard[] = [
  ...ANGEL_TAROT_CARDS.filter(c => c.isAuthenticCard),
  ...MINOR_ARCANA_CARDS
];

/**
 * The complete 36-card Angel Tarot collection
 */
export const ALL_ANGEL_TAROT_CARDS: DailyTarotCard[] = [
  ...ANGEL_TAROT_CARDS,
  ...MINOR_ARCANA_CARDS
];

/**
 * Reduces any positive integer down to a Major Arcana number between 1 and 22
 * using authentic Tarot Numerology digit reduction.
 * 22 / 0 = The Dreamer (The Fool)
 * 1 = The Magician ... 21 = The World
 */
export function reduceToTarotNumber(initialNum: number): { reduced: number; steps: string } {
  let num = Math.abs(initialNum);
  const history: number[] = [num];

  while (num > 22) {
    const digits = String(num).split('').map((d) => parseInt(d, 10));
    num = digits.reduce((sum, d) => sum + d, 0);
    history.push(num);
  }

  const steps = history.join(' → ');
  return { reduced: num === 0 ? 22 : num, steps };
}

export function getCardByArcanaNumber(arcanaNumber: number): DailyTarotCard {
  if (arcanaNumber === 22 || arcanaNumber === 0) {
    return ANGEL_TAROT_CARDS[0]; // The Dreamer (0/XXII)
  }
  if (arcanaNumber >= 1 && arcanaNumber <= 21) {
    return ANGEL_TAROT_CARDS[arcanaNumber];
  }
  return ANGEL_TAROT_CARDS[Math.abs(arcanaNumber) % ANGEL_TAROT_CARDS.length];
}

export interface TarotNumerologyResult {
  dailyCard: DailyTarotCard;
  dailyNumber: number;
  dailyFormula: string;
  soulCard: DailyTarotCard;
  soulNumber: number;
  soulFormula: string;
  formattedToday: string;
}

/**
 * Authentic Tarot & Numerology System:
 * 1. Lifelong Soul / Birth Card:
 *    Calculated from Birth Day + Birth Month + Birth Year reduced to 1–22.
 * 2. Daily Guidance Arcana:
 *    Calculated from Birth Day + Birth Month + Current Calendar Day + Current Calendar Month + Current Calendar Year.
 *    Changes every day at midnight for each individual based on their birth blueprint.
 */
export function calculateBirthAndDailyTarot(
  birthDay: number,
  birthMonth: number,
  birthYear: number,
  targetDate: Date = new Date()
): TarotNumerologyResult {
  const curDay = targetDate.getDate();
  const curMonth = targetDate.getMonth() + 1;
  const curYear = targetDate.getFullYear();

  // 1. Soul Card (Life Path Arcana)
  const soulInitialSum = birthDay + birthMonth + birthYear;
  const { reduced: soulReduced, steps: soulSteps } = reduceToTarotNumber(soulInitialSum);
  const soulCard = getCardByArcanaNumber(soulReduced);
  const soulFormula = `${birthDay} + ${birthMonth} + ${birthYear} = ${soulInitialSum} → ${soulSteps} (${soulCard.number} ${soulCard.name})`;

  // 2. Daily Transit Card (Daily Guidance for Today)
  const birthVibration = birthDay + birthMonth;
  const dayVibration = curDay + curMonth + curYear;
  const dailyInitialSum = birthVibration + dayVibration;
  const { reduced: dailyReduced, steps: dailySteps } = reduceToTarotNumber(dailyInitialSum);
  const dailyCard = getCardByArcanaNumber(dailyReduced);
  const dailyFormula = `DOB (${birthDay}+${birthMonth}) + Today (${curDay}+${curMonth}+${curYear}) = ${dailyInitialSum} → ${dailySteps} (${dailyCard.number} ${dailyCard.name})`;

  const formattedToday = targetDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return {
    dailyCard,
    dailyNumber: dailyReduced,
    dailyFormula,
    soulCard,
    soulNumber: soulReduced,
    soulFormula,
    formattedToday
  };
}

/**
 * Backwards compatible getter using authentic numerology
 */
export function getDailyTarotCard(
  birthDay: number,
  birthMonth: number,
  birthYear: number,
  targetDate: Date = new Date()
): { card: DailyTarotCard; cardIndex: number; formattedToday: string; result: TarotNumerologyResult } {
  const result = calculateBirthAndDailyTarot(birthDay, birthMonth, birthYear, targetDate);
  const cardIndex = ANGEL_TAROT_CARDS.findIndex((c) => c.id === result.dailyCard.id);

  return {
    card: result.dailyCard,
    cardIndex: cardIndex >= 0 ? cardIndex : 0,
    formattedToday: result.formattedToday,
    result
  };
}
