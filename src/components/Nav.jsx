import React from 'react';


const Nav = () => {

  return (

    // 🟨 hidden  = hide in 📱 mobile screen... but 
    // 🟨 lg:flex = display in 💻 large screen...
    <nav className='hidden lg:flex'>

      <ul className='flex items-center space-x-12 font-secondary'>
        
        <li className='navLink'><a href="/#">Home</a></li>
        <li className='navLink'><a href="/#">Company</a></li>
        <li className='navLink'><a href="/#">Features</a></li>
        <li className='btn'><a href="/#">Sign up</a></li>
      
      </ul>

    </nav>
  );
};

export default Nav;