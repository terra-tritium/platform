import type { Metadata } from 'next'
import type { ReactNode, JSX } from 'react'

import { TailwindIndicator } from '@terratritium/ui'

import { fontSans } from '@/lib/fonts'
import MouseGradient from '@/components/mouse-gradient'
import '@/styles/globals.css'

import Providers from './providers'

export const metadata: Metadata = {
  title: 'Terra Tritium',
  description: 'TBD',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.className}>
        <Providers>{children}</Providers>

        <MouseGradient />
        <TailwindIndicator env={process.env.NODE_ENV} />
      </body>
    </html>
  )
}
