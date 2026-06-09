import type { ImageDto, LabelValueDto, TextItemDto } from '../shared'

export interface ProgramDto {
  id: number
  documentId: string
  name: string
  slug: string
  level: string
  description: string
  key: string
  ctaLabel: string
  objective: LabelValueDto
  imageCover: ImageDto
  imageHero: ImageDto
  imageDuo: ImageDto
  details: DetailsDto
  graduateProfile: GraduateProfileDto
  workField: WorkFieldDto
}

export interface DetailsDto {
  id: number
  modality: LabelValueDto
  duration: LabelValueDto
  cycle: LabelValueDto
  location: LabelValueDto
}

export interface GraduateProfileDto {
  id: number
  title: string
  summary: string
  knowledge: TextItemDto[]
  skills: TextItemDto[]
  attitudes: TextItemDto[]
}

export interface WorkFieldDto {
  id: number
  title: string
  summary: string
  employmentAreas: TextItemDto[]
}
