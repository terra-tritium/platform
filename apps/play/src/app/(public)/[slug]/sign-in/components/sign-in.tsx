'use client'

import type { JSX } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

import { typographyVariants, Button, Icon } from '@terratritium/ui'

import UserLoginForm from './user-login-form'

export default function SignIn(): JSX.Element {
  const { slug } = useParams<{ slug: string }>()

  return (
    <>
      <h1 className='text-2xl font-medium'>Ready to conquer?</h1>

      <div className='mt-2' />

      <p className={typographyVariants({ variant: 'muted' })}>
        New to Terra Tritium?{' '}
        <Link
          className='text-white hover:underline underline-offset-2'
          href={`/${slug}/sign-up`}
        >
          Sign up
        </Link>{' '}
        for an account.
      </p>

      <div className='mt-8' />

      <UserLoginForm pathname={slug} />

      {process.env.VERCEL_ENV !== 'production' && (
        <>
          <div className='mt-6' />

          <div className='flex items-center space-x-4'>
            <span className='w-full h-px bg-gradient-to-r from-transparent to-orange-500 ' />

            <div className='text-xs uppercase font-semibold shrink-0 tracking-wide'>
              Or continue with
            </div>

            <span className='w-full h-px bg-gradient-to-l from-transparent to-orange-500 ' />
          </div>

          <div className='mt-6' />

          <Button className='w-full' size='lg' type='submit' variant='outline'>
            <span>Google</span>

            <Icon.moveRight className='w-5 h-5' />
          </Button>
        </>
      )}
    </>
  )
}
