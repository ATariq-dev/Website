/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Ottoman-inspired color palette
        'ottoman-gold': '#D4AF37',
        'ottoman-deep-gold': '#B8860B',
        'ottoman-blue': '#1E3A8A',
        'ottoman-deep-blue': '#1E2F5C',
        'ottoman-burgundy': '#800020',
        'ottoman-cream': '#FDF6E3',
        'ottoman-charcoal': '#2C2C2C',
        'ottoman-sage': '#9CAF88',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};