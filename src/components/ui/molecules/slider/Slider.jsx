import './Slider.css'
import { useEffect, useRef } from 'react'
import { SliderCard } from '../../atoms/slider-card/Slider-card'

export const Slider = ({ crafts }) => {
  const sliderContainer = useRef(null)
  const slider = useRef(null)

  useEffect(() => {
    const initAnimation = () => {
      sliderContainer.current.setAttribute('data-animated', true)

      const originalSliderItems = Array.from(slider.current.children)

      originalSliderItems.forEach((item) => {
        const duplicateItem = item.cloneNode(true)
        duplicateItem.setAttribute('aria-hidden', true)
        slider.current.appendChild(duplicateItem)
      })
    }

    initAnimation()
  }, [])

  return (
    <div className="slider-container" ref={sliderContainer} data-direction="left" data-speed="slow">
      <ul className="slider tags-list" ref={slider}>
        {crafts &&
          crafts.map((craft) => (
            <li key={craft.id} className="slider-item" title={craft.name}>
              <SliderCard project={craft} />
            </li>
          ))}
      </ul>
    </div>
  )
}
