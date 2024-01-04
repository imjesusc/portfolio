import { IconArrowUpRight } from '@tabler/icons-react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from './Link'

export const LinkColumns = ({ info }) => {
  return (
    <nav className="flex flex-col gap-3">
      {info?.map((item) => (
        <Link
          key={item.id}
          href={item.name === 'Email' ? `mailto:${item.url}` : item.url}
          type="secondary"
          target="_blank"
          className={classNames('hover:opacity-70 transition-opacity ')}
        >
          <span>{item.name}</span>
          {item.name === 'Email' && (
            <>
              {': '}
              <span className="text-[--text-accent] ml-2">{item.url}</span>
            </>
          )}
          <IconArrowUpRight className="ml-2 w-3 h-3" />
        </Link>
      ))}
    </nav>
  )
}

LinkColumns.propTypes = {
  info: PropTypes.array.isRequired,
}
