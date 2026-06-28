/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        luxury: {
          gold: '#C5A880',
          dark: '#1A1A1A',
          cream: '#FAFAFA',
          muted: '#707070'
        }
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}