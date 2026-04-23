/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          black: '#0A0A0A',
          gold: '#D4AF37',
          gray: '#1F1F1F',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}