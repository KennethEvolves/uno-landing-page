export type Params = Promise<{ slug: string }>

export interface Props {
  params: Params
}

export interface ImageModel {
  src: string
  alt: string
  width: number
  height: number
}

export interface SeoModel {
  title: string
  description: string
}

export interface CardModel {
  title: string
  description: string
  slug: string
  ctaLabel: string
  images: {
    cover: ImageModel
  }
}
