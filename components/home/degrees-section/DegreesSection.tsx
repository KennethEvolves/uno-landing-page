import { DegreesSectionType } from '@/components/home/Home.types'
import { DegreeCard } from './DegreeCard'

interface Props {
  data: DegreesSectionType
}

export const DegreesSection = ({ data }: Props) => {
  const { title, degrees } = data

  return (
    <section className="flex flex-col items-center bg-gray-50">
      <h1 className="w-full py-16 text-center text-3xl font-extrabold tracking-tight text-uno-secondary uppercase">
        {title}
      </h1>
      <DegreeCard degrees={degrees} />
    </section>
  )
}
