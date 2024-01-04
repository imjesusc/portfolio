import PropTypes from 'prop-types'
import { IconBrandJavascript } from '@tabler/icons-react'
import classNames from 'classnames'
import { IconBrandNextjs } from '@tabler/icons-react'
import { IconBrandTailwind } from '@tabler/icons-react'
import { IconBrandReact } from '@tabler/icons-react'
export const Badge = ({ text, iconId, className }) => {
  const icons = [
    { id: '1', icon: <IconBrandNextjs className="w-5 h-5" /> },
    { id: '2', icon: <IconBrandTailwind className="w-5 h-5" /> },
    { id: '3', icon: <IconBrandJavascript className="w-5 h-5" /> },
    { id: '4', icon: <IconBrandReact className="w-5 h-5" /> },
  ]

  const Icon = icons.find((i) => i.id === iconId)?.icon

  return (
    <div
      className={classNames(
        'rounded-full px-3 font-medium text-sm py-1',
        'flex gap-2 items-center justify-center w-auto max-h-[30px]',
        'bg-[--muted] border border-[--primary] transition-colors duration-500 hover:bg-[--destructive-foreground] text-sm text-[--primary]',
        className,
      )}
    >
      {Icon}
      {text}
    </div>
  )
}

Badge.propTypes = {
  text: PropTypes.string,
  iconId: PropTypes?.string,
  className: PropTypes?.string,
  color: PropTypes?.string,
}
