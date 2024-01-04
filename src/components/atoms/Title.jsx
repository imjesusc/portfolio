import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Title = ({ type, title, className }) => {
  const styles = {
    primary: 'text-[75px] tablet:text-[96px] laptop:text-[100px] font-medium',
    secondary: 'text-4xl',
    tertiary: 'text-2xl',
  }

  const Tag = type === 'primary' ? 'h1' : type === 'secondary' ? 'h2' : 'h3'
  return <Tag className={classNames(styles[type], className)}>{title}</Tag>
}

Title.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}
