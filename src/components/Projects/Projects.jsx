import { ProjectCard } from '../ui/molecules/project-card/Project-card'
import './Projects.css'

export const Projects = (props) => {
  const { projects } = props
  return (
    <section className="main__projects">
      <h2 className="main__projects--title">Mis proyectos</h2>
      <div className="main__projects--list">
        {projects && projects.map((projects) => <ProjectCard key={projects.id} project={projects} />)}
      </div>
    </section>
  )
}
