import React from 'react'
import Hero from './home/Hero'
import Objectives from './home/Objectives'
import RecentCauses from './home/RecentCauses'
import Portfolio from './home/Portfolio'
import Team from './home/Team'
import Support from './home/Support'
import DedicatedService from './home/DedicatedService'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Objectives/>
      <DedicatedService/>
      <RecentCauses/>
      <Portfolio/>
      <Team/>
      <Support/>
    </div>
  )
}

export default Homepage
