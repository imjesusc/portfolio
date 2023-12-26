import './Title.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
export const Title = ({ tagTitle, className, title, typeTitle, style }) => {
  const Tag = tagTitle || 'h2'
  return (
    <Tag className={classNames(`title__${typeTitle}`, className)} style={style}>
      {title}
    </Tag>
  )
}

Title.propTypes = {
  tagTitle: PropTypes.string,
  title: PropTypes.string,
  typeTitle: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}
