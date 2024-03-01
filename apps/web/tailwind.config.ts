import tailwindPreset, { type Config } from '@terratritium/ui/tailwind.config'
import typographyPlugin from '@tailwindcss/typography'
import patternsPlugin from '@terratritium/patterns'

export default {
  presets: [tailwindPreset],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    '../../packages/ui/src/components/ui/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        stars: "url('/assets/img/stars.svg')",
        meteor: 'linear-gradient(90deg, #fff, hsla(0,0%,100%,0))',
      },
      boxShadow: {
        meteor: '0 0 15px 3px #fff',
      },
      gridTemplateColumns: {
        header: '1fr 80px 1fr',
      },
      keyframes: {
        meteor: {
          '0%': {
            opacity: '0',
            marginTop: '-300px',
            marginRight: '-300px',
          },
          '1%': {
            opacity: '1',
          },
          '12%': {
            opacity: '0',
          },
          '15%': {
            marginTop: '300px',
            marginLeft: '-600px',
            opacity: '0',
          },
          to: {
            opacity: '0',
          },
        },
      },
      skew: {
        '14': '14deg',
      },
    },
  },
  plugins: [typographyPlugin, patternsPlugin],
} satisfies Config
