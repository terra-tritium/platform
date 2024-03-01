import type { Metadata } from 'next'
import type { ReactNode, JSX } from 'react'

import { TailwindIndicator } from '@terratritium/ui'

import '@/styles/globals.css'
import { fontSans } from '@/lib/fonts'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Terra Tritium',
    template: '%s — Terra Tritium',
  },
  description:
    'Experience the future of MMO gaming in this exciting WEB3 strategy game. Lead your civilization through galaxies, mining and earning real crypto assets.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.className}>
        <Providers>{children}</Providers>

        <TailwindIndicator env={process.env.NODE_ENV} />
      </body>
    </html>
  )
}
