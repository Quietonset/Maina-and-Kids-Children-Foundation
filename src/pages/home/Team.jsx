import React from 'react';
// import images
import speaker1 from '/assets/speaker1.png';
import speaker2 from '/assets/speaker1.png';
import speaker3 from '/assets/speaker1.png';
import speaker4 from '/assets/speaker4.png';
import speaker5 from '/assets/speaker5.png';
import speaker6 from '/assets/speaker6.png';


const Team = () => {
  return (
    <div className='flex justify-center items-center flex-col p-[100px]'>
      {/* heading */}
      <h3 className='text-[56px] font-extrabold text-[#0F172A]'>Meet the team</h3>
      {/* grid box */}
      <div className='grid grid-cols-3 grid-rows-2 gap-[54px] mt-[80px]'>
        <div className='w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]'>
          <img src={ speaker1 } alt="" />
          <p className='text-center text-lg'>Maina Gambo Bawa</p>
          <p className='text-center text-[#0f172a]'>Founder, Executive Director</p>
        </div>
        <div className='w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]'>
          <img src={ speaker2 } alt="" />
          <p className='text-center text-lg'>Afolabi Joshua Voja</p>
          <p className='text-center text-[#0f172a]'>Program Director</p>
        </div>
        <div className='w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]'>
          <img src={ speaker3 } alt="" />
          <p className='text-center text-lg'>Sadeeq A. Nuru</p>
          <p className='text-center text-[#0f172a]'>Finance Manager</p>
        </div>
        <div className='w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]'>
          <img src={ speaker4 } alt="" />
          <p className='text-center text-lg'>Ugwu Princess-Chiamaka Debora</p>
          <p className='text-center text-[#0f172a]'>Project Manager</p>
        </div>
        <div className='w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]'>
          <img src={ speaker5 } alt="" />
          <p className='text-center text-lg'>Benjamin Peter</p>
          <p className='text-center text-[#0f172a]'>Human Resource & Development Manager </p>
        </div>
        <div className='w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]'>
          <img src={ speaker6 } alt="" />
          <p className='text-center text-lg'>Isaac Ololade Kayode</p>
          <p className='text-center text-[#0f172a]'>Monitoring & Evaluation Officer</p>
        </div>
      </div>
    </div>
  )
}

export default Team
