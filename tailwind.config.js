/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: '#0ea5e9',
        dark: {
          DEFAULT: '#121212',
          lighter: '#1a1a1a',
          darker: '#0A0A0A',
        },
        gray: {
          400: '#9CA3AF',
          700: '#374151',
          800: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
} 