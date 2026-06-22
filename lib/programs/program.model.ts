import type { ImageModel, LabelValueModel } from '../shared'

export interface ProgramModel {
  name: string
  description: string
  slug: string
  level: string
  key: string
  ctaLabel: string
  objective: LabelValueModel
  images: {
    duo: ImageModel
    cover: ImageModel
    hero: ImageModel
    group: ImageModel
  }
  details: DetailsModel
  graduateProfile: GraduateProfileModel
  workField: WorkFieldModel
}

export interface DetailsModel {
  modality: LabelValueModel
  duration: LabelValueModel
  cycle: LabelValueModel
  location: LabelValueModel
}

export interface GraduateProfileModel {
  title: string
  summary: string
  knowledge: string[]
  skills: string[]
  attitudes: string[]
}

export interface WorkFieldModel {
  title: string
  summary: string
  employmentAreas: string[]
}
