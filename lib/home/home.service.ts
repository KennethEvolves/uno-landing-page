import type { HomeModel } from './home.model'
import { endpoints, getStrapiData } from '../shared'
import { QUERY_HOME_PAGE } from './home.query'
import { homeAdapter } from './home.adapter'

export const getHome = async (): Promise<HomeModel> => {
  const query = QUERY_HOME_PAGE
  const endpoint = endpoints.home
  const response = await getStrapiData(`/api/${endpoint}?${query}`)

  const dto = response.data
  if (!dto) throw new Error('Home Page not found')
  const home = homeAdapter(dto)

  return home
}
