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

export const QUERY_PAGE_HEADER = {
  fields: ['title'],
  populate: {
    backgroundImage: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
  },
}
