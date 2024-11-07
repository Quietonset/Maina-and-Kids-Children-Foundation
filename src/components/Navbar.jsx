import React from 'react';
import Logo from '/assets/IMG-20221031-WA0024 1.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  return (
    <nav className='h-[129px] flex justify-between items-center px-[100px] text-[#554646] bg-transparent'>
      {/* image */}
      <div>
        <img src={ Logo } alt="Maina and Kids Foundation" className='w-[90px] h-[90px] object-cover' />
      </div>
      {/* nav links */}
      <ul className='flex gap-[60px] justify-center text-[#8a7b7b] font-semibold capitalize'>
        <li><Link to={'/'} className='focus:text-[#453838] hover:text-[#453838]'>causes</Link></li>
        <li><Link to={'/about'} className='focus:text-[#453838] hover:text-[#453838]'>about us</Link></li>
        <li><Link to={'/girl-child'} className='focus:text-[#453838] hover:text-[#453838]'>girl child</Link></li>
        <li><Link to={'/girl-child'} className='focus:text-[#453838] hover:text-[#453838]'>contact us</Link></li>
      </ul>
    </nav>
  )
}
 
export default Navbar
