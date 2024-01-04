import { Title } from '../atoms'
import { CraftsCarrusel } from '../molecules/CraftsCarrusel'
import PropTypes from 'prop-types'

export const Crafts = ({ crafts }) => {
  return (
    <section className="p-4 grid gap-4 max-w-[--max-w-screen] m-auto">
      <Title type="secondary" title="Crafts" className="font-semibold m-auto w-full" />
      <CraftsCarrusel crafts={crafts} />
    </section>
  )
}

Crafts.propTypes = {
  crafts: PropTypes.array.isRequired,
}
