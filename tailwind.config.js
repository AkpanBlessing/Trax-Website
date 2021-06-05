module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {
      screens: {
      mm: '990px',
    },
    colors: {
        primary: '#065480',
        secondary: {
          100: '#086DA6',
          200: '#086DA8'
        }
      },
      fontFamily: {
      nunito: ['Nunito']
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
