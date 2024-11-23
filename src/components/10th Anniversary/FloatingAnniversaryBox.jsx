import React, { useContext } from 'react';
import anniversaryImg from '/assets/10th-Anniversary.png';
import { AnniversaryContext } from '../../context/AnniversaryContext';

const FloatingAnniversaryBox = () => {
  const { isPopUpShown } = useContext(AnniversaryContext);
  return (
    <div className={`${isPopUpShown ? 'hidden' : 'block'} shadow-2xl rounded-lg h-[150px] w-[150px] bg-white fixed bottom-24 right-32 z-50 dedicated-service-bg p-3`}>
      <div>
        <img src={ anniversaryImg } alt="Our 10th Anniversary Image" />
      </div>
    </div>
  )
}

export default FloatingAnniversaryBox
