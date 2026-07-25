/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lemon': '#737520
',
        'lemon-dark': '#E5D100',
        'dark': '#0A0A0A',
        'dark-secondary': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
