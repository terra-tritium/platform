'use client'

import { type ReactNode, type JSX, useMemo, type ComponentProps } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

type ReCaptchaProviderProps = {
  children: ReactNode
}

export default function ReCaptchaProvider({
  children,
}: ReCaptchaProviderProps): JSX.Element {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
