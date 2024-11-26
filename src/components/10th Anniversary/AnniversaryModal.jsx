import React, { useContext } from 'react'
// import anniversary context
import { AnniversaryContext } from '../../context/AnniversaryContext'
// import image
import anniversaryImg from '/assets/10th-Anniversary.png'
// import icon
import { IoCloseOutline } from "react-icons/io5";

const AnniversaryModal = () => {
    const { isPopUpShown, handlePopUpClose } = useContext(AnniversaryContext);
  return isPopUpShown && (
    <section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
      <div className='sm:h-[70%] md:h-[550px] lg:h-[70%] xl:h-[80%] 2xl:h-[80%] sm:max-w-[85%] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] gradient-modal-bg rounded-xl shadow-2xl flex flex-col justify-center items-center relative px-14 text-center'>
        <div>
            <img src={anniversaryImg} alt="Our 10th Anniversary" className='sm:h-14 md:h-16 lg:h-16 xl:h-20' />
        </div>
        <h1 className='sm:text-xl md:text-[34px] lg:text-[34px] xl:text-[35px] uppercase font-extrabold text-[#0F172A] tracking-wider font-montserrat sm:text-center'>celebrate With Us!</h1>
        <h3 className='sm:text-sm md:text-xl lg:text-[22px] xl:text-[22px] text-[#336699] text-center py-2'>Recently, on the 1st of November, something amazing happened: Maina and Kids Children Foundation became 10!</h3>
        <p className='text-center sm:text-xs md:text-base lg:text-base xl:text-base'>We're excited to share that we recently celebrated our 10th anniversary as an NGO! It’s been a wonderful decade of making a positive impact, and we’re truly grateful for the support of everyone who’s been part of this journey. Here's to many more years of making a difference in the lives of children! Thank you for being with us every step of the way!</p>
        <div className='flex gap-8 pb-2 mt-5 font-montserrat'>
            <button className='w-full sm:h-[30px] md:h-[35px] lg:h-[38px] xl:h-[40px] sm:text-[10px] md:text-sm lg:text-base xl:text-base border border-[#336699] uppercase tracking-widest p-[16px] flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all rounded-lg duration-300 ease-in-out hover-on-button bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'>View all activities</button>
        </div>
        <button 
        onClick={() => handlePopUpClose()} 
        className='absolute sm:-top-3 sm:-right-3 -top-4 -right-4 sm:text-xl md:text-[25px] lg:text-3xl xl:text-3xl bg-white rounded-full hover:bg-[#336699] hover:text-white shadow-lg p-1.5'>
          <IoCloseOutline/>
        </button>
      </div>
    </section>
  )
}

export default AnniversaryModal
