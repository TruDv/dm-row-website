/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lemon': '#737520',
        'lemon-dark': '#5A5D1A',
        'lemon-light': '#8A8D2A',
        'primary': '#FFFFFF',
        'secondary': '#F5F5F5',
        'dark': '#1A1A1A',
        'gray-light': '#E5E5E5',
      },
    },
  },
  plugins: [],
}