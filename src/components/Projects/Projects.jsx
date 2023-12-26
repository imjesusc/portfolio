import { Title } from '../ui/atoms/title/Title'
import { ProjectCard } from '../ui/molecules/project-card/Project-card'
import './Projects.css'
import PropTypes from 'prop-types'

export const Projects = ({ projects }) => {
  return (
    <section className="main__projects">
      <Title tagTitle="h2" title="Proyectos" typeTitle="secondary" />
      <div className="main__projects--list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}
