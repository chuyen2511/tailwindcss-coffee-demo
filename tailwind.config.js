/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      colors:{
        'light-coffee':'#C89F94',
        'coffee':{
          50: 'E8D6D0',
          200:'#A25F4B',
          600:'#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fadeIn:{
          from : {opacity:0}, to:{ opacity:1}
        },
      },
      animation: {
        slideDown: 'slideDown .3s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',

      }
    },
  },
  plugins: [],
}

