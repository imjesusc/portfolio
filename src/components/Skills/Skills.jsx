import './Skills.css'
import { Title } from '../ui/atoms/title/Title'
import PropTypes from 'prop-types'
import { SpriteSvg } from '../ui/atoms/sprite-svg/Sprite-svg.css/Sprite-svg'

export const Skills = ({ svgSkills }) => {
  return (
    <section className="main__skills">
      <Title tagTitle="h2" title="Habilidades" typeTitle="secondary" className="main__skills--title" />
      <div className="skill__container">
        <h4 className="skill__container--title">
          Tecnologías que uso <span>como Front-end.</span>
        </h4>

        {svgSkills.map((svgSkill) => (
          <SpriteSvg key={svgSkill.id} svgSkill={svgSkill} className="svg__skill" />
        ))}
      </div>
    </section>
  )
}

Skills.propTypes = {
  svgSkills: PropTypes.array.isRequired,
}
