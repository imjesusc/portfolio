import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react'
import './Nav.css'
export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="https://github.com/imjesusc">
            <IconBrandGithubFilled className="icon" />
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.linkedin.com/in/iamjesusc/">
            <IconBrandLinkedin className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
