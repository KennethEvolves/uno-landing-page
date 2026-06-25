import type { Metadata } from 'next'
import { endpoints, QUERY_SEO, getSeo } from '@/lib/shared'
import { getAboutUs } from '@/lib/university'
import { PageHeader } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
  const args = {
    endpoint: endpoints.about,
    query: QUERY_SEO,
  }
  const { title, description } = await getSeo(args)

  return {
    title,
    description,
  }
}

const AboutUsPage = async () => {
  const { header } = await getAboutUs()
  return (
    <>
      <main className="mt-18"></main>
      <PageHeader data={header} />
    </>
  )
}

export default AboutUsPage
