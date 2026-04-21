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
