import { Title } from './Title'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Badge } from './Badge'
import { Link } from './Link'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconExternalLink } from '@tabler/icons-react'
export const Card = ({ title, description, tecnologies, img, repository, demo, className, index }) => {
  return (
    <article
      className={classNames(
        'rounded-2xl p-4 grid gap-2 overflow-hidden relative group',
        'border-2  border-[--border]',
        className,
      )}
    >
      {index === 1 ? (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
      ) : index === 2 ? (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      )}

      <figure className="h-[245px] rounded-2xl overflow-hidden  transition-opacity duration-300 ">
        <img className="w-full h-full object-cover" src={img} alt={title} loading="lazy" />
      </figure>

      <div className="absolute top-3 right-3  gap-3 items-center flex h-auto bg-[--primary-foreground] rounded-full p-1">
        <Link
          type="animate"
          href={repository}
          className="rounded-full block h-8 w-8 p-1.5 bg-[--destructive-foreground] hover:bg-[--muted] transition-colors shadow-sm"
          title="Repositorio"
        >
          <IconBrandGithub className="w-full h-full" />
        </Link>
        <Link
          type="animate"
          href={demo}
          className="rounded-full block h-8 w-8 p-1.5 bg-[--destructive-foreground] hover:bg-[--primary-foreground] transition-colors shadow-sm"
          title="Demo"
        >
          <IconExternalLink className="w-full h-full text-[--primary]" />
        </Link>
      </div>

      <div className="relative z-20">
        <div>
          <Title type="tertiary" title={title} className="font-semibold  text-[--foreground]" />
          <p className="text-base text-balance text-[--muted-foreground] font-medium">{description}</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tecnologies &&
            tecnologies.map((tec) => <Badge key={tec.id} text={tec.name} color={tec.color} iconId={tec.id} />)}
        </div>
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
  index: PropTypes.number,
}
