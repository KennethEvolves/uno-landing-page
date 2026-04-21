import qs from 'qs'
import type { SeoModel } from './model.types'
import { getDataBySlug } from './query'
import { getStrapiData } from './strapi'
import { seoAdapter } from './data.adapter'

interface Params {
  slug?: string
  endpoint: string
  query: object
}

export const getSeo = async (params: Params): Promise<SeoModel> => {
  const { slug, endpoint, query: q } = params

  if (slug) {
    const query = getDataBySlug(slug, q)
    const response = await getStrapiData(`/api/${endpoint}?${query}`)

    const dto = response?.data?.[0]
    if (!dto) throw new Error('Seo not found')
    const seo = seoAdapter(dto)

    return seo
  }

  const query = qs.stringify(q)
  const response = await getStrapiData(`/api/${endpoint}?${query}`)

  const dto = response?.data
  if (!dto) throw new Error('Seo not found')
  const seo = seoAdapter(dto)

  return seo
}
