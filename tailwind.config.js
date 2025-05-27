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
          DEFAULT: '#3b82f6', // Professional Blue
          light: '#60a5fa',
          dark: '#2563eb',
        },
        secondary: {
          DEFAULT: '#6366f1', // Indigo
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent: {
          DEFAULT: '#0ea5e9', // Sky Blue
          light: '#38bdf8',
          dark: '#0284c7',
        },
        highlight: {
          DEFAULT: '#8b5cf6', // Purple
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        dark: {
          DEFAULT: '#1e293b', // Slate
          lighter: '#334155',
          darker: '#0f172a',
        },
        light: {
          DEFAULT: '#f8fafc', // Light background
          darker: '#f1f5f9',
          darkest: '#e2e8f0',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #3b82f6, #6366f1)',
        'gradient-accent': 'linear-gradient(45deg, #0ea5e9, #8b5cf6)',
        'gradient-dark': 'linear-gradient(to bottom right, #1e293b, #334155)',
      },
      backgroundColor: {
        page: '#ffffff',
        section: '#f8fafc',
        card: '#ffffff',
        accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
}