import './Project-card.css'
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
export const ProjectCard = ({ project, className }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.body.style.setProperty('--toggle-overflow', showModal ? 'hidden' : 'auto')
  }, [showModal])

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
