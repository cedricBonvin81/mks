import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FEF3C7',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
        },
        primary: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        secondary: {
          DEFAULT: '#64748B',
          hover: '#475569',
        },
        danger: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        body: '0.01em',
        heading: '-0.02em',
      },
      lineHeight: {
        body: '1.7',
        heading: '1.25',
      },
    },
  },
} satisfies Config