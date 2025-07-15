 /** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      fontFamily: {
      'poppines': ['Poppons', 'serif'],
      'volkhov': ['volkhov', 'serif']
    },
    borderRadius: {
      '10': '10px',
    },
     extend: {},
     spacing: {
        'myContainer': '1160px',
      },

      colors: {
        'hC': '#DF6951',
        'pC': '#5E6282',
        'bC': '#F2994A',
        'bCH': '#EA580C',
        'tC': '#FFFFFF',
        'tC2': '#686D77',
        'tC3': '#14183E',
        'tC4': '#080809',
        'tC5': '#84829A',
        'cC': '#DF6951',
        'cCh': '#d64022',
        'iCC': '#F5F5F5',
      }
   },
   plugins: [],
 }