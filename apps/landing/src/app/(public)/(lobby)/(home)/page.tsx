import type { JSX } from 'react'

import Hero from '@/components/hero'
import NFT from '@/components/nft'
import Team from '@/components/team'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <NFT />
      <Team />
    </>
  )
}
