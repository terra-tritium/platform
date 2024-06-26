import type { JSX } from 'react'

import Hero from '@/components/hero'
import Team from '@/components/team'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <Team />
    </>
  )
}
