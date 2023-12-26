import './Modal.css'
import { IconX } from '@tabler/icons-react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Title } from '../../atoms/title/Title'

export const Modal = ({ showModal, setShowModal, project }) => {
  return (
    <>
      <div
        className={classNames('backdrop-modal', showModal ? 'backdrop-modal-active' : '')}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={classNames('modal', showModal ? 'modal-active' : '')}>
        <IconX className="modal__close" onClick={() => setShowModal(false)} />

        <div className="modal__content">
          <Title tagTitle="h3" title={project.name} typeTitle="tertiary" />
          <img className="project__card--img" src={project.img} alt={project.name} />
          <p className="modal__description">{project.description}</p>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
}
