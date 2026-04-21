import qs from 'qs'

export const getDataBySlug = (slug: string, query: object): string => {
  const data = qs.stringify({
    ...query,
    filters: {
      slug: {
        $eq: slug,
      },
    },
  })

  return data
}

export const QUERY_SEO = {
  fields: ['id'],
  populate: {
    seo: {
      fields: ['title', 'description'],
    },
  },
}
