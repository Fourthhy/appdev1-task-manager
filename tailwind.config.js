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
      },
      textShadow: {
        'green-glow': '0 0 10px rgba(76, 175, 80, 0.7)', // Soft green glow
        'red-glow': '0 0 10px rgba(244, 67, 54, 0.7)', // Soft red glow
      },
    },
  },
  plugins: [],
}