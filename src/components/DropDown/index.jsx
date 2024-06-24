import './style.scss'
//importer une image
import dropdownIco from '../../assets/icons/dropdown_ico.svg'
import searchIco from '../../assets/icons/dopdown-loupe.svg'
import closeIco from '../../assets/icons/close.svg'

export function DropDown() {
  return (
    <section className="filtres">
      {/* <!-- Ingrédients --> */}
      <div className="dropdown dropdown-ingredients">
        <h2 className="dropdown-title">
          Ingrédients{' '}
          <img
            className="dropdown-icon"
            src={dropdownIco}
            alt="dropdown icone"
          />
        </h2>
        <input
          id="search-ingredients"
          className="dropdown-search-bar"
          type="text"
          maxLength="15"
        />
        <img
          className="dropdown-search-icon"
          src={searchIco}
          alt="search icone"
        />
        <img
          className="dropdown-close-icon search-close-btn-hidden"
          src={closeIco}
          alt="search icone"
        />
        {/* <!-- tag list --> */}
        <div
          id="tag-ingredients-list"
          className="dropdown-element-tag-list"
        ></div>
        {/* <!-- element list --> */}
        <div id="ingredients-list" className="dropdown-element-list"></div>
      </div>
      {/* <!-- Appareils --> */}
      <div className="dropdown dropdown-appareils">
        <h2 className="dropdown-title">
          Appareils{' '}
          <img
            className="dropdown-icon"
            src={dropdownIco}
            alt="dropdown icone"
          />
        </h2>
        <input
          id="search-appareils"
          className="dropdown-search-bar"
          type="text"
          maxLength="15"
        />
        <img
          className="dropdown-search-icon"
          src={searchIco}
          alt="search icone"
        />
        <img
          className="dropdown-close-icon search-close-btn-hidden"
          src={closeIco}
          alt="search icone"
        />
        {/* <!-- tag list --> */}
        <div
          id="tag-appareils-list"
          className="dropdown-element-tag-list"
        ></div>
        {/* <!-- element list --> */}
        <div id="appareils-list" className="dropdown-element-list"></div>
      </div>
      {/* <!-- Ustensils --> */}
      <div className="dropdown dropdown-ustensils">
        <h2 className="dropdown-title">
          Ustensils{' '}
          <img
            className="dropdown-icon"
            src={dropdownIco}
            alt="dropdown icone"
          />
        </h2>
        <input
          id="search-ustensils"
          className="dropdown-search-bar"
          type="text"
          maxLength="15"
        />
        <img
          className="dropdown-search-icon"
          src={searchIco}
          alt="search icone"
        />
        <img
          className="dropdown-close-icon search-close-btn-hidden"
          src={closeIco}
          alt="search icone"
        />
        {/* <!-- tag list --> */}
        <div
          id="tags-ustensils-list"
          className="dropdown-element-tag-list"
        ></div>
        {/* <!-- element list --> */}
        <div id="ustensiles-list" className="dropdown-element-list"></div>
      </div>
      {/* <!-- number of recipes --> */}
      <p className="nb-recettes">
        <span className="numberOfResults">00</span> recettes
      </p>
    </section>
  )
}
