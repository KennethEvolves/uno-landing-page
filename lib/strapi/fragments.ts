export const DEGREES_FRAGMENT = {
  'sections.degrees': {
    fields: ['title'],
    populate: {
      degrees: {
        fields: [
          'id',
          'documentId',
          'name',
          'description',
          'key',
          'slug',
          'coverStatus',
          'ctaLabel',
        ],
        populate: {
          cover: { fields: ['url', 'alternativeText', 'width', 'height'] },
        },
      },
    },
  },
}
