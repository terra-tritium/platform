import type { ReactNode, JSX } from 'react'

import { ToasterProvider } from './toaster'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <>
      {children}

      <ToasterProvider />
    </>
  )
}
