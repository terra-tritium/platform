'use client'

import type { JSX } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

import { typographyVariants } from '@terratritium/ui'

import ResetPasswordForm from './reset-password-form'

export default function Forgot(): JSX.Element {
  const { server } = useParams<{ server: string }>()

  return (
    <>
      <h1 className='text-2xl font-medium'>Reset Your Password</h1>

      <div className='mt-2' />

      <p className={typographyVariants({ variant: 'muted' })}>
        Type in your email and we'll send you a link to reset your password.
      </p>

      <div className='mt-8' />

      <ResetPasswordForm server={server} />

      <div className='mt-8' />

      <p className={typographyVariants({ variant: 'muted' })}>
        Did you remember your password?{' '}
        <Link
          className='text-white hover:underline underline-offset-2'
          href={`/${server}/sign-in`}
        >
          Sign in
        </Link>
        .
      </p>
    </>
  )
}
