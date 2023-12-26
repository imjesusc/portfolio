import './Button-animate.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const ButtonAnimate = ({ btnType, type, to, children, ...props }) => {
  const pressButton = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    let replies = document.createElement('span')
    replies.style.left = x + 'px'
    replies.style.top = y + 'px'

    replies.classList.add('replies')
    event.currentTarget.appendChild(replies)

    setTimeout(() => {
      replies.remove()
    }, 500)
  }

  return to ? (
    <a
      href={to}
      type={type}
      target="_blank"
      className={classNames('pressBtn', `btn__${btnType}`)}
      onClick={pressButton}
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  ) : (
    <button className={classNames('pressBtn', `btn__${btnType}`)} onClick={pressButton}>
      {children}
    </button>
  )
}

ButtonAnimate.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  to: PropTypes.string,
  btnType: PropTypes.string,
}

export default ButtonAnimate
