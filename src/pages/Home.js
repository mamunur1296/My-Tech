import React from 'react'
import HeroSection from '../components/Home/HeroSection.js'
import Consulting from '../components/Home/Consulting.js'
import Services from '../components/Home/Services.js'
import AssurancePlan from '../components/Home/AssurancePlan.js'
import Experience from '../components/Home/Experience.js'
import Recommended from '../components/Home/Recommended.js'
import Reviews from '../components/Home/Reviews.js'




export default function Home() {
  return (
    <div className='bg-gray-100'>
      <HeroSection />
      <Consulting />
      <Services />
      <AssurancePlan />
      <Experience />
      <Reviews />
      <Recommended />
    </div>
  )
}
