import type { JSX } from 'react'
import Link from 'next/link'

import { typographyVariants, Logo } from '@terratritium/ui'

const partners = [
  {
    icon: 'pancakeSwap',
    title: 'PancakeSwap',
    href: 'https://pancakeswap.finance',
  },
  {
    icon: 'pancakeSwap',
    title: 'PancakeSwap',
    href: 'https://pancakeswap.finance',
  },
  {
    icon: 'pancakeSwap',
    title: 'PancakeSwap',
    href: 'https://pancakeswap.finance',
  },
  {
    icon: 'terraport',
    title: 'Terraport',
    href: 'https://terraport.finance',
  },
  {
    icon: 'pancakeSwap',
    title: 'PancakeSwap',
    href: 'https://pancakeswap.finance',
  },
  {
    icon: 'pancakeSwap',
    title: 'PancakeSwap',
    href: 'https://pancakeswap.finance',
  },
  {
    icon: 'pancakeSwap',
    title: 'PancakeSwap',
    href: 'https://pancakeswap.finance',
  },
]

export default function HomePage(): JSX.Element {
  return (
    <section className='container'>
      <p
        className={typographyVariants({
          className: 'text-center text-sm font-medium',
          variant: 'muted',
        })}
      >
        Recognized by established companies and fast-growing startups
      </p>

      <div className='mt-4' />

      <div className='relative overflow-hidden'>
        <div className='to-background/0 absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background md:w-56 md:via-background' />

        <div className='to-background/0 absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background md:w-56 md:via-background' />

        <div className='relative h-10 w-full px-8'>
          <div className='animate-infinite-scroll absolute inset-y-0 z-0 flex flex-row items-center justify-start gap-x-12'>
            {partners.map(({ icon, href, title }, index) => {
              const Ikon = Logo[icon as keyof typeof Logo]

              return (
                <Link
                  href={href}
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  rel='nofollow noopener'
                  target='_blank'
                >
                  <Ikon className='h-10' />

                  <span className='sr-only'>{title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
