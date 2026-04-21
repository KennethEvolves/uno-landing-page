import { ImageDto } from '../shared'

export interface HomeDto {
  id: number
  documentId: string
  sections: ProgramSectionDto[]
}

export interface ProgramSectionDto {
  __component: string
  id: number
  title: string
  academic_programs: AcademicProgramDto[]
}

export interface AcademicProgramDto {
  id: number
  documentId: string
  name: string
  slug: string
  description: string
  ctaLabel: string
  imageCover: ImageDto
}
