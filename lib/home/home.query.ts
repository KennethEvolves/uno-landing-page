import qs from 'qs'

const PROGRAMS_SECTION = {
  'sections.programs': {
    fields: ['title'],
    populate: {
      academic_programs: {
        fields: ['id', 'documentId', 'name', 'slug', 'description', 'ctaLabel'],
        populate: {
          imageCover: { fields: ['url', 'alternativeText', 'width', 'height'] },
        },
      },
    },
  },
}

export const QUERY_HOME_PAGE = qs.stringify({
  fields: ['id'],
  populate: {
    sections: {
      on: {
        ...PROGRAMS_SECTION,
      },
    },
  },
})
