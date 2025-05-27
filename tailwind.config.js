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
          DEFAULT: '#ffff00', // Bright Yellow
          light: '#ffff66',
          dark: '#cccc00',
        },
        secondary: {
          DEFAULT: '#ff0000', // Bright Red
          light: '#ff4d4d',
          dark: '#cc0000',
        },
        accent: {
          DEFAULT: '#ff3300', // Orange-Red
          light: '#ff704d',
          dark: '#cc2900',
        },
        highlight: {
          DEFAULT: '#ff0066', // Pink-Red
          light: '#ff4d94',
          dark: '#cc0052',
        },
        dark: {
          DEFAULT: '#1a1a00', // Dark Yellow
          lighter: '#333300',
          darker: '#0d0d00',
        },
        light: {
          DEFAULT: '#ffffcc', // Light Yellow
          darker: '#ffff99',
          darkest: '#ffff66',
        },
        gray: {
          50: '#fffff0',
          100: '#ffffe6',
          200: '#ffffcc',
          300: '#ffff99',
          400: '#ffff66',
          500: '#ffff33',
          600: '#ffff00',
          700: '#cccc00',
          800: '#999900',
          900: '#666600',
        },
      },
      backgroundImage: {},
      backgroundColor: {
        page: '#ffff00',
        section: '#ffff00',
        card: '#ffff00',
        accent: '#ff0000',
      },
    },
  },
  plugins: [],
}