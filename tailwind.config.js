module.exports = {
  purge: ['./src/**/*.{jsx,ts,tsx}', './public/index.html'],
  // purge: [],
  darkMode: false,
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      transitionDelay: ['hover', 'focus'],
    },
  },
  plugins: [],
}
