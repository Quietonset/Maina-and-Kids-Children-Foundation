import React from 'react';
// import images
import speaker1 from '/assets/speaker1.png';
import speaker2 from '/assets/speaker1.png';
import speaker3 from '/assets/speaker1.png';
import speaker4 from '/assets/speaker4.png';
import speaker5 from '/assets/speaker5.png';
import speaker6 from '/assets/speaker6.png';


const Team = () => {
  const data = [
    {
      id: 1,
      image: speaker1,
      speakerName: 'Maina Gambo Bawa',
      speakerPosition: 'Founder, Executive Director'

    },
    {
      id: 2,
      image: speaker2,
      speakerName: 'Afolabi Joshua Voja',
      speakerPosition: 'Program Director'

    },
    {
      id: 3,
      image: speaker3,
      speakerName: 'Sadeeq A. Nuru',
      speakerPosition: 'Finance Manager'

    },
    {
      id: 4,
      image: speaker4,
      speakerName: 'Ugwu Princess-Chiamaka Debora',
      speakerPosition: 'Project Manager'

    },
    {
      id: 5,
      image: speaker5,
      speakerName: 'Benjamin Peter',
      speakerPosition: 'Human Resource & Development Manager '

    },
    {
      id: 6,
      image: speaker6,
      speakerName: 'Isaac Ololade Kayode',
      speakerPosition: 'Monitoring & Evaluation Officer'

    }
  ]
  return (
    <div id='team' className='flex justify-center items-center flex-col xl:p-[100px]'>
      {/* heading */}
      <h3 className='sm:text-[30px] sm:text-center sm:whitespace-nowrap md:text-[55px] md:text-center text-[56px] font-extrabold text-[#0F172A]'>Meet the team</h3>
      {/* sub text only on mobile */}
      <p className='hidden sm:block text-center text-[#0F172A]'>A dedicated team  committed to making positive impact in the lives of children.</p>
      {/* grid box */}
      <div className='grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-2 grid-cols-3 grid-rows-2 md:gap-[40px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[60px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[100px] sm:mb-10 md:mb-14 md:mx-3'>
        {data.map((person) => {
            return (
              <div className='sm:w-[180px] w-[229px] h-[215px] flex flex-col justify-center items-center gap-[10px]' key={person.id}>
                <img src={ person.image } alt="" className='sm:h-[100px] sm:w-[100px]' />
                <p className='text-center sm:text-sm text-lg'>{ person.speakerName }</p>
                <p className='text-center sm:text-xs text-[#0f172a]'>{ person.speakerPosition }</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Team
