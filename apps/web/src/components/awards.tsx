import { Detail, spacingVariants, typographyVariants } from '@terratritium/ui'
import type { JSX } from 'react'

const awards = [
  {
    title: 'Independent Games Festival',
    subtitle: 'Finalist',
  },
  {
    title: 'Eastern Europe Game',
    subtitle: 'Hiden Gem 2019',
  },
  {
    title: 'Game Industry News',
    subtitle: 'Silver Medal 2018',
  },
  {
    title: 'Game Of The Year',
    subtitle: 'Best Story 2016',
  },
  {
    title: 'Games For Change',
    subtitle: 'Best Game',
  },
  {
    title: 'Gameplay Design Award',
    subtitle: 'Winner',
  },
  {
    title: 'Best Of E3 2023',
    subtitle: 'Finalist',
  },
]

export const Awards = (): JSX.Element => {
  return (
    <div className='border-t'>
      <div
        className={spacingVariants({
          className: 'container border-x',
          variant: 'section',
        })}
      >
        <h2 className='font-bold tracking-tighter leading-none uppercase'>
          <span className='text-6xl'>Our</span>{' '}
          <span
            className='block text-7xl text-transparent'
            style={{ WebkitTextStroke: '1px white' }}
          >
            awards
          </span>
        </h2>

        <div className='pt-16' />

        <div className='grid grid-cols-4 gap-4 lg:gap-8'>
          {awards.map(({ title, subtitle }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
            <div className='flex items-center space-x-3 group' key={index}>
              <Detail.leavesLeft className='h-16 transition-colors duration-700 group-hover:fill-green-500' />

              <div className='text-center max-w-32'>
                <h3 className='text-lg font-semibold leading-tight'>{title}</h3>

                <div className='mt-1' />

                <p
                  className={typographyVariants({
                    className:
                      'group-hover:text-green-500 duration-700 transition-colors',
                    variant: 'muted',
                  })}
                >
                  {subtitle}
                </p>
              </div>

              <Detail.leavesRight className='h-16 transition-colors duration-700 group-hover:fill-green-500' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
