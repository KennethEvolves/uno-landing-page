export interface StrapiImage {
  id: number
  documentId: string
  url: string
  alternativeText: string | null
  width: number
  height: number
}

export interface DegreeType {
  id: number
  documentId: string
  name: string
  description: string
  key: string
  slug: string
  coverStatus: boolean
  ctaLabel: string
  cover: StrapiImage | null
}

export interface DegreesSectionType {
  __component: string
  id: number
  title: string
  degrees: DegreeType[]
}

export type HomeSection = DegreesSectionType

export interface HomePageType {
  title: string
  description: string
  sections: HomeSection[]
}
