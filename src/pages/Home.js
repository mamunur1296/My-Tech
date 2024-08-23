import React from 'react'
import HeroSection from '../components/Home/HeroSection.js'
import Consulting from '../components/Home/Consulting.js'
import Services from '../components/Home/Services.js'




export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <Consulting />
      <Services />
    </div>
  )
}
