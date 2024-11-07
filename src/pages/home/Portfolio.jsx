import React from 'react'
import SwiperComponent from '../../components/SwiperComponent'

const Portfolio = () => {
  return (
    <div className='flex justify-center items-center flex-col py-[90px] px-[70px]'>
      {/* subtitle */}
      <p className='font-bold text-xl uppercase tracking-widest text-[#336699]'>portfolio</p>
      {/* bigger text */}
      <h3 className='text-[56px] font-bold text-[#0F172A] text-center'>View our work through the lense <br /> of a camera</h3>
      <SwiperComponent/>
    </div>
  )
}

export default Portfolio
