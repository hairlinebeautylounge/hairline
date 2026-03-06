/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f0f13',
        'brand-light': '#f5f5f7',
        'brand-accent': '#C07941', // Refined gold
        'brand-gold': {
          DEFAULT: '#C07941',
          light: '#d4a373',
          dark: '#9d6435',
        },
        'brand-charcoal': '#1a1a21',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'], 
        'serif': ['Playfair Display', 'serif'], 
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}