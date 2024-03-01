import type { JSX } from 'react'

import { typographyVariants } from './typography'

type EmptyStateProps = {
  emoji?: string
  title: string
  description: string
}

export const EmptyState = ({
  emoji = '😃',
  title,
  description,
}: EmptyStateProps): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center p-4 space-y-4 h-48 rounded-xl border border-dashed lg:px-5 lg:h-56'>
      <div className='flex justify-center items-center w-20 text-4xl rounded-lg bg-secondary aspect-square'>
        {emoji}
      </div>

      <div className='grid space-y-1 text-center'>
        <h1 className='font-medium'>{title}</h1>

        {description ? (
          <p
            className={typographyVariants({
              className: 'text-xs',
              variant: 'muted',
            })}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
