import React, { useContext } from 'react';
import anniversaryImg from '/assets/10th-Anniversary.png';
import { AnniversaryContext } from '../../context/AnniversaryContext';

const FloatingAnniversaryBox = () => {
  const { isPopUpShown, setIsPopUpShown } = useContext(AnniversaryContext);
  return (
    <div className={`${isPopUpShown ? 'hidden' : 'block'} shadow-2xl rounded-full sm:h-[60px] sm:w-[60px] md:h-[120px] md:w-[120px] h-[150px] w-[150px] bg-white fixed sm:bottom-14 sm:right-4 xl:bottom-24 md:right-6 md:bottom-16 xl:right-32 z-20 dedicated-service-bg p-3`}>
      <div onClick={() => setIsPopUpShown(true)}>
        <img src={ anniversaryImg } alt="Our 10th Anniversary Image" />
      </div>
    </div>
  )
}

export default FloatingAnniversaryBox
