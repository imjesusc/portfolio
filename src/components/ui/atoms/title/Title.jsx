import classNames from 'classnames'
import './Title.css'
import PropTypes from 'prop-types'
export const Title = ({ tagTitle = '', title = '', className = '', style = {} }) => {
  const Tag = tagTitle || 'h2'
  return (
    <Tag
      className={classNames(Tag === 'h1' ? 'title' : Tag === 'h2' ? 'title--secondary' : 'title--tertiary', className)}
      style={style}
    >
      {title}
    </Tag>
  )
}

Title.propTypes = {
  tagTitle: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}
