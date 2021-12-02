module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
  },
  variants: {
    extend: {
      transitionDelay: ['hover', 'focus'],
    },
  },
  plugins: [],
}
