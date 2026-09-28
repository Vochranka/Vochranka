/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FD',
          300: '#7CC5FB',
          400: '#38A5F8',
          500: '#0F87E6',
          600: '#026AC2',
          700: '#03549E',
          800: '#074882',
          900: '#0C3D6D',
          950: '#072749',
        },
        navy: {
          50: '#F4F7FB',
          100: '#E5EDF6',
          200: '#CEDBEE',
          300: '#A7C1E1',
          400: '#7AA0D0',
          500: '#5680BE',
          600: '#3F64A5',
          700: '#2E4981',
          800: '#1D305C',
          900: '#0F1A38',
          950: '#080E21',
        },
        anthracite: {
          50: '#F6F7F9',
          100: '#EBEEF2',
          200: '#D7DDE5',
          300: '#B8C2CF',
          400: '#8FA1B4',
          500: '#6F8299',
          600: '#586A7F',
          700: '#485668',
          800: '#1E293B',
          900: '#0F172A',
          950: '#070D1A',
        },
      },
      fontFamily: {
        sans: ['"Cantarell"', 'system-ui', 'sans-serif'],
        display: ['"Cantarell"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 4px -1px rgba(15, 23, 42, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(15, 23, 42, 0.07), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'soft-xl': '0 20px 40px -8px rgba(15, 23, 42, 0.08), 0 12px 24px -4px rgba(15, 23, 42, 0.04)',
        'glow-blue': '0 0 25px -5px rgba(2, 106, 194, 0.35)',
        'glow-sky': '0 0 35px -5px rgba(56, 165, 248, 0.35)',
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
