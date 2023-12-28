import './Footer.css'
import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react'
import { Title } from '../ui/atoms/title/Title'
import PropTypes from 'prop-types'
import { ButtonAnimate } from '../ui/atoms/button-animate/Button-animate'
import { IconFileDownload } from '@tabler/icons-react'

export const Footer = ({ info }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Title tagTitle="h2" title="imjesusc" typeTitle="secondary" className="footer__title" />
        <nav className="footer__nav">
          {info?.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              title={item.name}
              className="footer__social"
              rel="noreferrer"
            >
              {item.name === 'GitHub' ? (
                <IconBrandGithubFilled className="icon" />
              ) : (
                <IconBrandLinkedin className="icon" />
              )}
              <span className="footer__social--name">{item.name}</span>
            </a>
          ))}

          <ButtonAnimate to="/resume.pdf" type="file" download>
            <span>Resume</span>
            <IconFileDownload />
          </ButtonAnimate>
        </nav>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  info: PropTypes.array.isRequired,
}
