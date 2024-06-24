import './style.scss'

export function Header() {
  return (
    <header>
      {/* LOGO */}
      <div className="bloc-logo">
        <h2>Les Petites Anonnces</h2>
      </div>
      <h1>
        CHERCHEZ ET TROUVEZ CE QUE VOUS VOULEZ
        <br />
        DANS LES PETITES ANNONCES DU CENTRE ALSACE
      </h1>
      {/* BARRE DE RECHERCHE */}
      <div className="bloc-search-bar">
        <form action="#">
          <label htmlFor="search-bar"></label>
          <input
            type="text"
            id="search-bar"
            placeholder="Rechercher une babysitter, une voiture, ..."
            maxLength="70"
          />
          <input className="btn-search" type="submit" value="" />
          <img
            className="search-close-btn search-close-btn-hidden"
            src="../assets/icons/close.svg"
            alt="search icone"
          />
        </form>
      </div>
    </header>
  )
}
