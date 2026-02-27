import qs from 'qs'
import { getStrapiData } from './client'

const QUERY_FOOTER = qs.stringify({
  populate: {
    fields: ['id', 'documentId', 'mail', 'phone', 'location', 'copyright'],
    logo: {
      fields: ['url', 'alternativeText', 'width', 'height'],
    },
    socialMedia: {
      fields: ['label', 'href'],
    },
  },
})

export async function getFooterData() {
  const query = QUERY_FOOTER
  const response = await getStrapiData(`/api/footer?${query}`)
  return response?.data ?? null
}
