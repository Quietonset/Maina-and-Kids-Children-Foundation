import React from 'react';
import overlayImg from '/assets/10th-Anniversary.png'

const DedicatedService = () => {
  return (
    <div className='flex justify-center items-center flex-col py-[80px] gap-[10px]'>
      {/* subtitle */}
      <p className='text-[#336699] font-semibold text-xl font-montserrat'>A decade of impact</p>
      {/* bigger text */}
      <h3 className='sm:text-[30px] sm:text-center md:text-[40px] md:text-center lg:text-[50px] xl:text-[56px] 2xl:text-[60px] font-extrabold text-[#0F172A]'>10 Years Of Dedicated Service</h3>
      <div className='dedicated-service-bg w-full flex justify-center items-center'>
        <img src={overlayImg} alt="Our 10th Anniversary" />
      </div>
    </div>
  )
}

export default DedicatedService
