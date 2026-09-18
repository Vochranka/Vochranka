/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F5',
          100: '#E6ECE8',
          200: '#CFDCD3',
          300: '#AEC6B6',
          400: '#87AB94',
          500: '#648E73',
          600: '#4E725C',
          700: '#3F5B4A',
          800: '#344A3D',
          900: '#2C3E34',
          950: '#18231D',
        },
        anthracite: {
          50: '#F6F7F7',
          100: '#EBEDEE',
          200: '#D7DCDF',
          300: '#B8C1C6',
          400: '#8FA0A8',
          500: '#6F8089',
          600: '#586770',
          700: '#48545B',
          800: '#2D3438',
          900: '#1A1E21',
          950: '#111315',
        },
        cream: {
          50: '#FDFCFB',
          100: '#F9F8F6',
          200: '#F3F0EC',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(28, 35, 30, 0.05), 0 1px 4px -1px rgba(28, 35, 30, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(28, 35, 30, 0.07), 0 4px 12px -2px rgba(28, 35, 30, 0.04)',
        'soft-xl': '0 20px 40px -8px rgba(28, 35, 30, 0.08), 0 12px 24px -4px rgba(28, 35, 30, 0.04)',
        'glow-sage': '0 0 25px -5px rgba(100, 142, 115, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'ripple': 'ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
