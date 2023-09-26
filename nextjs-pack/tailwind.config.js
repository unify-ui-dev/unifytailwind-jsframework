/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/components/**/*.jsx',
    './src/app/**/*.{jsx,tsx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        'display':['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
}
