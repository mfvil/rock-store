module.exports = {
  jit: false,
  purge: ['./src/components/**/*.{js,ts,tsx}', './pages/**/*.{js,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: '#ECE6C2',
        cyan: '#73BDA8',
        lightBrown: '#D2A24C',
        darkRed: '#CC6B49',
        brown: '#6F5643',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
