/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        divine: {
          white: '#FFFFFF',
          pearl: '#FAF9FD',
          ivory: '#FDFBF7',
          mist: '#F3EEFF',
          cloud: '#EDE6FB',
          cream: '#FBF8F2',
          card: '#FFFFFF',
          gold: '#D4AF37',
          lavender: '#A855F7',
          darkPill: '#111111',
        },
        mystic: {
          dark: '#160B28',         // Rich midnight violet
          darkSurface: '#1E0E38',  // Elevated Mystic Twilight
          darkCard: '#261247',     // Elevated Amethyst Card
          darkCardHover: '#32185C',// Hover Amethyst
          light: '#FFFFFF',        // Luminous Crisp White
          lightSurface: '#F5F0FF', // Delicate Lavender Mist
          lightCard: '#FFFFFF',    // Frosted Amethyst White
        },
        lavender: {
          50: '#FAF7FF',
          100: '#F3EBFF',
          200: '#E9DCFE',
          300: '#DDD0FC',
          400: '#C7AEFB',
          500: '#AD82F7',
          600: '#945BF0',
          700: '#7B35E5',
          800: '#6422C4',
          900: '#4D149D',
          950: '#2C0661',
        },
        gold: {
          50: '#FDFBF2',
          100: '#FBF5DF',
          200: '#F5E6B5',
          300: '#EED38A',
          400: '#E5C363',
          500: '#D4AF37',          // Brushed Champagne Gold
          600: '#B89228',
          700: '#94721D',
          800: '#6B5014',
          900: '#3D2C0A',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        serif: ['"Montserrat"', 'sans-serif'],
        cinzel: ['"Montserrat"', 'sans-serif'],
        playfair: ['"Montserrat"', 'sans-serif'],
        cormorant: ['"Montserrat"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'divine-card': '0 10px 30px -5px rgba(176, 108, 247, 0.12), 0 4px 12px -2px rgba(212, 175, 55, 0.08)',
        'divine-glow': '0 0 35px 0px rgba(212, 175, 55, 0.2), 0 0 50px 10px rgba(200, 155, 252, 0.22)',
        'mystic-glow': '0 0 35px -5px rgba(176, 108, 247, 0.4)',
        'mystic-lavender': '0 0 40px -8px rgba(200, 155, 252, 0.45)',
        'mystic-subtle': '0 0 25px -5px rgba(176, 108, 247, 0.22)',
        'gold-subtle': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'luxury-card': '0 10px 30px -10px rgba(176, 108, 247, 0.1)',
        'luxury-card-dark': '0 15px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px -5px rgba(176, 108, 247, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        auraFloat: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(15px, -15px) scale(1.1)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'aura-float': 'auraFloat 12s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
      }
    },
  },
  plugins: [],
}
