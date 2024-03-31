import type { ReactNode, JSX } from 'react'

interface PublicLayoutProps {
  children: ReactNode
  params: {
    slug: string
  }
}

export default function SlugLayout({
  children,
  params: { slug },
}: PublicLayoutProps): JSX.Element {
  return (
    <div className='max-w-sm grid mx-auto relative'>
      <div className='flex items-center space-x-4'>
        <span className='w-full h-px bg-gradient-to-r from-transparent to-teal-500 ' />

        <div className='text-lg uppercase font-semibold shrink-0 tracking-wide'>
          {slug}
        </div>

        <span className='w-full h-px bg-gradient-to-l from-transparent to-teal-500 ' />
      </div>

      <div className='mt-8' />

      {children}
    </div>
  )
}
