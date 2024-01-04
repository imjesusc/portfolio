import { Title } from '../atoms'
import PropTypes from 'prop-types'
import { GridSkills } from '../molecules'

export const Skills = ({ svgSkills }) => {
  return (
    <section className="p-4 max-w-[--max-w-screen] m-auto grid gap-4 w-full">
      <Title type="secondary" title="Habilidades" className="font-semibold" />

      <GridSkills svgSkills={svgSkills} />
    </section>
  )
}

Skills.propTypes = {
  svgSkills: PropTypes.array.isRequired,
}
