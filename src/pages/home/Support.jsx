import React from 'react';

const Support = () => {
  return (
    <div className='flex flex-col justify-center items-center px-[100px] py-[70px] mb-[50px]'>
      <h3 className='text-[56px] font-bold flex flex-col items-center'>
        <span className='text-[#443838]'>Ready to Support a Greater Cause</span>
        <span className='text-[#336699]'>and Make Great Impact?</span>
      </h3>
      <p className='text-[18px] text-center text-[#443838] my-[20px]'>Be part of a dedicated and impactful organization dedicated to empowering children and girls.</p>
      <button className='w-[528px] h-[56px] rounded-[8px] border border-[#336699] uppercase tracking-widest p-[16px] flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'>
        Send message
      </button>
    </div>
  )
}

export default Support
