/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Finlandica: ['Finlandica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}