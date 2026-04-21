import type { Metadata } from 'next'
import { type Props, endpoints, QUERY_SEO, getSeo } from '@/lib/shared'
import { getProgram } from '@/lib/programs'
import { Hero } from '@/components'

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
  const { name, description, key, images } = program
  const { hero } = images
  return (
    <main className="mt-18">
      <Hero
        name={name}
        description={description}
        programKey={key}
        imageHero={hero}
      />
    </main>
  )
}

export default ProgramPage
