import classNames from 'classnames'
import PropTypes from 'prop-types'

export const Link = ({ type, href, target, isDownload, className, children, ...props }) => {
  const styles = {
    primary: 'px-2 py-1 border flex cursor-pointer items-center text-base',
    secondary: 'hover:underline  flex cursor-pointer items-center text-base',
    animate:
      'flex items-center justify-center  gap-2.5 relative cursor-pointer transition-opacity duration-300 ease-in-out select-none hover:opacity-90',
  }

  const pressAnimation = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    let replies = document.createElement('span')
    replies.style.left = x + 'px'
    replies.style.top = y + 'px'

    replies.classList.add(
      'absolute',
      'bg-gray-200',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'pointer-events-none',
      'rounded-full',
      'animate-press',
    )
    event.currentTarget.appendChild(replies)

    setTimeout(() => {
      replies.remove()
    }, 500)
  }

  return (
    <a
      className={classNames(styles[type], className)}
      href={href}
      download={isDownload}
      onClick={pressAnimation}
      target={target}
      {...props}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  target: PropTypes.string,
  isDownload: PropTypes.bool,
  title: PropTypes.string,
}
