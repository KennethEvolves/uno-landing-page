export interface SeoResponseDto {
  id: number
  documentId: string
  seo: SeoDto
}

export interface SeoDto {
  id: number
  title: string
  description: string
}

export interface ImageDto {
  id: number
  documentId: string
  url: string
  alternativeText: string
  width: number
  height: number
}

export interface LabelValueDto {
  id: number
  label: string
  valueString: string
  iconName: string
}

export interface TextItemDto {
  id: number
  item: string
}

export interface HeaderDto {
  id: number
  title: string
  backgroundImage: ImageDto
}

export interface DepartmentDto {
  id: number
  documentId: string
  name: string
  order: number
  staff_members: StaffMemberDto[]
}

export interface StaffMemberDto {
  id: number
  documentId: string
  fullName: string
  role: string
  email: string
}
