import { Title } from '../ui/atoms/title/Title'
import './Header.css'
export const Header = () => {
  return (
    <header className="main-header">
      <Title tagTitle="h1" title="Iamjesusc" typeTitle="primary" style={{ fontSize: '7rem' }} />
      <div>
        <p className="main-header-info">Desarrollador front-end con experiencia de 1 año.</p>
        <p className="main-header-info">Entusiasta con la codificación y las nuevas tecnologías.</p>
      </div>
    </header>
  )
}
