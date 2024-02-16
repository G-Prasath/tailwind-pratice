import React from 'react'
import { Hero, CustomerReview, Footer, PopularProducts, Services, SpecialOffer, Subcribe, Superquality } from './sections/index'
import Nav from './components/Navbar'

const App = () => {
  return (
    <main className='relative'>

      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>

      <section className='padding'>
        <PopularProducts />
      </section>

      <section className='padding'>
        <Superquality />
      </section>

      <section className='padding'>
        <Services />
      </section>

      <section className='padding'>
        <SpecialOffer />
      </section>

      <section className='bg-pale-blue padding'>
        <CustomerReview />
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subcribe />
      </section>

      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer />
      </section>

    </main>
  )
}

export default App