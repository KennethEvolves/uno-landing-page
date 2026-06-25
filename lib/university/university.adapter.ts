import { pageHeaderAdapter } from '../shared/data.adapter'
import { AboutUsDto } from './university.dto'
import { AboutUsModel } from './university.model'

export const aboutUsAdapter = (dto: AboutUsDto): AboutUsModel => {
  const { header } = dto

  return {
    header: pageHeaderAdapter(header),
  }
}
