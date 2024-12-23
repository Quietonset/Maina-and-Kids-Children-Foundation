import React, { useContext, useEffect, useState } from 'react';
// import image logo
import Logo from '/assets/IMG-20221031-WA0024 1.png';
// import dependencies, components and icons
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';
import { Link } from "react-scroll";

import { projects } from '../data/projects';

const Navbar = () => {
  // getting states from menu context
  const { isActive, setIsClicked, isClicked, toggleMenu } = useContext(MenuContext);

  // setting state for dropdown menu
  const [ isDropdownHovered, setIsDropDownHovered ] = useState(false);
  // Set drop down to only be visible in home page
  const [isVisible, setIsVisible] = useState(false)
 
 

 
  // function to handle dropdown state
  const handleNavHover = () => {
    setIsDropDownHovered(!isDropdownHovered)
  };

  // initializing use location and use navigate
  const location = useLocation();
  const navigate = useNavigate();

  // initializing navbar bg color and setting bg color based on path
  // let navbarBg = 'bg-white';
  // if (location.pathname === '/') {
  //   navbarBg = "bg-[url('/assets/hero-bg.png')]"
  // }

   useEffect (() => {
    if (location.pathname === "/"){
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  },[location])


  // setting state for scrolling on window
  const [ isScrolled, setIsScrolled ] = useState(false);

  // use effect to conditionally control state for window
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 1000 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });
  return (
    // based on how far a user is in a page, the navbar changes
    <nav className={`${isScrolled || location.pathname !== '/' ? 'bg-white' : 'bg-[#CA8A04]' } transition-all duration-300 h-[120px] flex justify-between items-center s:px-[5px] sm:px-[20px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px] sticky top-0 z-10`}>
      {/* image */}
      <div>
        <img src={ Logo } alt="Maina and Kids Foundation" className={`${isActive ? 'hidden' : 'block'} s:w-[50px] s:h-[50px] sm:w-[65px] s:h-[65px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] object-cover`} />
      </div>
      <div className='s:block sm:block md:block lg:hidden xl:hidden'></div>
      {/* nav links desktop*/}
      <ul className={`s:hidden sm:hidden md:flex lg:flex xl:flex gap-[60px] text-[#8a7b7b] justify-center font-semibold capitalize`}>
        <li
        className={`${location.pathname === '/' && 'text-black'} ${isScrolled | location.pathname !== '/' ? 'text-gray-400' : 'text-white'} flex gap-0.5 items-center relative hover:cursor-pointer`}
        onClick={() => navigate('/')}
        >
          home
        </li>
        <li 
        onClick={() => handleNavHover()}
        className={`${isDropdownHovered ? 'text-gray-800' : 'text-gray-400'} flex gap-0.5 items-center relative hover:cursor-pointer`}
        >
          <span>causes</span>
          {isDropdownHovered && isVisible &&(
            <div className='absolute top-10 bg-white text-gray-600 rounded-lg h-fit w-[350px] p-5 shadow-lg md:text-sm'>
              <ul>
                <li className='hover:cursor-pointer hover:text-[#453838] border-b py-1.5'>
                  <Link onClick={() => navigate('/projects')} to='Safe-Net-Ambassadors-Program' smooth={true}>Safe Net Ambassador's Program</Link>
                </li>
                <li className='hover:cursor-pointer hover:text-[#453838] border-b py-1.5'>
                  <Link onClick={() => navigate('/projects')} to='Almajiri-in-Tech-Initiative' smooth={true}>Almajiri in Tech Initiative</Link>
                </li>
                <li className='hover:cursor-pointer hover:text-[#453838] border-b py-1.5'>
                  <Link onClick={() => navigate('/projects')} to='Empower-Her-Future' smooth={true}>Empower Her Future</Link>
                </li>
                <li className='hover:cursor-pointer hover:text-[#453838] border-b py-1.5'>
                  <Link onClick={() => navigate('/projects')} to='Health-Awareness' smooth={true}>Health Awareness</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
        onClick={() => navigate('/about')}
        className={`${location.pathname === '/about' ? 'text-gray-800' : 'text-gray-400'} hover:cursor-pointer`}
        >
          about us
        </li>
        <li
        onClick={() => navigate('/girl-child')}
        className={`${location.pathname === '/girl-child' ? 'text-gray-800' : 'text-gray-400'} hover:cursor-pointer`}
        >
          girl child
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
