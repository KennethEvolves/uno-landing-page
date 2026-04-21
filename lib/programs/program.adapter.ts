import { ProgramDto } from './program.dto'
import { ProgramModel } from './program.model'

export const programAdapter = (dto: ProgramDto): ProgramModel => {
  const {
    name,
    slug,
    level,
    description,
    modality,
    academicTerm,
    duration,
    ctaLabel,
    key,
    imageCover,
    imageHero,
  } = dto

  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  const { url, alternativeText, width, height } = imageCover
  const { url: src, alternativeText: alt, width: w, height: h } = imageHero

  return {
    name,
    description,
    slug,
    level,
    key,
    ctaLabel,
    images: {
      cover: {
        src: `${BASE_URL}${url}`,
        alt: alternativeText,
        width,
        height,
      },
      hero: {
        src: `${BASE_URL}${src}`,
        alt,
        width: w,
        height: h,
      },
    },
    details: {
      modality,
      duration,
      cycle: academicTerm,
    },
  }
}
