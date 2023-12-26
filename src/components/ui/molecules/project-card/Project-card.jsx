import './Project-card.css'
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import classNames from 'classnames'
import PropTypes from 'prop-types'
export const ProjectCard = ({ project, className }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <article className={classNames('project__card', className)}>
      <figure className="project__card">
        <img onClick={() => setShowModal(true)} className="project__card--img" src={project.img} alt={project.name} />
        <figcaption className="project__card--title">{project.name}</figcaption>
      </figure>

      <Modal project={project} showModal={showModal} setShowModal={setShowModal} />
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  className: PropTypes.string,
}
