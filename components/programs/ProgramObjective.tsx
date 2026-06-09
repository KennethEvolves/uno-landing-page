'use client'
import type { ImageModel, LabelValueModel } from '@/lib/shared'
import Image from 'next/image'
import { Icon } from '@/components'
import { motion, type Variants } from 'motion/react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
}

interface Props {
  objective: LabelValueModel
  cover: ImageModel
}

export const ProgramObjective = ({ objective, cover }: Props) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid w-full grid-cols-1 overflow-hidden bg-white lg:grid-cols-[50%_50%]"
    >
      <motion.article
        variants={imageVariants}
        className="group relative order-1 h-full min-h-75 w-full overflow-hidden lg:order-1 lg:min-h-125"
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-contain transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/5 to-transparent"></div>
      </motion.article>

      <motion.article
        variants={containerVariants}
        className="order-2 flex flex-col items-center justify-center gap-5 p-8 text-center text-uno-secondary lg:order-2 lg:items-start lg:p-16 lg:text-left"
      >
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:items-center lg:justify-start"
        >
          <Icon
            iconName={objective.iconName}
            size={24}
            className="opacity-70"
          />
          <h2 className="text-lg leading-[1.1] font-extrabold tracking-tighter text-balance uppercase sm:text-xl xl:text-2xl 2xl:text-3xl">
            {objective.label}
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-lg text-xs leading-relaxed opacity-90 sm:text-sm 2xl:text-base"
        >
          {objective.value}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-4 hidden h-px w-16 bg-uno-secondary/20 lg:block"
        ></motion.div>
      </motion.article>
    </motion.section>
  )
}
