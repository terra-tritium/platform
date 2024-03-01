import type { JSX } from 'react'
import Image from 'next/image'

import { cn } from '@terratritium/ui'

type MeteorProps = {
  className?: string
  stardust?: {
    className?: string
  }
}

export const Meteor = ({ className, stardust }: MeteorProps): JSX.Element => {
  return (
    <div
      className={cn(
        'container overflow-hidden absolute top-0 left-1/2 z-0 h-full opacity-50 -translate-x-1/2 pointer-events-none',
        className,
      )}
    >
      <div className='relative h-[1000px]'>
        <Image
          alt='Stardust'
          className={stardust?.className}
          fill={true}
          src='/assets/img/stardust.svg'
        />
      </div>

      <div
        className='absolute w-80 h-px -rotate-45 bg-meteor before:absolute before:z-0 before:w-1 before:h-1.5 before:shadow-meteor before:-mt-0.5 before:rounded-[50%] opacity-0 animate-[meteor_9s_linear_infinite] left-[30%] top-[600px] before:bg-white/70'
        style={{ animationDelay: '9s' }}
      />

      <div
        className='left-2/4 opacity-0 absolute w-80 h-px -rotate-45 bg-meteor before:absolute before:z-0 before:w-1 before:h-1.5 before:shadow-meteor before:-mt-0.5 before:rounded-[50%] animate-[meteor_7s_linear_infinite] top-[500px] before:bg-white/70'
        style={{ animationDelay: '5s' }}
      />

      <div
        className='absolute w-80 h-px -rotate-45 bg-meteor before:absolute before:z-0 before:w-1 before:h-1.5 before:shadow-meteor before:-mt-0.5 before:rounded-[50%] opacity-0 animate-[meteor_8s_linear_infinite] left-[60%] top-[720px] before:bg-white/70'
        style={{ animationDelay: '12s' }}
      />

      <div
        className='absolute w-80 h-px -rotate-45 bg-meteor before:absolute before:z-0 before:w-1 before:h-1.5 before:shadow-meteor before:-mt-0.5 before:rounded-[50%] opacity-0 animate-[meteor_6s_linear_infinite] left-[80%] top-[1000px] before:bg-white/70'
        style={{ animationDelay: '20s' }}
      />
    </div>
  )
}
