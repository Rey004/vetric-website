import React from 'react'
import Navbar from '../src/components/navbar/Navbar'
import Hero from '../src/sections/hero-section/Hero'
import Perks from '../src/sections/perks-section/Perks'
import Companies from '../src/sections/companies-section/Companies'
import Pricing from '../src/sections/pricing-section/Pricing'
import Bento from '../src/sections/bento-section/Bento'
import Form from '../src/sections/forms-section/Form'
import Footer from '../src/components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Perks />
      <Companies />
      <Pricing />
      <Bento />
      <Form />
      <Footer />
    </>
  )
}

export default App
