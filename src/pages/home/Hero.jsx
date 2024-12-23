import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
// import images
import image1 from '/assets/hero-img-1.png';
import image2 from '/assets/hero-img-2.png';
import image3 from '/assets/hero-img-3.png';
import image4 from '/assets/hero-img-4.png';

const Hero = () => {
  // const [ isScrolled, setIsScrolled ] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  //   });
  // });


  return (
    <div className="bg-[url('/assets/hero-bg1.png')] h-screen">
      <div className='flex justify-center items-center flex-col py-[100px]'>
        {/* title */}
        <h1 className='text-white uppercase sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center font-moul flex flex-col font-normal mx-2'>
          help a child and be our <span className='sm:mt-0 mt-3'>hero</span>
        </h1>
        {/* subtitle */}
        <p className='sm:text-[13px] text-[22px] font-semibold text-center text-white my-[20px] tracking-wide'>No Act of Kindess, no matter how small is ever wasted.</p>
        {/* button */} 
        <div className='flex sm:flex-col sm:items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px]'>
          <Button content={'donate'} btnStyle={'bg-[#326699] text-white before:bg-[#0f172a] border-white'}/>
          <Button content={'get involved'} btnStyle={'before:bg-[#0f172a] text-white border-white'}/>
        </div>
        {/* images */}
        {/* <div className={`${ isScrolled ? 'slide-in-bottom' : '' } flex mt-[100px] sm:mt-[70px] sm:gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:gap-x-[25px] sm:h-[220px] md:h-[300px] lg:h-[350px] xl:h-[410px] 2xl:h-[410px] xl:w-[872px]`}>
          <img src={image1} alt="Group photo with students" className='object-cover sm:w-[80px] md:w-[150px] sm:rounded-[10px] w-[245px] rounded-[20px] mb-[20px] hover:scale-110 transition duration-300 xl:hover:cursor-cell' />
          <img src={image2} alt="A boy with a laptop" className='object-cover sm:w-[80px] md:w-[150px] sm:rounded-[10px] w-[245px] mt-[25px] rounded-[20px] hover:scale-110 transition duration-300 xl:hover:cursor-cell' />
          <img src={image3} alt="Group photo with female locals" className='object-cover sm:w-[80px] md:w-[150px] sm:rounded-[10px] w-[245px] rounded-[20px] mb-[20px] hover:scale-110 transition duration-300 xl:hover:cursor-cell' />
          <img src={image4} alt="Two kids writing and studying" className='object-cover sm:w-[80px] md:w-[150px] sm:rounded-[10px] w-[245px] mt-[25px] rounded-[20px] hover:scale-110 transition duration-300 xl:hover:cursor-cell' />
        </div> */}
      </div>
    </div>
  )
}

export default Hero
