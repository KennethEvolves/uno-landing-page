'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import type { PageHeaderModel } from '@/lib/shared'

interface Props {
  data: PageHeaderModel
}

export const PageHeader = ({ data }: Props) => {
  const { title, image } = data
  const { src, alt } = image

  return (
    <header className="relative flex min-h-87.5 w-full items-center justify-center overflow-hidden [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)] lg:min-h-112.5 lg:[clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-linear-to-b from-uno-secondary/40 via-uno-secondary/60 to-uno-secondary/90"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 flex flex-col items-center px-6 pb-10 text-center text-white"
      >
        <h1 className="text-3xl leading-[1.1] font-extrabold tracking-wide text-balance uppercase md:text-4xl xl:text-5xl">
          {title}
        </h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '4rem', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-6 h-1 rounded-full bg-white"
        ></motion.div>
      </motion.div>
    </header>
  )
}
