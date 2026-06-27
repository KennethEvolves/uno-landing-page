import { DepartmentModel, ImageModel, PageHeaderModel } from '../shared'

export interface AboutUsModel {
  header: PageHeaderModel
  missionVision: MissionVisionModel
  values: InstitutionalValuesModel
  directory: DirectoryModel
  history: HistoryModel
  rectors: HistoricalRectorsModel
}

export interface MissionVisionModel {
  mission: string
  vision: string
  images: {
    mission: ImageModel
    vision: ImageModel
  }
}

export interface InstitutionalValuesModel {
  title: string
  description: string
  values: string[]
  image: ImageModel
}

export interface DirectoryModel {
  title: string
  description: string
  departments: DepartmentModel[]
  background: ImageModel
}

export interface HistoryModel {
  title: string
  content: string
}

export interface RectorModel {
  order?: number
  fullName: string
  period: string
  biography: string
  photo: ImageModel
}

export interface HistoricalRectorsModel {
  title: string
  description: string
  rectors: RectorModel[]
}
