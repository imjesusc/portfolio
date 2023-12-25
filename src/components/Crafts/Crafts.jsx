import './Crafts.css'
import { Title } from '../ui/atoms/title/Title'
import { Slider } from '../ui/molecules/slider/Slider'
import PropTypes from 'prop-types'

export const Crafts = ({ crafts }) => {
  return (
    <section className="main__craft">
      <Title tagTitle="h2" title="Crafts" className="main__craft--title" />
      <Slider crafts={crafts} />
    </section>
  )
}

Crafts.propTypes = {
  crafts: PropTypes.array.isRequired,
}
