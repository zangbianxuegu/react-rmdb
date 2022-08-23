/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
    },
    extend: {
      height: {
        128: '40rem'
      }
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
    minHeight: {
      128: '40rem'
    }
  },
  plugins: [],
}
