import classNames from 'classnames'
import './Slider-card.css'
import PropTypes from 'prop-types'

export const SliderCard = ({ project, className }) => {
  return (
    <article className={classNames('slider__card', className)}>
      <figure className="slider__card">
        <img className="slider__card--img" src={project.img} alt={project.name} />
        <figcaption className="slider__card--title">{project.name}</figcaption>
      </figure>
    </article>
  )
}

SliderCard.propTypes = {
  project: PropTypes.object,
  className: PropTypes.string,
}
