import './style.scss'

export function NoResults() {
  return (
    <section className="no-result no-result-hidden">
      <h2>
        Aucune recette ne contient '<span id="searchValue"></span>' vous pouvez
        chercher « tarte aux pommes », « poisson », etc.
      </h2>
    </section>
  )
}
