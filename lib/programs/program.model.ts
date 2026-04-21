import type { ImageModel } from '../shared'

export interface ProgramModel {
  name: string
  description: string
  slug: string
  level: string
  key: string
  ctaLabel: string
  images: {
    cover: ImageModel
    hero: ImageModel
  }
  details: {
    modality: string
    duration: string
    cycle: string
  }
}
