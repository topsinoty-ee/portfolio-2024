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
  plugins: [require('daisyui')],
};
