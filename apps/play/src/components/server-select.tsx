import type { JSX } from 'react'
import Link from 'next/link'

import { typographyVariants } from '@terratritium/ui'

import { useGetServers } from '@/hooks/api/use-server'

export default function ServerSelect(): JSX.Element {
  const { data: servers, isLoading: isServersLoading } = useGetServers()

  return (
    <div className='max-w-sm grid mx-auto relative'>
      <h1 className='text-2xl font-medium'>Select your server</h1>

      <div className='mt-2' />

      <p className={typographyVariants({ variant: 'muted' })}>
        Which server do you want to play?
      </p>

      <div className='mt-8' />

      <nav className='grid border rounded-lg py-2 leading-10 bg-background'>
        {isServersLoading ? (
          <span className='px-4'>Loading...</span>
        ) : (
          servers?.map(({ id, slug, name, default: def }) => (
            <Link
              className='flex justify-between items-center px-4 hover:bg-white/5'
              href={`/${slug}`}
              key={id}
            >
              <span className='font-medium'>{name}</span>

              {def ? (
                <span
                  className={typographyVariants({
                    className: 'text-sm',
                    variant: 'muted',
                  })}
                >
                  Default
                </span>
              ) : (
                ''
              )}
            </Link>
          ))
        )}
      </nav>
    </div>
  )
}
