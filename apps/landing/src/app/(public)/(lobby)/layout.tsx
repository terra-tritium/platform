import type { ReactNode, JSX } from 'react'

import { Header, Footer } from '@/components'

interface LobbyLayoutProps {
  children: ReactNode
}

export default function LobbyLayout({
  children,
}: LobbyLayoutProps): JSX.Element {
  return (
    <main className='flex flex-col'>
      <Header />

      <div className='z-10 my-12 flex-1 md:my-24'>{children}</div>

      <Footer />
    </main>
  )
}
