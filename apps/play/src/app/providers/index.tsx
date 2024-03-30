import type { ReactNode, JSX } from 'react'

import ReactQueryProvider from './react-query'
import ToasterProvider from './toaster'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>

      <ToasterProvider />
    </>
  )
}
