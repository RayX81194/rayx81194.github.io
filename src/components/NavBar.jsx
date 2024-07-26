import React, { useState } from 'react';
import star from "../assets/star.svg";
import menu from "../assets/menu.svg"; // Your custom menu icon
import close from "../assets/close.svg"; // Your custom close icon
import { Navbars } from '../constants';
import "../App.css"; // Ensure your CSS file is correctly imported

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav data-aos="fade-down" data-aos-duration="1000" className="w-full mt-4 mb-3 flex justify-between items-center relative z-20">
      <h1 className='flex items-center text-[16px] font-bold'>
        <img src={star} alt="Logo" className="mr-2" />MP
      </h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {Navbars.map((nav, index) => (
          <li key={index} className={`cursor-pointer font-bold text-[14px] ${index === Navbars.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button 
        className="sm:hidden flex items-center p-2"
        onClick={toggleMenu}
      >
        <img src={menu} alt="Menu Icon" className="w-6 h-6" />
      </button>
      <div className={`fixed top-0 right-0 z-30 w-full h-[1000px] bg-gray-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <button 
          className="absolute top-3 right-2"
          onClick={toggleMenu}
        >
          <img src={close} alt="Close Icon" className="w-6 h-6" />
        </button>
        <ul className='list-none flex flex-col items-start mt-20 pl-5'>
          {Navbars.map((nav, index) => (
            <li key={index} className='cursor-pointer font-bold text-[25px] mb-4'>
              <a href={`#${nav.id}`} onClick={toggleMenu}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
