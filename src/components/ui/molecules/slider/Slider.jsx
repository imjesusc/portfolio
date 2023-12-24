import { SliderCard } from '../../atoms/slider-card/Slider-card'
import './Slider.css'
export const Slider = ({ crafts }) => {
  return (
    <div className="slider-container">
      {crafts && crafts.map((craft) => <SliderCard key={craft.id} project={craft} className="slider-item" />)}
    </div>
  )
}
