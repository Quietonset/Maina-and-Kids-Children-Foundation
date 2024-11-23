import React, { useContext } from 'react'
import { AnniversaryContext } from '../../context/AnniversaryContext'
import anniversaryImg from '/assets/10th-Anniversary.png'

const AnniversaryModal = () => {
    const { isPopUpShown, handlePopUpClose } = useContext(AnniversaryContext);
  return isPopUpShown && (
    <section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-serif z-20'>
      <div className='h-[80%] w-[600px] gradient-modal-bg rounded-xl shadow-2xl flex flex-col justify-center items-center relative px-14'>
        <div>
            <img src={anniversaryImg} alt="Our 10th Anniversary" className='h-20' />
        </div>
        <h1 className='text-[34px] uppercase font-extrabold text-[#0F172A] tracking-wider font-montserrat'>celebrate With Us!</h1>
        <h3 className='text-[23px] text-[#336699] text-center py-2'>Recently, on the 1st of November, something amazing happened: Maina and Kids Children Foundation became 10!</h3>
        <p className='text-center'>We're excited to share that Maina and Kids Children Foundation has recently celebrated its 10th anniversary as an NGO! It’s been a wonderful decade of making a positive impact, and we’re truly grateful for the support of everyone who’s been part of this journey. Here's to many more years of making a difference in the lives of children! Thank you for being with us every step of the way!</p>
        <div className='flex gap-8 pb-2 mt-5 font-montserrat'>
            <button className='w-full h-[40px] border border-[#336699] uppercase tracking-widest p-[16px] flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'>Donate</button>
            <button onClick={() => handlePopUpClose()} className='w-full h-[40px] border border-[#336699] uppercase tracking-widest p-[16px] flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'>Close</button>
        </div>
      </div>
    </section>
  )
}

export default AnniversaryModal
