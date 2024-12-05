import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Button = ({ content, link, btnStyle }) => {
  return (
    <button className={`w-[256px] h-[56px] rounded-[8px] border border-[#336699] capitalize p-[16px] ${btnStyle} flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button`}>
        <a href={link}>
          { content } 
        </a>
        <FaArrowRight/>
    </button>
  )
}

export default Button
