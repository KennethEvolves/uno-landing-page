export const QUERY_PROGRAM = {
  fields: [
    'id',
    'documentId',
    'name',
    'slug',
    'level',
    'description',
    'key',
    'ctaLabel',
  ],
  populate: {
    objective: {
      fields: ['label', 'valueString', 'iconName'],
    },
    imageCover: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
    imageHero: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
    imageDuo: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
    imageGroup: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
    imageWorkField: {
      fields: ['id', 'url', 'alternativeText', 'width', 'height'],
    },
    details: {
      populate: {
        modality: {
          fields: ['label', 'valueString', 'iconName'],
        },
        duration: {
          fields: ['label', 'valueString', 'iconName'],
        },
        cycle: {
          fields: ['label', 'valueString', 'iconName'],
        },
        location: {
          fields: ['label', 'valueString', 'iconName'],
        },
      },
    },
    graduateProfile: { populate: '*' },
    workField: { populate: '*' },
  },
}
