/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: '#FFF',
      amber: {
        900: '#473404',
      },
      gray: {
        900: '#191816',
        700: '#24221F',
        500: '#868686',
        300: '#AFB6C2',
        200: '#A9AFB9',
      },
      orange: {
        900: '#FFC632',
        500: '#FFDE88',
        300: '#D4CCB6',
      },
    },
    fontFamily: {
      Poppins: 'Poppins',
      Roboto: 'Roboto',
    },
    extend: {},
  },
  plugins: [],
};
