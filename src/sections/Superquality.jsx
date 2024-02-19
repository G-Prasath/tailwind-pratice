import Buttons from "../components/Buttons"
import {shoe8} from "../assets/images"

const Superquality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You <span className='text-coral-red inline-block'>Super</span>
          <br />
          <span className='text-coral-red inline-block'>Quality</span> Shoes

        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla sequi illum beatae ut dolores reiciendis, quod doloremque error esse!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magnam.</p>
        <div className="mt-11">
          <Buttons label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} 
          alt="show" 
          width={570}
          height={522}
          />
      </div>
    </section>
  )
}

export default Superquality