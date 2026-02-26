import { DegreesSection, DegreesSectionType } from '@/components/home'
import { getHomePage } from '@/lib/strapi/home'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage()
  return {
    title: data.title || 'Universidad de Oriente',
    description:
      data.description || 'Sitio Web Oficial de la Universidad de Oriente',
  }
}

export default async function Home() {
  const { sections } = await getHomePage()

  const degreesSectionData = sections.find(
    (s): s is DegreesSectionType => s.__component === 'sections.degrees',
  )

  return (
    <>
      <div className="m-18"></div>
      {degreesSectionData ? (
        <DegreesSection data={degreesSectionData} />
      ) : (
        <p className="p-5 text-center">
          No se encontró la sección de Oferta Académica
        </p>
      )}
      <div className="fixed bottom-1 left-1 z-50 rounded bg-gray-800 p-1 text-xs font-extrabold text-white opacity-70">
        <span className="sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
        <span className="hidden 2xl:block">2xl</span>
      </div>
    </>
  )
}
