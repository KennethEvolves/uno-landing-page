import qs from 'qs'
import { getStrapiData } from './client'
import { DEGREES_FRAGMENT } from './fragments'
import { HomePageType } from '@/components/home'

const QUERY_HOME_PAGE = qs.stringify({
  fields: ['title', 'description'],
  populate: {
    sections: {
      on: {
        ...DEGREES_FRAGMENT,
      },
    },
  },
})

export async function getHomePage(): Promise<HomePageType> {
  const query = QUERY_HOME_PAGE
  const response = await getStrapiData(`/api/home-page?${query}`)
  return response?.data
}
