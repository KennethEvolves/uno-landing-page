import { ImageDto } from '../shared'

export interface ProgramDto {
  id: number
  documentId: string
  name: string
  slug: string
  level: string
  description: string
  modality: string
  academicTerm: string
  duration: string
  key: string
  ctaLabel: string
  imageCover: ImageDto
  imageHero: ImageDto
}
