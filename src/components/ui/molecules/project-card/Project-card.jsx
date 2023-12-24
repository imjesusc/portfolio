import { useState } from 'react'
import { Modal } from '../modal/Modal'
import './Project-card.css'
export const ProjectCard = (props) => {
  const { project } = props
  const [showModal, setShowModal] = useState(false)
  return (
    <article className="project">
      <figure className="project__card">
        <img onClick={() => setShowModal(true)} className="project__card--img" src={project.img} alt={project.name} />
        <figcaption className="project__card--title">{project.name}</figcaption>
      </figure>

      <Modal project={project} showModal={showModal} setShowModal={setShowModal} />
    </article>
  )
}
