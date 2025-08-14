/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sage-green': '#a9b7ad',
        'deep-sage': '#7e8f86',
        'charcoal': '#1f2421',
        'off-white': '#f7f7f5',
        'leaf-gold': '#c4b07a',
      },
    },
  },
  plugins: [],
};
