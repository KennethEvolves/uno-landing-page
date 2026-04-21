import { SeoResponseDto } from './dto.types'
import { SeoModel } from './model.types'

export const seoAdapter = (dto: SeoResponseDto): SeoModel => {
  const { seo } = dto
  const { title, description } = seo

  return {
    title,
    description,
  }
}
