import { cva } from 'class-variance-authority'

const spacingVariants = cva('', {
  variants: {
    variant: {
      section: 'p-4 lg:p-8 xl:p-16',
    },
  },
})

export { spacingVariants }
