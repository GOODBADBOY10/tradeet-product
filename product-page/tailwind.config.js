/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '380px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        navyBlue: '#46575A',
        deepBlue: '#12362A',
        lightGray: '#ADBC9F',
        darkGray: '#D9D9D9',
        darkBlack: '#777777',
        deepBlack: '#42684F',
        deepGray: '#78AE8B',
        whiteWhite: '#FFFFFF',
        blackBlack: '#000000',
        blackDark: '#2D2D2D',
        lightGreen: '#25714C'
      }
    }
  },
  plugins: [],
}

