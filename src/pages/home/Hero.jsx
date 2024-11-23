import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
// import images
import image1 from '/assets/hero-img-1.png';
import image2 from '/assets/hero-img-2.png';
import image3 from '/assets/hero-img-3.png';
import image4 from '/assets/hero-img-4.png';

const Hero = () => {
  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });


  return (
    <div className="bg-[url('/assets/hero-bg.png')]">
      <div className='flex justify-center items-center flex-col py-[100px]'>
        {/* title */}
        <h1 className='text-white uppercase text-7xl text-center font-moul flex flex-col font-normal'>
          help a child and be our <span className='mt-3'>hero</span>
        </h1>
        {/* subtitle */}
        <p className='text-[22px] font-semibold text-center text-[#0f1729] my-[20px] tracking-wide'>No Act of Kindess, no matter how small is ever wasted.</p>
        {/* button */} 
        <div className='flex gap-[30px] w-[542px]'>
          <Button content={'donate'} btnStyle={'bg-[#326699] text-white before:bg-[#0f172a] border-white'}/>
          <Button content={'get involved'} btnStyle={'before:bg-[#0f172a] text-white border-white'}/>
        </div>
        {/* images */}
        <div className={`${ isScrolled ? 'slide-in-bottom' : '' } flex mt-[100px] gap-x-[20px] h-[410px] w-[872px]`}>
          <img src={image1} alt="Group photo with students" className='object-cover w-[245px] rounded-[20px] mb-[20px] hover:scale-110 transition duration-300 hover:cursor-cell' />
          <img src={image2} alt="A boy with a laptop" className='object-cover w-[245px] mt-[25px] rounded-[20px] hover:scale-110 transition duration-300 hover:cursor-cell' />
          <img src={image3} alt="Group photo with female locals" className='object-cover w-[245px] rounded-[20px] mb-[20px] hover:scale-110 transition duration-300 hover:cursor-cell' />
          <img src={image4} alt="Two kids writing and studying" className='object-cover w-[245px] mt-[25px] rounded-[20px] hover:scale-110 transition duration-300 hover:cursor-cell' />
        </div>
      </div>
    </div>
  )
}

export default Hero
