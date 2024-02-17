import Buttons from "../components/Buttons"

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
    </section>
  )
}

export default Superquality