import React, {useEffect, useState} from 'react';
import { MenuItems } from './MenuItems';
import {FaTimes} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [model, setModel] = useState(false);
  
  function handleClick() {
    setModel(!model);
  };
  //choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 640) {
      setIsMobile(true);
      setModel(false);
  } else {
      setIsMobile(false);
  }
}


// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})
  return (
  
    <nav className='w-[95%] h-[80px] flex justify-between items-center shadow-[0_5px_15px_0_rgba(0,0,0,.38)] rounded-[15px] px-[30px] my-[18px] z-50'>
      <div className='ml-5 font-valorax text-2xl'>TAGZERO</div>
      <div className="grid grid-rows-2 items-end justify-items-end pt-8 sm:pt-14 ">
      <div onClick={handleClick}  className='sm:hidden'>
      {model ? <div><FaTimes className='sm:hidden visible h-8 w-8 hover:cursor-pointer'></FaTimes></div> : 
      <div><HiMenu className='sm:hidden visible h-8 w-8 hover:cursor-pointer'></HiMenu></div>}
      </div>
      <div className={model ? 'flex justify-between items-center shadow-[0_5px_15px_0_rgba(0,0,0,.38)] rounded-[15px] px-[30px] my-[18px]' : ''}>
      <ul className={model ? 'visible pt-5 ':'hidden sm:visible sm:grid sm:grid-cols-4 sm:gap-[10px] list-none sm:items-center'}>
        {MenuItems.map((item, index) => {
          return (
           <li className=''>
            <a className='lg:text-xl md:text-lg font-semibold flex justify-start sm:justify-center items-center px-[0.7rem] py-[1rem] whitespace-nowrap hover:bg-[#01959a] hover:text-white hover:rounded-[14px] 
            transition duration-150 ease-out hover:ease-in' href={item.url}>
                <i className='pr-[5px] sm:pr-[10px]'>{item.icon}</i>{item.title}
              </a>
            </li>
          )
        })}
      </ul>
      </div>
      </div>
    </nav>
  )
}
/*<nav className='w-[95%] h-[80px] flex justify-between items-center shadow-[0_5px_15px_0_rgba(0,0,0,.38)] rounded-[15px] px-[30px] my-[18px] z-50'>
      <div className='ml-5 font-valorax text-2xl'>TAGZERO</div>
      <div className="grid grid-rows-2 items-end justify-items-end pt-8 sm:pt-14 ">
      <div onClick={handleClick}  className='sm:hidden'>
      {model ? <div><FaTimes className='sm:hidden visible h-8 w-8 hover:cursor-pointer'></FaTimes></div> : 
      <div><HiMenu className='sm:hidden visible h-8 w-8 hover:cursor-pointer'></HiMenu></div>}
      </div>
      <div className={model ? 'flex justify-between items-center shadow-[0_5px_15px_0_rgba(0,0,0,.38)] rounded-[15px] px-[30px] my-[18px]' : ''}>
      <ul className={model ? 'visible pt-5 ':'hidden sm:visible sm:grid sm:grid-cols-4 sm:gap-[10px] list-none sm:items-center'}>
        {MenuItems.map((item, index) => {
          return (
           <li className=''>
            <a className='lg:text-xl md:text-lg font-semibold flex justify-start sm:justify-center items-center px-[0.7rem] py-[1rem] whitespace-nowrap hover:bg-[#01959a] hover:text-white hover:rounded-[14px] 
            transition duration-150 ease-out hover:ease-in' href={item.url}>
                <i className='pr-[5px] sm:pr-[10px]'>{item.icon}</i>{item.title}
              </a>
            </li>
          )
        })}
      </ul>
      </div>
      </div>
    </nav> */

export default Navbar