import type { Metadata } from 'next'
import { endpoints, QUERY_SEO, getSeo } from '@/lib/shared'
import { getAboutUs } from '@/lib/university'
import {
  Directory,
  HistoricalRectors,
  History,
  InstitutionalValues,
  MissionVision,
  PageHeader,
} from '@/components'

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
  const { header, missionVision, values, directory, history, rectors } =
    await getAboutUs()
  return (
    <>
      <main className="mt-18"></main>
      <PageHeader data={header} />
      <MissionVision data={missionVision} />
      <InstitutionalValues data={values} />
      <Directory data={directory} />
      <History data={history} />
      <HistoricalRectors data={rectors} />
    </>
  )
}

export default AboutUsPage
