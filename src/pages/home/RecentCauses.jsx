import React, { useState } from 'react';
// import images
import image1 from '/assets/recent-causes-img-1.png';
import image2 from '/assets/recent-causes-img-2.png';
import image3 from '/assets/recent-causes-img-3.png';
import image4 from '/assets/recent-causes-img-4.png';
import Button from '../../components/Button'

const RecentCauses = () => {
  const data = [
    {id: 1, img:image1, title: "Safe Net Ambassador's Program", description: "Teaching Jss1 student in Jigawa state to be safe online users and avoid potential cyber"},
    {id: 2, img:image2, title: "Baby Bello’s Journey", description: "See the transformation of baby Bello from  malnourishment to a healthy baby",},
    {id: 3, img:image3, title: "Baby Grace", description: "After a tragedy of unwanted pregnancy baby grace was brought into the world of pain",},
    {id: 4, img:image4, title: "Flood Relief", description: "In a collaborative effort to reach out to flood victims in Ringim, Jigawa State",}
  ];


  return (
    <div className='flex justify-center items-center flex-col p-[100px]'>
      {/* subtitle */}
      <p className='font-bold text-xl uppercase tracking-widest text-[#336699]'>a glimpse into</p>
      {/* bigger text */}
      <h3 className='text-[56px] font-extrabold capitalize text-[#0F172A]'>our most recent causes</h3>
      {/* grid box */}
      <div className='grid grid-cols-2 grid-rows-2 mt-[50px] gap-[100px]'>
        {data.map(card => {
          return (
            <div>
              <img src={card.img} alt={`Image ${card.id}`} />
              <h3 className='font-extrabold text-[32px] text-[#0F172A] my-[10px]'>{card.title}</h3>
              <span className='text-[18px] mb-[25px]'>{card.description + ' ...'}</span>
              {/* <span onClick={() => toggleText()} className='hover:cursor-pointer'> {isFullTextShown ? 'Less' : 'More'}</span> */}
              <Button content={'Learn More'} btnStyle={'bg-[#336699] text-white before:bg-[#0f172a] hover:border-white mt-4'}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentCauses
