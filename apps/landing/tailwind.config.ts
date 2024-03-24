import tailwindPreset, { type Config } from '@terratritium/ui/tailwind.config'

export default {
  presets: [tailwindPreset],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    '../../packages/ui/src/components/ui/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#F1F1F9',
          100: '#E0DFF1',
          200: '#BEBBE2',
          300: '#9C97D3',
          400: '#7A74C3',
          500: '#5850B4',
          600: '#463F92',
          700: '#352F6F',
          800: '#24204B',
          900: '#131127',
          950: '#0A0915',
        },
        teal: {
          50: '#E5FFFF',
          100: '#CCFFFF',
          200: '#9EFFFF',
          300: '#6BFFFF',
          400: '#38FFFF',
          500: '#07FFFF',
          600: '#00D1D1',
          700: '#009E9E',
          800: '#006B6B',
          900: '#003333',
          950: '#001919',
        },
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(38.96% 17.2% at 53.66% 53.67%,rgba(202,131,253,.5) 0%,rgba(202,131,253,0) 100%),radial-gradient(101.78% 31.2% at 39.5% 60.15%,rgba(255,127,62,.3) 0%,rgba(255,113,41,0) 33%)',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
      },
    },
  },
} satisfies Config
