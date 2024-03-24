'use client'

import { type JSX, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage(): JSX.Element {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', '1%'],
  })

  const translateX = useTransform(scrollYProgress, [0, 1], [-4, 0])
  const translateY = useTransform(scrollYProgress, [0, 1], [-156, 0])
  const rotateX = useTransform(scrollYProgress, [0, 1], [43, 0])
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0.2, 0])

  return (
    <main className='max-w-5xl mx-auto relative py-4 px-2 lg:py-16'>
      <div className='h-[200px]' />

      <motion.div
        className='flex gap-1 w-full h-full'
        ref={scrollRef}
        style={{
          position: 'relative',
          rotateX,
          rotateY: 0,
          rotateZ,
          transformPerspective: 600,
          translateX,
          translateY,
          translateZ: 0,
        }}
      >
        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          className='overflow-hidden w-full rounded-xl'
          initial={{ opacity: 0, translateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='Hero'
            className='overflow-hidden w-full h-auto duration-700 ease-in-out scale-100 blur-0 grayscale-0'
            priority={true}
            src='/static/img/hero/1.png'
            width={550}
            height={550}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          className='overflow-hidden w-full rounded-xl'
          initial={{ opacity: 0, translateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='Hero'
            className='overflow-hidden w-full h-auto duration-700 ease-in-out scale-100 blur-0 grayscale-0'
            priority={true}
            src='/static/img/hero/2.png'
            width={550}
            height={550}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          className='overflow-hidden w-full rounded-xl'
          initial={{ opacity: 0, translateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='Hero'
            className='overflow-hidden w-full h-auto duration-700 ease-in-out scale-100 blur-0 grayscale-0'
            priority={true}
            src='/static/img/hero/3.png'
            width={550}
            height={550}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          className='overflow-hidden w-full rounded-xl'
          initial={{ opacity: 0, translateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='Hero'
            className='overflow-hidden w-full h-auto duration-700 ease-in-out scale-100 blur-0 grayscale-0'
            priority={true}
            src='/static/img/hero/4.png'
            width={550}
            height={550}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          className='overflow-hidden w-full rounded-xl'
          initial={{ opacity: 0, translateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='Hero'
            className='overflow-hidden w-full h-auto duration-700 ease-in-out scale-100 blur-0 grayscale-0'
            priority={true}
            src='/static/img/hero/5.png'
            width={550}
            height={550}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, translateY: 0 }}
          className='overflow-hidden w-full rounded-xl'
          initial={{ opacity: 0, translateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='Hero'
            className='overflow-hidden w-full h-auto duration-700 ease-in-out scale-100 blur-0 grayscale-0'
            priority={true}
            src='/static/img/hero/6.png'
            width={550}
            height={550}
          />
        </motion.div>
      </motion.div>
    </main>
  )
}
