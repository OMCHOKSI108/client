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
        primary: {
          DEFAULT: '#00ffdd', // Neon Cyan
          light: '#80fff0',
          dark: '#00ccb1',
        },
        secondary: {
          DEFAULT: '#ff0099', // Hot Pink
          light: '#ff4db8',
          dark: '#cc007a',
        },
        accent: {
          DEFAULT: '#ffff00', // Neon Yellow
          light: '#ffff66',
          dark: '#cccc00',
        },
        highlight: {
          DEFAULT: '#7700ff', // Electric Purple
          light: '#9933ff',
          dark: '#5500cc',
        },
        dark: {
          DEFAULT: '#0a0a1f', // Deep Space Blue
          lighter: '#1a1a3f',
          darker: '#05050f',
        },
        light: {
          DEFAULT: '#f0f0ff', // Cool White
          darker: '#e6e6ff',
          darkest: '#ccccff',
        },
        gray: {
          50: '#f8f8ff',
          100: '#f0f0ff',
          200: '#e0e0ff',
          300: '#c0c0ff',
          400: '#9090ff',
          500: '#6060ff',
          600: '#4040cc',
          700: '#303099',
          800: '#202066',
          900: '#101033',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #00ffdd, #7700ff)',
        'gradient-accent': 'linear-gradient(45deg, #ff0099, #ffff00)',
        'gradient-dark': 'linear-gradient(to bottom right, #0a0a1f, #1a1a3f)',
      },
    },
  },
  plugins: [],
}