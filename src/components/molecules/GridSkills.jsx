import { SkillSvg, Title } from '../atoms'
import PropTypes from 'prop-types'
import classNames from 'classnames'
export const GridSkills = ({ svgSkills }) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-3 w-full overflow-hidden rounded-xl ',
        '[&>:nth-child(1)]:rounded-tl-xl [&>:nth-child(2)]:rounded-tr-xl [&>:nth-child(3)]:rounded-bl-xl [&>:nth-child(5)]:rounded-br-xl',
        'tablet:[&>:nth-child(1)]:rounded-l-xl tablet:[&>:nth-child(5)]:rounded-r-xl tablet:[&>:nth-child(2)]:rounded-none tablet:[&>:nth-child(3)]:rounded-none',
        'tablet:grid-cols-6',
      )}
    >
      <Title
        title="Tecnologías que uso como Front-end."
        type="tertiary"
        className="text-balance col-span-2 flex items-center p-2 laptop:p-10 justify-center text-xl border text-[--muted-foreground]"
      />

      {svgSkills.map((svgSkill) => (
        <SkillSvg
          key={svgSkill.id}
          svgSkill={svgSkill}
          className={classNames('flex aspect-square border items-center justify-center flex-col text-[--sprite-color]')}
        />
      ))}
    </div>
  )
}

GridSkills.propTypes = {
  svgSkills: PropTypes.array.isRequired,
}
