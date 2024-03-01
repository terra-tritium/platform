import { cva } from 'class-variance-authority'

const typographyVariants = cva('', {
  variants: {
    variant: {
      hero: 'text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight',
      big: 'text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight',
      h1: 'text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-tight',
      h2: 'text-xl font-semibold leading-tight sm:text-2xl sm:leading-tight lg:text-3xl lg:leading-tight',
      h3: 'text-lg font-semibold leading-tight sm:text-xl sm:leading-tight lg:text-2xl lg:leading-tight',
      h4: 'text-base font-medium leading-tight sm:text-lg sm:leading-tight lg:text-xl lg:leading-tight',
      muted: 'text-muted-foreground',
    },
  },
})

export { typographyVariants }
