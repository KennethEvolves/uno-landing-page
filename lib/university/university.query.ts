import qs from 'qs'
import { QUERY_IMAGE, QUERY_PAGE_HEADER } from '../shared'

export const QUERY_ABOUT_US_PAGE = qs.stringify({
  fields: ['id'],
  populate: {
    header: {
      ...QUERY_PAGE_HEADER,
    },
    missionVision: {
      fields: ['mission', 'vision'],
      populate: {
        imageMission: { ...QUERY_IMAGE },
        imageVision: { ...QUERY_IMAGE },
      },
    },
    values: {
      fields: ['title', 'description'],
      populate: {
        value: {
          fields: ['item'],
        },
        image: { ...QUERY_IMAGE },
      },
    },
    directory: {
      fields: ['title', 'description'],
      populate: {
        departments: {
          fields: ['name', 'order'],
          populate: {
            staff_members: {
              fields: ['fullName', 'role', 'email'],
            },
          },
        },
        backgroundImage: { ...QUERY_IMAGE },
      },
    },
    rectors: {
      fields: ['title', 'description'],
      populate: {
        rectors: {
          fields: ['fullName', 'period', 'biography'],
          populate: {
            photo: { ...QUERY_IMAGE },
          },
        },
      },
    },
    history: {
      fields: ['title', 'content'],
    },
  },
})
