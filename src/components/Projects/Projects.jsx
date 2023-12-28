import './Projects.css'
import { Title } from '../ui/atoms/title/Title'
import { ProjectCard } from '../ui/molecules/project-card/Project-card'
import PropTypes from 'prop-types'
import { IconSquareRoundedChevronRight } from '@tabler/icons-react'

export const Projects = ({ projects }) => {
  return (
    <section className="main__projects">
      <Title tagTitle="h2" title="Proyectos" typeTitle="secondary" className="main__projects--title" />
      <div className="main__projects--list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <a
          className="more__projects"
          href="https://github.com/imjesusc"
          target="_blank"
          rel="noreferrer"
          title="Más proyectos."
        >
          <IconSquareRoundedChevronRight className="more__projects--icon" />
        </a>
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}
