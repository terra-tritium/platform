import plugin from 'tailwindcss/plugin'
import { patterns } from './patterns'

export default plugin(
  ({ addUtilities, theme }) => {
    const allowedShades: string[] = theme('patternsShades', [])
    const allowedColors: string[] = theme('patternsColors', [])
    const allowedOpacities = theme('patternsOpacities', ['10', '50', '90'])

    const patterns = theme('patterns', {})
    const colors = theme('colors', {})

    const opacity = Object.fromEntries(
      Object.entries(theme('opacity', {})).filter(
        ([key]) => !allowedOpacities.length || allowedOpacities.includes(key),
      ),
    )

    const flattenColors: string[] = []

    Object.entries(colors).map(([name, color]) => {
      if (typeof color === 'object' && color !== null) {
        Object.entries(color).map(([nestedName, nestedColor]) => {
          if (allowedShades.length && !allowedShades.includes(nestedName)) {
            return
          }

          if (allowedColors.length && !allowedColors.includes(name)) {
            return
          }

          flattenColors[
            // @ts-ignore
            `${name}${nestedName === 'default' ? '' : `-${nestedName}`}`
          ] = nestedColor
        })
      } else {
        // @ts-ignore
        flattenColors[name] = color
      }
    })

    const newUtilities = {}

    Object.entries(patterns).map(([name, pattern]) => {
      Object.entries(flattenColors).map(([colorName, color]) => {
        const coloredPattern = (pattern as string).replace(
          '{{color}}',
          color.toString().replace('#', '%23'),
        )

        // @ts-ignore
        newUtilities[`.pattern-${name}-${colorName}`] = {
          backgroundImage: coloredPattern.replace('{{opacity}}', '1'),
        }

        Object.entries(opacity).map(([opacityName, opacityValue]) => {
          // @ts-ignore
          newUtilities[`.pattern-${name}-${colorName}\\/${opacityName}`] = {
            backgroundImage: coloredPattern.replace(
              '{{opacity}}',
              opacityValue as string,
            ),
          }
        })
      })
    })

    addUtilities(newUtilities)
  },
  {
    theme: {
      patterns,
    },
  },
)
