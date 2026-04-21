'use client'
import { ImageModel } from '@/lib/shared'
import { motion, type Variants } from 'motion/react'
import Image from 'next/image'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const image: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
}

interface Props {
  name: string
  description: string
  programKey: string
  imageHero: ImageModel
}

export const Hero = ({ name, description, programKey, imageHero }: Props) => {
  const { src, alt, width, height } = imageHero
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid w-full grid-cols-1 overflow-hidden bg-white lg:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]"
    >
      <motion.article
        variants={container}
        className="order-2 flex flex-col items-center justify-center gap-4 p-8 text-center text-uno-secondary lg:order-1 lg:items-center lg:p-16 xl:p-24"
      >
        <motion.p
          variants={item}
          className="text-xs font-medium tracking-[0.2rem] uppercase sm:text-sm"
        >
          Licenciatura en:
        </motion.p>
        <motion.h1
          variants={item}
          className="text-xl font-extrabold tracking-tight uppercase sm:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          {name}
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-md text-xs leading-relaxed opacity-90 sm:text-sm 2xl:text-lg"
        >
          {description}
        </motion.p>

        <motion.p
          variants={item}
          className="text-xs font-bold sm:text-sm 2xl:text-lg"
        >
          {programKey}
        </motion.p>
      </motion.article>

      <motion.article
        variants={image}
        className="relative order-1 h-full min-h-75 w-full lg:order-2 lg:min-h-125"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent lg:bg-linear-to-r lg:from-white lg:via-white/10 lg:to-transparent"></div>
        <div className="absolute inset-0 lg:bg-linear-to-t lg:from-white lg:via-white/10 lg:to-transparent"></div>
      </motion.article>
    </motion.section>
  )
}
