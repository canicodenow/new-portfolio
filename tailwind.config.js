const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: colors.teal,
      green: colors.green,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {
      rotate: ['focus'],
      fontSize: ['hover', 'focus'],
      position: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
