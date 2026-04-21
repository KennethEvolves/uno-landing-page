import { ProgramSectionModel } from '@/lib/home'
import { Card } from '@/components'

interface Props {
  data: ProgramSectionModel
}

export const ProgramSection = ({ data }: Props) => {
  const { title, programCards } = data

  return (
    <section className="flex flex-col items-center">
      <h1 className="w-full py-16 text-center text-3xl font-extrabold tracking-tight text-uno-secondary uppercase">
        {title}
      </h1>
      <Card data={programCards} />
    </section>
  )
}
