import { HiMenu } from 'react-icons/hi';
import { Nav } from '.';
import images from '../assets';


const Header = ({ setNavMobile }) => {

  return (
    <header
      className='py-6'
      data-aos='fade-down'
      data-delay='2000'
      data-duration='900'
    >

      <div className="container mx-auto">

        <div className='flex items-center justify-between'>

          {/* 🟨🟨🟨 Logo */}
          <a href="/#">
            <img src={images.logo} alt="" className='h-[30px]' />
          </a>

          {/* 🟨🟨🟨 NavBar Component */}
          <Nav />

          {/* 🟨🟨🟨 Nab Mobile Btn */}
          <HiMenu
            className='lg:hidden text-3xl text-white cursor-pointer'
            onClick={() => setNavMobile(true)}
          />

        </div>

      </div>

    </header>
  );
};

export default Header;
