import Servicecard from '../components/Servicecard'
import {services} from '../constance'
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {
        services.map((items) => (
          <Servicecard
            key={items.label}
            {...items}
          />
        ))
      }
    </section>
  )
}

export default Services