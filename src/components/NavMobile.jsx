import React from 'react';
import { IoClose } from 'react-icons/io5';


const NavMobile = ({ setNavMobile }) => {

  return (

    // by default... 
    // display in mobile screen, but...
    // hide on large screen...
    <nav className='lg:hidden w-full h-full bg-[#251f3f]'>

      <IoClose
        className='text-3xl absolute left-4 top-6 cursor-pointer hover:text-red-500 duration-200'
        onClick={() => setNavMobile(false)}
      />

      <ul className='flex flex-col items-center justify-center space-y-6 h-full font-secondary'>

        <li className='text-lg'><a href="/#">Home</a></li>
        <li className='text-lg'><a href="/#">Company</a></li>
        <li className='text-lg'><a href="/#">Features</a></li>
        <li className='btn'><a href="/#">Sign up</a></li>

      </ul>

    </nav>
  );
};

export default NavMobile;
