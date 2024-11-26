import React from 'react';

const Support = () => {
  return (
    <div className='flex flex-col justify-center items-center px-[100px] py-[70px] mb-[50px] bg-[#c98b04]'>
      <h3 className='sm:text-[20px] sm:text-center sm:whitespace-nowrap md:text-[55px] md:text-center text-[56px] font-bold flex flex-col items-center text-white'>
        <span className=''>Ready to Support a Greater Cause</span>
        <span className=''>and Make Great Impact?</span>
      </h3>
      <p className='sm:text-sm text-[18px] text-center text-white my-[20px]'>Be part of a dedicated and impactful organization dedicated to empowering children and girls.</p>
      <button className='sm:w-11/12 sm-text-sm w-[528px] h-[56px] rounded-[8px] border border-[#336699] capitalize tracking-widest p-[16px] flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'>
       fill our form
      </button>
    </div>
  )
}

export default Support
