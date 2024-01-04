import PropTypes from 'prop-types'

export const Button = ({ children, onClick, text, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text || children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}
