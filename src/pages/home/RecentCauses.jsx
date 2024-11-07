import React from 'react';
// import images
import image1 from '/assets/recent-causes-img-1.png';
import image2 from '/assets/recent-causes-img-2.png';
import image3 from '/assets/recent-causes-img-3.png';
import image4 from '/assets/recent-causes-img-4.png';
import Button from '../../components/Button'

const RecentCauses = () => {
  return (
    <div className='flex justify-center items-center flex-col p-[100px]'>
      {/* subtitle */}
      <p className='font-bold text-xl uppercase tracking-widest text-[#336699]'>a glimpse into</p>
      {/* bigger text */}
      <h3 className='text-[56px] font-extrabold capitalize text-[#0F172A]'>our most recent causes</h3>
      {/* grid box */}
      <div className='grid grid-cols-2 grid-rows-2 mt-[50px] gap-[100px]'>
        {/* first box */}
        <div>
          <img src={image1} alt="" />
          <h3 className='font-extrabold text-[32px] text-[#0F172A] my-[10px]'>Safe Net Ambassador's Program</h3>
          <p className='text-[18px] mb-[25px]'>Teaching Jss1 student in Jigawa state to be safe online users and avoid potential cyber ...</p>
          <Button content={'Learn More'} btnStyle={'bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'}/>
        </div>
        {/* second box */}
        <div>
          <img src={image2} alt="" className='' />
          <h3 className='font-extrabold text-[32px] text-[#0F172A] my-[10px]'>Baby Bello’s Journey</h3>
          <p className='text-[18px] mb-[25px]'>See the transformation of baby Bello from  malnourishment to a healthy baby ...</p>
          <Button content={'Learn More'} btnStyle={'bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'}/>
        </div>
        {/* third box */}
        <div>
          <img src={image3} alt="" />
          <h3 className='font-extrabold text-[32px] text-[#0F172A] my-[10px]'>Baby Grace</h3>
          <p className='text-[18px] mb-[25px]'>After a tragedy of unwanted pregnancy baby grace was brought into the world of pain ...</p>
          <Button content={'Learn More'} btnStyle={'bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'}/>
        </div>
        {/* fourth box */}
        <div>
          <img src={image4} alt="" />
          <h3 className='font-extrabold text-[32px] text-[#0F172A] my-[10px]'>Flood Relief</h3>
          <p className='text-[18px] mb-[25px]'>In a collaborative effort to reach out to flood victims in Ringim, Jigawa State ...</p>
          <Button content={'Learn More'} btnStyle={'bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'}/>
        </div>
      </div>
    </div>
  )
}

export default RecentCauses
