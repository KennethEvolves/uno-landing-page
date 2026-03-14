import { getDegree, getDegreeSeo } from '@/lib'

type PageParams = Promise<{ slug: string }>

interface Props {
  params: PageParams
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const degree = await getDegreeSeo(slug)
  const { seo } = degree
  return {
    title: seo.title as string,
    description: seo.description as string,
  }
}

export const DegreePage = async ({ params }: Props) => {
  const { slug } = await params
  const degree = await getDegree(slug)
  const { name } = degree
  return (
    <main className="mt-18">
      <h1>{name}</h1>
    </main>
  )
}

export default DegreePage
