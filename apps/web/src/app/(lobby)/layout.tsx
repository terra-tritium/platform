import type { ReactNode, JSX } from 'react'

import { Meteor, Header, Footer } from '@/components'

interface LobbyLayoutProps {
  children: ReactNode
}

export default function LobbyLayout({
  children,
}: LobbyLayoutProps): JSX.Element {
  return (
    <>
      <main className='bg-stars'>
        <Meteor />
        <Header />

        {children}

        <Footer />
      </main>
    </>
  )
}
