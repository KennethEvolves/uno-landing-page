import type { ProgramModel } from './program.model'
import { getDataBySlug, endpoints, getStrapiData } from '../shared'
import { QUERY_PROGRAM } from './program.query'
import { programAdapter } from './program.adapter'

export const getProgram = async (slug: string): Promise<ProgramModel> => {
  const query = getDataBySlug(slug, QUERY_PROGRAM)
  const endpoint = endpoints.programs
  const response = await getStrapiData(`/api/${endpoint}?${query}`)

  const dto = response?.data?.[0]
  if (!dto) throw new Error('Program not found')
  const program = programAdapter(dto)

  return program
}
