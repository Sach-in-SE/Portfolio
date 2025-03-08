/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        // Material Dark theme colors
        'material-dark': {
          bg: '#121212',
          surface: '#1E1E1E',
          primary: '#BB86FC',
          secondary: '#03DAC6',
          error: '#CF6679',
          onBg: '#FFFFFF',
          onSurface: '#FFFFFF',
          elevated: '#2D2D2D'
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        'gradient-spin': 'gradient-spin 3s linear infinite',
      },
      boxShadow: {
        glow: '0 0 15px rgba(187, 134, 252, 0.3)',
      },
      keyframes: {
        'gradient-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};