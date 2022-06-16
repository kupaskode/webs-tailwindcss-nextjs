module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'PT-Sans': ['PT Sans', 'sans-serif'],
      },
      colors: {
        'primary-300': '#EF6B94',
        'primary-400': '#FF3F7A',
        primary: '#FF125B',
        secondary: '#e2e8f0',
      },
      backgroundImage: {
        'portfolio-1': "url('/portfolio/1.jpg')",
        'portfolio-2': "url('/portfolio/2.jpg')",
        'portfolio-3': "url('/portfolio/3.png')",
        'portfolio-4': "url('/portfolio/4.jpg')",
        'portfolio-5': "url('/portfolio/5.jpg')",
        'portfolio-6': "url('/portfolio/6.jpg')",
        'portfolio-7': "url('/portfolio/7.jpg')",
      },
      screens: {
        '2xl': '1400px',
      },
      transitionProperty: {
        property: 'all',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      },
      transitionDuration: {
        time: '0.3s',
      },
      animation: {
        radar1: 'radar1 1.2s linear infinite',
        radar2: 'radar2 1.2s linear infinite',
        goyang: 'goyang 1s ease-in-out infinite',
        swipe: 'swipe 1s infinite',
      },
      keyframes: {
        radar1: {
          '50%, 100%': { transform: 'scale(1.7)', opacity: 0 },
        },
        radar2: {
          '75%, 100%': { transform: 'scale(1.5)', opacity: 0 },
        },
        goyang: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        swipe: {
          '0%, 100%': {
            transform: 'translateX(25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      boxShadow: {
        '3xl': '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
      },
    },
  },
  plugins: [],
};
