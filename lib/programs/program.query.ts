export const QUERY_PROGRAM = {
  fields: [
    'id',
    'documentId',
    'name',
    'slug',
    'level',
    'description',
    'modality',
    'academicTerm',
    'duration',
    'key',
    'ctaLabel',
  ],
  populate: {
    imageCover: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
    imageHero: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
  },
}
