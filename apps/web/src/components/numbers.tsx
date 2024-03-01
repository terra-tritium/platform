import { spacingVariants } from '@terratritium/ui'
import type { JSX } from 'react'

export const Numbers = (): JSX.Element => {
  return (
    <div className='border-t'>
      <div className='container border-x'>
        <div className={spacingVariants({ variant: 'section' })}>
          <h2>
            <span
              className='block text-9xl font-bold tracking-tighter leading-none text-transparent uppercase'
              style={{ WebkitTextStroke: '1px white' }}
            >
              15+
            </span>

            <span className='block relative py-2 -mt-10 text-3xl bg-background'>
              planets available
            </span>
          </h2>

          <h2>
            <span
              className='block text-9xl font-bold tracking-tighter leading-none text-transparent uppercase'
              style={{ WebkitTextStroke: '1px white' }}
            >
              30+
            </span>

            <span className='block relative py-2 -mt-10 text-3xl bg-background'>
              spaceships
            </span>
          </h2>

          <h2>
            <span
              className='block text-9xl font-bold tracking-tighter leading-none text-transparent uppercase'
              style={{ WebkitTextStroke: '1px white' }}
            >
              80M+
            </span>

            <span className='block relative py-2 -mt-10 text-3xl bg-background'>
              downloads of all-time
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}
