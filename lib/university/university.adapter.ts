import {
  pageHeaderAdapter,
  itemAdapter,
  type DepartmentDto,
  type DepartmentModel,
  type StaffMemberDto,
  type StaffMemberModel,
} from '../shared'
import type { AboutUsDto, RectorDto } from './university.dto'
import type { AboutUsModel, RectorModel } from './university.model'

export const aboutUsAdapter = (dto: AboutUsDto): AboutUsModel => {
  const { header, missionVision, values, directory, history, rectors } = dto

  return {
    header: pageHeaderAdapter(header),
    missionVision: {
      mission: missionVision.mission,
      vision: missionVision.vision,
      images: {
        mission: {
          src: missionVision.imageMission.url,
          alt: missionVision.imageMission.alternativeText,
          width: missionVision.imageMission.width,
          height: missionVision.imageMission.height,
        },
        vision: {
          src: missionVision.imageVision.url,
          alt: missionVision.imageVision.alternativeText,
          width: missionVision.imageVision.width,
          height: missionVision.imageVision.height,
        },
      },
    },
    values: {
      title: values.title,
      description: values.description,
      values: values.value.map(itemAdapter),
      image: {
        src: values.image.url,
        alt: values.image.alternativeText,
        width: values.image.width,
        height: values.image.height,
      },
    },
    directory: {
      title: directory.title,
      description: directory.description,
      departments: directory.departments.map(departmentsAdapter),
      background: {
        src: directory.backgroundImage.url,
        alt: directory.backgroundImage.alternativeText,
        width: directory.backgroundImage.width,
        height: directory.backgroundImage.height,
      },
    },
    history: {
      title: history.title,
      content: history.content,
    },
    rectors: {
      title: rectors.title,
      description: rectors.description,
      rectors: rectors.rectors.map(rectorsAdapter),
    },
  }
}

const departmentsAdapter = (dto: DepartmentDto): DepartmentModel => {
  const { order, name, staff_members } = dto

  return {
    order,
    name,
    staffMembers: staff_members.map(staffMembersAdapter),
  }
}

const staffMembersAdapter = (dto: StaffMemberDto): StaffMemberModel => {
  const { fullName, role, email } = dto

  return {
    fullName,
    role,
    email,
  }
}

const rectorsAdapter = (dto: RectorDto): RectorModel => {
  const { fullName, biography, period, photo } = dto

  return {
    fullName,
    biography,
    period,
    photo: {
      src: photo.url,
      alt: photo.alternativeText,
      width: photo.width,
      height: photo.height,
    },
  }
}
