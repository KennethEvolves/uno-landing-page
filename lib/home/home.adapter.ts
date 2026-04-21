import { AcademicProgramDto, ProgramSectionDto, HomeDto } from './home.dto'
import { HomeModel, ProgramSectionModel } from './home.model'
import { CardModel } from '../shared'

const programCardAdapter = (dto: AcademicProgramDto): CardModel => {
  const { slug, name, description, ctaLabel, imageCover } = dto

  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  const { url, alternativeText, width, height } = imageCover

  return {
    title: name,
    description,
    slug,
    ctaLabel,
    images: {
      cover: {
        src: `${BASE_URL}${url}`,
        alt: alternativeText,
        width,
        height,
      },
    },
  }
}

const programSectionAdapter = (dto: ProgramSectionDto): ProgramSectionModel => {
  const { title, academic_programs } = dto

  return {
    title,
    programCards: academic_programs.map(programCardAdapter),
  }
}

export const homeAdapter = (dto: HomeDto): HomeModel => {
  const { sections } = dto

  return {
    sections: sections.map(programSectionAdapter),
  }
}
