import './Skills.css'
import classNames from 'classnames'
import { Title } from '../ui/atoms/title/Title'
import PropTypes from 'prop-types'
import { SpriteSvg } from '../ui/atoms/sprite-svg/Sprite-svg.css/Sprite-svg'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
export const Skills = ({ svgSkills }) => {
  const [tecnologieName, setTecnologieName] = useState({ name: 'Javascript', color: '#f0db4f' })
  const [isHover, setIsHover] = useState(false)
  const getTecnologieName = ({ name, color }) => {
    setTecnologieName({ name, color })
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
          Me desenvuelvo en{' '}
          <span
            className={classNames('hability__skill--name', isHover ? 'new-element' : '')}
            style={{ color: tecnologieName.color }}
            ref={spanSkill}
          >
            <strong className="hability__skill" style={{ color: 'black' }}>
              Tecnologías
            </strong>
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
