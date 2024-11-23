import React from 'react';
// import icon images
import icon1 from '/assets/Icon.png';
import icon2 from '/assets/Icon (1).png';
import icon3 from '/assets/Icon (2).png';
import icon4 from '/assets/Icon (3).png';

const Objectives = () => {
  return (
    <div className='flex justify-center items-center flex-col p-[100px] gap-[10px]'>
      {/* subtitle */}
      <p className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>objectives</p>
      {/* bigger text */}
      <h3 className='text-[56px] font-extrabold text-[#0F172A]'>Giving Little Children Chances Through</h3>
      {/* grid box */}
      <div className='grid grid-cols-2 grid-rows-2 gap-[95px] mt-[50px]'>
        {/* first box */}
        <div className='flex gap-x-[42px] items-center'>
          <img src={ icon1 } alt="Icon 1" className='h-[92px] w-[92px] object-cover' />
          <div>
            <h4 className='text-[24px] h-[30px] font-semibold capitalize mb-[20px]'>educational support</h4>
            <p className='hover:cursor-default before:bg-[#ffe9b7] highlight'>Providing scholarships, school supplies, tutoring, or after-school programs, to ensure children have access to quality education.</p>
          </div>
        </div>
        {/* second box */}
        <div className='flex gap-x-[42px] items-center'>
          <img src={ icon2 } alt="Icon 2" className='h-[92px] w-[92px] object-cover' />
          <div>
            <h4 className='text-[24px] h-[30px] font-semibold capitalize mb-[20px]'>health care initiatives</h4>
            <p className='hover:cursor-default before:bg-[#e6cbff] highlight'>Organizing medical outreaches, health check-ups, and awareness campaigns to promote children's health and well-being.</p>
          </div>
        </div>
        {/* third box */}
        <div className='flex gap-x-[42px] items-center'>
          <img src={ icon3 } alt="Icon 3" className='h-[92px] w-[92px] object-cover' />
          <div>
            <h4 className='text-[24px] h-[30px] font-semibold capitalize mb-[20px]'>skills development</h4>
            <p className='hover:cursor-default before:bg-[#efb0f8] highlight'>Conducting workshops, vocational training, or mentoring programs to equip children with valuable skills for their personal and professional growth.</p>
          </div>
        </div>
        {/* fourth box */}
        <div className='flex gap-x-[42px] items-center'>
          <img src={ icon4 } alt="Icon 4" className='h-[92px] w-[92px] object-cover' />
          <div>
            <h4 className='text-[24px] h-[30px] font-semibold mb-[20px]'>Advocacy and Awareness</h4>
            <p className='hover:cursor-default before:bg-[#fde3a9] highlight'>Raising awareness about children's rights, promoting child protection policies, and advocating for policy changes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objectives
