import type { AboutUsModel } from './university.model'
import { endpoints, getStrapiData } from '../shared'
import { QUERY_ABOUT_US_PAGE } from './university.query'
import { aboutUsAdapter } from './university.adapter'

export const getAboutUs = async (): Promise<AboutUsModel> => {
  const query = QUERY_ABOUT_US_PAGE
  const endpoint = endpoints.about
  const response = await getStrapiData(`/api/${endpoint}?${query}`)

  const dto = response.data
  if (!dto) throw new Error('About Us Page not found')
  const aboutUs = aboutUsAdapter(dto)

  return aboutUs
}
