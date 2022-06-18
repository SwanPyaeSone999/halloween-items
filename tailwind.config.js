const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    './src/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'brand' : '#F44D1F',
      },
      backgroundImage: {
        'halloween-dark': "linear-gradient(136deg, hsl(104, 28%, 35%) 0%, hsl(58, 28%, 35%) 100%)",
        'halloween-light':"linear-gradient(90deg, hsl(104, 28%, 40%) 0%, hsl(58, 28%, 40%) 100%)",
       },
      fontFamily:{
        sans: ['Poppins',...defaultTheme.fontFamily.sans],
      }, 
    },
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'group-hover']
    },
  },
  plugins: [],
}
