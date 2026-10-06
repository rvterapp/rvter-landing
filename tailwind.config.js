/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rvter: {
          green: '#2DA933',
          'green-hover': '#25882A',
          'green-light': '#E8F5E9',
          dark: '#121212',
          surface: '#1E1E1E',
          elevated: '#252525',
          border: '#2C2C2C',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 25px rgba(45, 169, 51, 0.25)',
        'glow-green-sm': '0 0 12px rgba(45, 169, 51, 0.2)',
      }
    },
  },
  plugins: [],
}
