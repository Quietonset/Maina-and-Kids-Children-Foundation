import React from 'react';
// import icons
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaI, FaXTwitter } from "react-icons/fa6";
// import footer image
import image from '/assets/Logo-colored.png'
import Button from './Button';

const Footer = () => {
  return (
    <footer className='bg-[#fafafa] text-[#453838] px-[80px] capitalize'>
        {/* columns */}
        <div className='h-[322px] grid grid-cols-3 py-[48px] gap-[48px]'>
          <div className='flex flex-col gap-[25px]'>
            <h3 className='font-semibold'>navigation</h3>
            <a href="" className='hover:text-[#0f172a]'>causes</a>
            <a href="" className='hover:text-[#0f172a]'>about us</a>
            <a href="" className='hover:text-[#0f172a]'>girl child</a>
            <a href="" className='hover:text-[#0f172a]'>contact us</a>
          </div>
          <div className='flex flex-col gap-[25px]'>
            <h3 className='font-semibold'>get involved</h3>
            <a href="" className='hover:text-[#0f172a]'>mentorship</a>
            <a href="" className='hover:text-[#0f172a]'>sponsorship</a>
            <a href="" className='hover:text-[#0f172a]'>partnership</a>
          </div>
          <div className='flex flex-col gap-[25px]'>
            <h3 className='font-semibold'>donation</h3>
            <a href="" className='hover:text-[#0f172a]'>grant</a>
            <a href="" className='hover:text-[#0f172a]'>monthly</a>
            <a href="" className='hover:text-[#0f172a]'>yearly</a>
          </div>
        </div>
        {/* copyright and social links */}
        <div className='h-[80px] flex justify-between items-center border-t border-[#0f1729]'>
          {/* footer image */}
          <div>
            <img src={image} alt="Footer Image" />
          </div>
          <div className='flex items-center gap-20'>
            {/* copyright */}
            <p>Maina and kids children foundation &copy; 2024. all rights reserved.</p>
            {/* social links */}
            <div className='flex text-xl gap-4'>
              <a href="" className='hover:text-[#0f172a]' title='Youtube'><FaYoutube/></a>
              <a href="" className='hover:text-[#0f172a]' title='Facebook'><FaFacebookF/></a>
              <a href="" className='hover:text-[#0f172a]' title='Twitter'><FaXTwitter/></a>
              <a href="" className='hover:text-[#0f172a]' title='Instagram'><FaInstagram/></a>
              <a href="" className='hover:text-[#0f172a]' title='LinkedIn'><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
        
    </footer>
  )
}

export default Footer
