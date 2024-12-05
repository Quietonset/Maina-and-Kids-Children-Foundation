import React from 'react'
import Hero from './home/Hero'
import Objectives from './home/Objectives'
import RecentCauses from './home/RecentCauses'
import Portfolio from './home/Portfolio'
import Team from './home/Team'
import Support from './home/Support'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Objectives/>
      <RecentCauses/>
      <Portfolio/>
      <Team/>
      <Support/>
    </div>
  )
}

export default Homepage
