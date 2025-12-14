/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8', // OpenChat Blue
        secondary: '#0984E3',
        background: '#0b0e14', // Darker background
        card: '#161b22', // Dark card background
        text: '#FFFFFF',
        'text-secondary': '#8b949e',
        accent: '#00B894',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
