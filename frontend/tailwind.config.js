/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['M PLUS Rounded 1c'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      animation: {
        fastPulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'aws-squid-ink': '#000210',
        'aws-sea-blue': '#105d9a',
        'aws-sea-blue-hover': '#487ca9',
        'aws-aqua': '#1c8ece',
        'aws-lab': '#9171f6',
        'aws-mist': '#99d0ed',
        'aws-font-color': '#000210',
        'aws-font-color-white': '#ffffff',
        'aws-paper': '#ffffff',
        red: '#e63459',
        'light-red': '#ea6e88',
        yellow: '#f5a623',
        'light-yellow': '#f5c26d',
        'dark-gray': '#222222',
        gray: '#33353f',
        'light-gray': '#7f8086',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
