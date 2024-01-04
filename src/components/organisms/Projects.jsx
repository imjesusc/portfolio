import { Card, Title } from '../atoms'
import PropTypes from 'prop-types'
import classNames from 'classnames'
export const Projects = ({ projects }) => {
  return (
    <section className="p-4 grid gap-4 w-full max-w-[--max-w-screen] m-auto">
      <Title type="secondary" title="Proyectos" className="font-semibold" />

      <div className={classNames('grid-cols-1', 'm-auto grid', 'tablet:grid-cols-2 gap-4', 'laptop:grid-cols-3')}>
        {projects.map((project) => (
          <Card
            key={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
            demo={project.demo}
            repository={project.repository}
            tecnologies={project.tecnologies}
          />
        ))}
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array,
}
