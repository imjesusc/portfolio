import classNames from 'classnames'
import React from 'react'
import './Slider-card.css'

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
