import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
    const navigate = useNavigate();
    // menu context
    const { isClicked, handleMenuClose } = useContext(MenuContext);
  return (
    <div>
        { isClicked && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
                <section className={`${isClicked ? 'translate-x-0' : 'translate-x-[-100%]'} h-screen w-full fixed top-0 right-0 bg-[#f7faf9] z-30 transition-all duration-200 transform shadow-2xl rounded-md`}>
                    <div className='relative'>
                        {/* closing icon on menu bar */}
                        <div onClick={() => handleMenuClose()} className='s:flex sm:flex flex-col justify-center items-center lg:hidden xl:hidden md:hidden cursor-pointer gap-[5px] mr-8 absolute right-5 -top-16'>
                            <div className="h-[3px] w-7 rounded-full rotate-45 bg-[#326699] translate-y-4" />
                            <div className="h-[3px] w-7 rounded-full opacity-0" />
                            <div className="h-[3px] w-7 rounded-full -rotate-45 bg-[#326699] -translate-y-0" />
                        </div>
                        {/* links */}
                        <ul className='flex flex-col gap-6 justify-center text-[#453838] font-semibold text-[20px] capitalize mt-[110px] mx-10'>
                            <li onClick={() => navigate('/about')}>about us</li>
                            <li onClick={() => navigate('/girl-child')}>girl child</li>
                            <li onClick={() => navigate('/')}>home</li>
                        </ul>
                        {/* buttons */}
                        <div className='flex flex-col w-full items-center gap-6 my-10'>
                            <Button content={'donate'} btnStyle={'bg-[#336699] text-white before:bg-[#0f172a] hover:border-white'}/>
                            <Button content={'get involved'} btnStyle={'text-[#453838] before:bg-[#0f172a] hover:text-white hover:border-white'}/>
                        </div>
                    </div>
                </section>
            </div>
        )}
    </div>
  )
}

export default MenuBar
