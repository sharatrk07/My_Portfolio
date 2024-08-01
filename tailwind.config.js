/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'outline-black': '#000000',
      },
      varients: {
        outline: ['focus'],
      }
    },
  },
  plugins: [],
}

