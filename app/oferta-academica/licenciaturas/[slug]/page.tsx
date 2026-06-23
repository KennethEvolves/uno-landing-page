import type { Metadata } from 'next'
import { type Props, endpoints, QUERY_SEO, getSeo } from '@/lib/shared'
import { getProgram } from '@/lib/programs'
import {
  Hero,
  ProgramObjective,
  GraduateProfile,
  WorkField,
} from '@/components'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const args = {
    slug,
    endpoint: endpoints.programs,
    query: QUERY_SEO,
  }
  const { title, description } = await getSeo(args)

  return {
    title,
    description,
  }
}

const ProgramPage = async ({ params }: Props) => {
  const { slug } = await params
  const program = await getProgram(slug)
  const { name, description, level, key, objective, images, details } = program
  const { hero, duo, group, work } = images
  return (
    <main className="mt-18">
      <Hero
        name={name}
        description={description}
        level={level}
        details={details}
        programKey={key}
        imageHero={hero}
      />
      <ProgramObjective objective={objective} cover={group} />
      <GraduateProfile profile={program.graduateProfile} image={duo} />
      <WorkField work={program.workField} image={work} />
    </main>
  )
}

export default ProgramPage
