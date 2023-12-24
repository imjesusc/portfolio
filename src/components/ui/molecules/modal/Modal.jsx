import './Modal.css'
import { IconX } from '@tabler/icons-react'
import classNames from 'classnames'

export const Modal = (props) => {
  return (
    <>
      <div
        className={classNames('backdrop-modal', props.showModal ? 'backdrop-modal-active' : '')}
        onClick={() => props.setShowModal(false)}
      ></div>
      <div className={classNames('modal', props.showModal ? 'modal-active' : '')}>
        <IconX className="modal__close" onClick={() => props.setShowModal(false)} />

        <div className="modal__content">
          <h2 className="project__card--title">{props.project.name}</h2>
          <img className="project__card--img" src={props.project.img} alt={props.project.name} />
          <p className="modal__description">{props.project.description}</p>
        </div>
      </div>
    </>
  )
}
