import type { ReactNode, JSX } from 'react'

import { Header, Footer } from '@/components'

interface LobbyLayoutProps {
  children: ReactNode
}

export default function LobbyLayout({
  children,
}: LobbyLayoutProps): JSX.Element {
  return (
    <main className='flex flex-col h-screen'>
      <Header />

      <div className='my-12 md:my-24 z-10 flex-1'>{children}</div>

      <Footer />
    </main>
  )
}
