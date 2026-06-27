import type { ProgramDto } from './program.dto'
import type { ProgramModel } from './program.model'
import { itemAdapter } from '../shared'

export const programAdapter = (dto: ProgramDto): ProgramModel => {
  const {
    name,
    slug,
    level,
    description,
    key,
    ctaLabel,
    objective,
    imageGroup,
    imageDuo,
    imageCover,
    imageHero,
    imageWorkField,
    details,
    graduateProfile,
    workField,
  } = dto

  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  const { url, alternativeText, width, height } = imageCover
  const { url: src, alternativeText: alt, width: w, height: h } = imageHero

  const { modality, duration, cycle, location } = details

  return {
    name,
    description,
    slug,
    level,
    key,
    ctaLabel,
    objective: {
      label: objective.label,
      value: objective.valueString,
      iconName: objective.iconName,
    },
    images: {
      duo: {
        src: `${BASE_URL}${imageDuo.url}`,
        alt: imageDuo.alternativeText,
        width: imageDuo.width,
        height: imageDuo.height,
      },
      cover: {
        src: `${BASE_URL}${url}`,
        alt: alternativeText,
        width,
        height,
      },
      hero: {
        src: `${BASE_URL}${src}`,
        alt,
        width: w,
        height: h,
      },
      group: {
        src: `${BASE_URL}${imageGroup.url}`,
        alt: imageGroup.alternativeText,
        width: imageGroup.width,
        height: imageGroup.height,
      },
      work: {
        src: `${BASE_URL}${imageWorkField.url}`,
        alt: imageWorkField.alternativeText,
        width: imageWorkField.width,
        height: imageWorkField.height,
      },
    },
    details: {
      modality: {
        label: modality.label,
        value: modality.valueString,
        iconName: modality.iconName,
      },
      duration: {
        label: duration.label,
        value: duration.valueString,
        iconName: duration.iconName,
      },
      cycle: {
        label: cycle.label,
        value: cycle.valueString,
        iconName: cycle.iconName,
      },
      location: {
        label: location.label,
        value: location.valueString,
        iconName: location.iconName,
      },
    },
    graduateProfile: {
      title: graduateProfile.title,
      summary: graduateProfile.summary,
      knowledge: graduateProfile.knowledge.map(itemAdapter),
      skills: graduateProfile.skills.map(itemAdapter),
      attitudes: graduateProfile.attitudes.map(itemAdapter),
    },
    workField: {
      title: workField.title,
      summary: workField.summary,
      employmentAreas: workField.employmentAreas.map(itemAdapter),
    },
  }
}
