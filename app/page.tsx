import type { Metadata } from 'next'
import { endpoints, QUERY_SEO, getSeo } from '@/lib/shared'
import { getHome } from '@/lib/home'
import { ProgramSection } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
  const args = {
    endpoint: endpoints.home,
    query: QUERY_SEO,
  }
  const { title, description } = await getSeo(args)

  return {
    title,
    description,
  }
}

const HomePage = async () => {
  const { sections } = await getHome()
  const ugSection = sections.find((s) => s.title === 'Licenciaturas')
  const pgSection = sections.find((s) => s.title === 'Posgrados')
  return (
    <>
      <div className="m-18"></div>

      {ugSection ? (
        <ProgramSection data={ugSection} />
      ) : (
        <p>No existe la sección</p>
      )}

      {pgSection ? (
        <ProgramSection data={pgSection} />
      ) : (
        <p>No existe la sección</p>
      )}
    </>
  )
}

export default HomePage
