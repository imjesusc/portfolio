import './Project-card.css'
export const ProjectCard = (props) => {
  const { project } = props
  return (
    <article className="project">
      <figure className="project__card">
        <img className="project__card--img" src={project.img} alt={project.name} />
        <figcaption className="project__card--title">{project.name}</figcaption>
      </figure>

      <div className="modal"></div>
    </article>
  )
}
