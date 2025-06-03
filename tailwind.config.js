// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roxoCustom: 'rgba(164, 92, 243, 1)',
      },
      fontFamily: {
        krona: ['"Krona One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
