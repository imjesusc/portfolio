import './Project-card.css'
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
export const ProjectCard = ({ project, className }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const body = document.body

    if (showModal) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      body.style.setProperty('--toggle-overflow', 'hidden')
      body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      body.style.setProperty('--toggle-overflow', 'auto')
      body.style.paddingRight = '0'
    }
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
