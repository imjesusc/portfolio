import { useRef } from 'react'
import { useCarousel } from '../../hooks/useCarousel'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
export const CraftsCarrusel = ({ crafts }) => {
  const wrapper = useRef(null)
  const carrusel = useRef(null)
  const cardRef = useRef(null)

  const { dragStart, dragging, infinityScroll, toLeft, toRight, autoPlay, timeoutId } = useCarousel(
    wrapper,
    carrusel,
    cardRef,
  )

  return (
    <div
      className="max-w-[--max-w-screen] m-auto w-full  relative"
      ref={wrapper}
      onMouseEnter={() => clearTimeout(timeoutId)}
      onMouseLeave={autoPlay}
    >
      <span
        className={classNames(
          'absolute top-1/2 translate-y-[-50%] left-0 laptop:-left-16 border-2 block',
          ' bg-white p-1 hover:bg-gray-100  duration-300 rounded-full cursor-pointer',
        )}
      >
        <IconArrowNarrowLeft onClick={toLeft} />
      </span>
      <ul
        className={classNames(
          'grid grid-flow-col max-h-[300px]',
          'gap-4 overflow-x-auto',
          'snap-x scroll-smooth',
          'auto-cols-[100%]',
          'tablet:auto-cols-[calc(100%/2_-_12px)]',
          'laptop:auto-cols-[calc(100%/3_-_12px)] carrusel',
        )}
        ref={carrusel}
        onMouseMove={dragging}
        onMouseDown={dragStart}
        onScroll={infinityScroll}
      >
        {crafts &&
          crafts.map((craft, index) => (
            <li
              key={craft.id}
              className="rounded-2xl overflow-hidden snap-start select-none "
              ref={index === 0 ? cardRef : null}
              draggable={false}
            >
              <article className={classNames('w-full h-full overflow-hidden rounded-xl')} draggable={false}>
                <figure className="w-full h-auto " draggable={false}>
                  <img className="w-full h-[230px] rounded-2xl" src={craft.img} alt={craft.name} draggable={false} />
                  <figcaption className="my-1 text-base text-[--muted-foreground]" draggable={false}>
                    {craft.name}
                  </figcaption>
                </figure>
              </article>
            </li>
          ))}
      </ul>
      <span
        className={classNames(
          'absolute top-1/2 translate-y-[-50%] right-0 laptop:-right-16 border-2 block bg-white',
          'p-1 hover:bg-gray-100 transition-bg duration-300 rounded-full cursor-pointer',
        )}
      >
        <IconArrowNarrowRight onClick={toRight} />
      </span>
    </div>
  )
}

CraftsCarrusel.propTypes = {
  crafts: PropTypes.array,
}
