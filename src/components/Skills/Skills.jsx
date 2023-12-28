import './Skills.css'
import classNames from 'classnames'
import { Title } from '../ui/atoms/title/Title'
import PropTypes from 'prop-types'
import { SpriteSvg } from '../ui/atoms/sprite-svg/Sprite-svg.css/Sprite-svg'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { formatHsl } from '../../utilities/format-hsl.utilitie'
export const Skills = ({ svgSkills }) => {
  const [tecnologieName, setTecnologieName] = useState({})
  const [isHover, setIsHover] = useState(false)
  const getTecnologieName = ({ name, hslColor }) => {
    setTecnologieName({ name, hslColor })
  }

  const spanSkill = useRef(null)
  useEffect(() => {
    const spanSkillCurrent = spanSkill.current

    const addSkillElement = () => {
      if (spanSkill.current.children.length > 1) {
        spanSkillCurrent.removeChild(spanSkill.current.firstChild)
      }

      const span = document.createElement('span')
      span.classList.add('hability__skill')
      span.innerHTML = tecnologieName.name
      span.style.transform = 'rotateX(270deg) translateZ(0rem)'
      spanSkillCurrent.insertBefore(span, spanSkill.current.firstChild)
    }

    addSkillElement()
  }, [tecnologieName, isHover])

  return (
    <section className="main__skills">
      <Title tagTitle="h2" title="Habilidades" typeTitle="secondary" />
      <div className="skill__container">
        <h4 className="skill__container--title">
          Tecnologías que uso{' '}
          <span
            className={classNames('hability__skill--name', isHover ? 'new-element' : '')}
            ref={spanSkill}
            style={{ '--sprite-name-color': formatHsl(tecnologieName.hslColor) }}
          >
            <strong className="hability__skill">{tecnologieName.name ? tecnologieName.name : 'como Front-end.'}</strong>
          </span>
        </h4>

        {svgSkills.map((svgSkill) => (
          <SpriteSvg
            key={svgSkill.id}
            svgSkill={svgSkill}
            className="svg__skill"
            fnGetName={getTecnologieName}
            setHover={setIsHover}
          />
        ))}
      </div>
    </section>
  )
}

Skills.propTypes = {
  svgSkills: PropTypes.array.isRequired,
}
