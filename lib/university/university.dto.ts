import { DepartmentDto, HeaderDto, ImageDto, TextItemDto } from '../shared'

export interface AboutUsDto {
  id: number
  documentId: string
  header: HeaderDto
  missionVision: MissionVisionDto
  values: ValuesDto
  directory: DirectoryDto
  history: HistoryDto
  rectors: RectorsDto
}

export interface MissionVisionDto {
  id: number
  mission: string
  vision: string
  imageMission: ImageDto
  imageVision: ImageDto
}

export interface ValuesDto {
  id: number
  title: string
  description: string
  value: TextItemDto[]
  image: ImageDto
}

export interface DirectoryDto {
  id: number
  title: string
  description: string
  departments: DepartmentDto[]
  backgroundImage: ImageDto
}

export interface HistoryDto {
  id: number
  title: string
  content: string
}
export interface RectorDto {
  id: number
  documentId: string
  fullName: string
  period: string
  biography: string
  photo: ImageDto
}

export interface RectorsDto {
  id: number
  title: string
  description: string
  rectors: RectorDto[]
}
