/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#7b46ff',
          600: '#9167ff',
        }
      }
    },
  },
  plugins: [],
}