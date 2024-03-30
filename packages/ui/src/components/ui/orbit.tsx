import type { JSX } from 'react'

import { cn } from '../../lib/utils'
import Stars from './stars'
import { Sprite } from '.'

type OrbitProps = {
  className?: string
}

export default function Orbit({ className }: OrbitProps): JSX.Element {
  return (
    <div className={cn('relative', className)}>
      <div className='max-md:hidden bg-radial-gradient absolute aspect-video -top-10 w-full blur-3xl opacity-40 mix-blend-hard-light max-lg:hidden -z-10' />

      <Sprite.orbit className='absolute max-md:hidden w-full top-40 left-1/2 -translate-x-1/2 -z-20' />

      <div className='relative max-md:hidden left-1/2 w-full max-w-7xl -translate-x-1/2 -z-10'>
        <Stars />
      </div>
    </div>
  )
}
