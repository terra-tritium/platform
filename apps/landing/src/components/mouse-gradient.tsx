'use client'

import React from 'react'

import { useMousePosition } from '@/hooks/use-mouse-position'

export default function MouseGradient() {
  const mouse = useMousePosition()

  return (
    <>
      <div
        className='absolute inset-0 -z-50'
        style={{
          background: `radial-gradient(400px at ${mouse.x}px ${mouse.y}px, var(--mouse-gradient-color), transparent)`,
        }}
      />
    </>
  )
}
