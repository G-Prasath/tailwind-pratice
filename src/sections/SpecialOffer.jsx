import { offer } from '../assets/images'
import Buttons from '../components/Buttons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Offers" width={773} height={687} className='object-contain w-full' />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block'>Special</span> Offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla sequi illum beatae ut dolores reiciendis, quod doloremque error esse!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magnam.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Buttons label="View Details" />
          <Buttons label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="border-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer