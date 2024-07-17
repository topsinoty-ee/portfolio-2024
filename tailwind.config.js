/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '640px' },
        md: { min: '641px', max: '1024px' },
        lg: { min: '1025px', max: '1372px' },
        xl: { min: '1373px' },
      },
      perspective: {
        '100': '100px',
        '200': '200px',
        '400': '400px',
        '800': '800px',
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      transitionTimingFunction: {
        'card-flip': 'transform 0.6s',
      },
      boxShadow: {
        'card': '0 4px 8px 0 rgba(0,0,0,0.2)',
      },
    },
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },
  plugins: [
    require('daisyui'), 
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective': {
          perspective: '1000px',
        },
        '.perspective-100': {
          perspective: '100px',
        },
        '.perspective-200': {
          perspective: '200px',
        },
        '.perspective-400': {
          perspective: '400px',
        },
        '.perspective-800': {
          perspective: '800px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
          '-webkit-backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
