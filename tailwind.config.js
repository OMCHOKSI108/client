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
          DEFAULT: '#00ffff', // Neon Sky Blue
          light: '#80ffff',
          dark: '#00cccc',
        },
        secondary: {
          DEFAULT: '#7700ff', // Electric Purple
          light: '#9933ff',
          dark: '#5500cc',
        },
        accent: {
          DEFAULT: '#ffff00', // Neon Volcanic Yellow
          light: '#ffff66',
          dark: '#cccc00',
        },
        dark: {
          DEFAULT: '#0f172a', // Slate dark
          lighter: '#1e293b',
          darker: '#020617',
        },
        light: {
          DEFAULT: '#f8fafc',
          darker: '#f1f5f9',
          darkest: '#e2e8f0',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}