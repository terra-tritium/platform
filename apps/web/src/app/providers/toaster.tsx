'use client'

import type { ComponentProps } from 'react'

import { Toaster } from '@terratritium/ui'

type ToasterProviderProps = ComponentProps<typeof Toaster>

export const ToasterProvider = ({ ...props }: ToasterProviderProps) => {
  return (
    <Toaster
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}
