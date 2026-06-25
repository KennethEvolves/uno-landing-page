import qs from 'qs'
import { QUERY_PAGE_HEADER } from '../shared'

export const QUERY_ABOUT_US_PAGE = qs.stringify({
  fields: ['id'],
  populate: {
    header: {
      ...QUERY_PAGE_HEADER,
    },
  },
})
