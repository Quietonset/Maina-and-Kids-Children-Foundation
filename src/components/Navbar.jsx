import React, { useContext, useEffect, useState } from 'react';
import Logo from '/assets/IMG-20221031-WA0024 1.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MenuContext } from '../context/MenuContext';

const Navbar = () => {
  const { isActive, setIsClicked, isClicked, toggleMenu } = useContext(MenuContext);

  const [ isDropdownHovered, setIsDropDownHovered ] = useState(false);

  const handleNavHover = () => {
    setIsDropDownHovered(!isDropdownHovered)
    console.log('nav was hovered');
  };

  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });
  return (
    <nav className={`${isScrolled ? 'bg-white' : 'bg-transparent'} h-[129px] flex justify-between items-center s:px-[5px] sm:px-[20px] md:px-[60px] lg:px-[80px] xl:px-[100px] text-[#554646] sticky top-0 z-10`}>
      {/* image */}
      <div>
        <img src={ Logo } alt="Maina and Kids Foundation" className={`${isActive ? 'hidden' : 'block'} s:w-[50px] s:h-[50px] sm:w-[65px] s:h-[65px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] object-cover`} />
      </div>
      <div className='s:block sm:block md:block lg:hidden xl:hidden'></div>
      {/* nav links desktop*/}
      <ul className='s:hidden sm:hidden md:flex lg:flex xl:flex gap-[60px] justify-center text-[#8a7b7b] font-semibold capitalize'>
        <li>
          <Link 
          to={'/'} 
          // onMouseOver={() => setIsDropDownHovered(true)}
          // onMouseOut={() => setIsDropDownHovered(false)} 
          className='focus:text-[#453838] hover:text-[#453838] flex gap-0.5 items-center relative'>
          <span>causes</span>
          <span>{isDropdownHovered ? <IoIosArrowUp/> : <IoIosArrowDown/> }</span>
          </Link>
          {isDropdownHovered && (
            <div
            onMouseOut={() => setIsDropDownHovered(false)} 
            className='absolute top-24 bg-pink-200 rounded-md h-[200px] w-[200px]'
            >
              testing dropdown
            </div>
          )}
        </li>
        <li>
          <Link to={'/about'} className='focus:text-[#453838] hover:text-[#453838]'>
            about us
          </Link>
        </li>
        <li>
          <Link to={'/girl-child'} className='focus:text-[#453838] hover:text-[#453838]'>
            girl child
          </Link>
        </li>
      </ul>
      {/* mobile view menu tab */}
      <div onClick={() => {setIsClicked(!isClicked), toggleMenu()}} className='s:flex sm:flex flex-col justify-center items-center lg:hidden xl:hidden md:hidden cursor-pointer gap-[5px] mr-8'>
        <div className={`h-[3px] w-7 bg-[#453838] transition-transform duration-200 rounded-full ${isActive ? 'rotate-45 bg-[#326699] translate-y-2' : ''}`} />
        <div className={`h-[3px] w-7 bg-[#453838] transition-opacity duration-200 rounded-full ${isActive ? 'opacity-0 bg-[#326699]' : 'opacity-100'}`} />
        <div className={`h-[3px] w-7 bg-[#453838] transition-transform duration-200 rounded-full ${isActive ? '-rotate-45 bg-[#326699] -translate-y-2' : ''}`} />
      </div>
    </nav>
  )
}
 
export default Navbar
