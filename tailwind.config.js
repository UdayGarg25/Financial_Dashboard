/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2c3e50',
        success: '#27ae60',
        danger: '#e74c3c',
        warning: '#f39c12',
      },
    },
  },
  plugins: [],
}
