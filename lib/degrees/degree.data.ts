import qs from 'qs'
import { getStrapiData } from '../strapi/client'
import { Degree, DegreeSeo } from './degree.types'

const getParamsBySlug = (slug: string, query: object) => {
  return qs.stringify({
    ...query,
    filters: {
      slug: {
        $eq: slug,
      },
    },
  })
}

const QUERY_DEGREE = {
  fields: ['id', 'documentId', 'name'],
}

const QUERY_DEGREE_SEO = {
  fields: ['id'],
  populate: {
    seo: {
      fields: ['title', 'description'],
    },
  },
}

export const getDegreeSeo = async (slug: string): Promise<DegreeSeo> => {
  const query = getParamsBySlug(slug, QUERY_DEGREE_SEO)
  const response = await getStrapiData(`/api/degrees?${query}`)
  return response?.data?.[0] ?? null
}

export const getDegree = async (slug: string): Promise<Degree> => {
  const query = getParamsBySlug(slug, QUERY_DEGREE)
  const response = await getStrapiData(`/api/degrees?${query}`)
  return response?.data?.[0] ?? null
}
