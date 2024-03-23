import type { JSX } from 'react'

import { typographyVariants } from '@terratritium/ui'

import tailwindConfig from '../../../../../tailwind.config'

export default function DocsPage(): JSX.Element {
  const { indigo, teal } = tailwindConfig.theme.extend.colors

  const palette = [
    {
      name: 'Indigo',
      colors: indigo,
    },
    {
      name: 'Teal',
      colors: teal,
    },
  ]

  return (
    <div className='grid space-y-4 text-center'>
      {palette.map(({ name, colors }, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
        <div key={index}>
          <h2 className='font-medium'>{name}</h2>

          <div className='mt-2' />

          <div className='grid grid-cols-6 xl:grid-cols-11 gap-x-1.5 text-sm max-w-xl mx-auto'>
            {Object.entries(colors).map(([key, value]) => (
              <div className='flex flex-col space-y-1.5 items-center' key={key}>
                <span>{key}</span>

                <div
                  className='w-12 h-24 rounded-full border'
                  style={{ backgroundColor: value }}
                />

                <span
                  className={typographyVariants({
                    className: 'text-[11px] font-medium',
                    variant: 'muted',
                  })}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
