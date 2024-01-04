import { Title } from './Title'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Badge } from './Badge'
import { Link } from './Link'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconExternalLink } from '@tabler/icons-react'
export const Card = ({ title, description, tecnologies, img, repository, demo, className }) => {
  return (
    <article
      className={classNames('rounded-2xl overflow-hidden relative group', 'border-2  border-[--border]', className)}
    >
      <figure className="h-[245px] group-hover:opacity-10 transition-opacity duration-300 opacity-50">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </figure>
      <div
        className={classNames(
          'absolute z-10 top-0 left-0 w-full h-full',
          'translate-y-[50%] group-hover:translate-y-0 transition-transform duration-300',
          'bg-gradient-to-t from-white to-white/0  group-hover:to-white/10',
          'px-10 py-3 flex flex-col gap-2',
        )}
      >
        <div className="absolute bottom-3 right-3  gap-3 items-center flex h-auto">
          <Link
            type="animate"
            href={repository}
            className="rounded-full block h-12 w-12 p-3 bg-[--destructive-foreground] hover:bg-[--muted] transition-colors"
          >
            <IconBrandGithub className="w-full h-full" />
          </Link>
          <Link
            type="animate"
            href={demo}
            className="rounded-full block h-12 w-12 p-3 bg-[--destructive-foreground] hover:bg-[--primary-foreground] transition-colors"
          >
            <IconExternalLink className="w-full h-full text-[--primary]" />
          </Link>
        </div>

        <div className=" flex flex-col gap-1.5">
          <Title type="tertiary" title={title} className="font-semibold  text-[--foreground]" />

          <div className="flex gap-2 flex-wrap">
            {tecnologies &&
              tecnologies.map((tec) => <Badge key={tec.id} text={tec.name} color={tec.color} iconId={tec.id} />)}
          </div>
        </div>

        <p className="text-base text-balance text-[--muted-foreground] font-medium">{description}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tecnologies: PropTypes.array,
  img: PropTypes.string,
  repository: PropTypes.string,
  demo: PropTypes.string,
  className: PropTypes.string,
}
