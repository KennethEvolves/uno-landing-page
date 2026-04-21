import { CardModel } from '../shared'

export interface HomeModel {
  sections: ProgramSectionModel[]
}

export interface ProgramSectionModel {
  title: string
  programCards: CardModel[]
}
