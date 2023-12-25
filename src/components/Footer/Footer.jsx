import './Footer.css'
import { IconBrandGithubFilled } from '@tabler/icons-react'
import { IconBrandLinkedin } from '@tabler/icons-react'
import { Title } from '../ui/atoms/title/Title'

export const Footer = (props) => {
  const { info } = props
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <Title tagTitle="h2" title="imjesusc" />
        </div>
        <nav className="footer__nav">
          {info?.map((item) => (
            <a key={item.id} href={item.url} title={item.name} className="footer__item">
              {item.name === 'GitHub' ? (
                <IconBrandGithubFilled className="icon" />
              ) : (
                <IconBrandLinkedin className="icon" />
              )}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
