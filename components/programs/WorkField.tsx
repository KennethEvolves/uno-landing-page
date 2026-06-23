'use client'
import { motion, type Variants } from 'motion/react'
import { Icon } from '@/components'
import type { ImageModel } from '@/lib/shared'
import Image from 'next/image'
import { useState } from 'react'
import { ImageModal } from './ImageModal'

interface WorkFieldModel {
  title: string
  summary: string
  employmentAreas: string[]
}

interface Props {
  work: WorkFieldModel
  image: ImageModel
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
}

const fadeItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const WorkField = ({ work, image }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { title, summary, employmentAreas } = work
  const { src, alt, width, height } = image

  return (
    <div className="flex flex-col items-center">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="grid w-full grid-cols-1 overflow-hidden lg:grid-cols-[50%_50%]"
      >
        <motion.article
          variants={imageVariants}
          onClick={() => setIsModalOpen(true)}
          className="group relative order-1 h-full min-h-75 w-full cursor-pointer overflow-hidden lg:order-2 lg:min-h-125"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
            <span className="rounded-sm bg-black/20 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
              Ver imagen completa
            </span>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-white via-white/5 to-transparent"></div>
        </motion.article>

        <motion.article
          variants={container}
          className="order-2 flex flex-col items-center justify-center gap-5 p-8 pb-4 text-center text-uno-secondary lg:order-2 lg:p-16"
        >
          <motion.div
            variants={item}
            className="flex w-full flex-col items-center justify-center gap-5 lg:items-center"
          >
            <Icon iconName="briefcase" size={24} className="opacity-50" />
            <h2 className="max-w-lg text-lg leading-[1.1] font-extrabold tracking-tighter text-balance uppercase sm:text-xl xl:text-2xl 2xl:text-3xl">
              {title}
            </h2>
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-lg text-xs leading-relaxed opacity-90 sm:text-sm 2xl:text-base"
          >
            {summary}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 hidden h-px w-1/3 bg-uno-secondary/20 lg:block"
          ></motion.div>
        </motion.article>
      </motion.section>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={src}
        alt={alt}
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="flex w-full max-w-6xl flex-col gap-8 py-12"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center gap-12"
        >
          <h3 className="max-w-xl text-lg leading-[1.1] font-extrabold tracking-tighter text-balance uppercase sm:text-xl xl:text-2xl 2xl:text-3xl">
            Campo de trabajo
          </h3>

          <div className="grid w-full grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
            {employmentAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeItem}
                className="group flex h-full cursor-pointer items-center gap-4 rounded-sm border border-uno-secondary/10 bg-white p-5 shadow-xs transition-all duration-300 hover:border-uno-primary/30 hover:shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm transition-colors duration-300">
                  <Icon
                    iconName="doticon"
                    size={16}
                    className="text-uno-secondary opacity-60 transition-colors duration-300 group-hover:text-uno-primary group-hover:opacity-100"
                  />
                </div>
                <span className="text-sm leading-tight font-medium text-uno-secondary/90">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
