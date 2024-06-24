import { Header } from '../../components/Header'
import { Filters } from '../../components/Filters'
import { Tag } from '../../components/Tags'
import { NoResults } from '../../components/NoResults'
import { BlocRecettes } from '../../components/BlocRecettes'

export function Home() {
  return (
    <>
      <Header />
      <Filters />
      <Tag />
      <NoResults />
      <BlocRecettes />
    </>
  )
}
