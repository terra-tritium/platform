import type { JSX } from 'react'
import Image from 'next/image'

import { Stars } from '@/components'

export default function Orbit(): JSX.Element {
  return (
    <>
      <div className='max-md:hidden bg-radial-gradient absolute aspect-video -top-10 w-full blur-3xl opacity-40 mix-blend-hard-light max-lg:hidden -z-10' />

      <Image
        alt='Orbit'
        className='absolute max-md:hidden top-40 left-1/2 -translate-x-1/2 -z-20'
        src='/static/img/orbit.svg'
        width={2544}
        height={896}
      />

      <div className='relative max-md:hidden left-1/2 w-full max-w-7xl -translate-x-1/2 -z-10'>
        <Stars />
      </div>
    </>
  )
}
