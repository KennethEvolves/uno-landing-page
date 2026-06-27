import { HeaderDto, SeoResponseDto, TextItemDto } from './dto.types'
import { PageHeaderModel, SeoModel } from './model.types'

export const seoAdapter = (dto: SeoResponseDto): SeoModel => {
  const { seo } = dto
  const { title, description } = seo

  return {
    title,
    description,
  }
}

export const pageHeaderAdapter = (dto: HeaderDto): PageHeaderModel => {
  const { title, backgroundImage } = dto
  const { url, alternativeText, width, height } = backgroundImage

  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL

  return {
    title,
    image: {
      src: `${BASE_URL}${url}`,
      alt: alternativeText,
      width: width,
      height: height,
    },
  }
}

export const itemAdapter = (dto: TextItemDto): string => {
  const { item } = dto
  return item
}
