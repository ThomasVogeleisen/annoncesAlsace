/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

export function Error() {
  return (
    <main className="error-content">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}
