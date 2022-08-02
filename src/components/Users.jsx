import { BsFillCircleFill } from 'react-icons/bs'
import images from '../assets';


const Users = () => {

  return (
    <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center space-x-5 space-y-2 lg:space-y-0'
      data-aos='fade-down'
      data-aos-delay='900'
    >

      {/* 🟨🟨🟨 User Images...🟨🟨🟨 */}
      <div className='flex -space-x-2'>

        <div className='w-12 h-12 rounded-full'>
          <img src={images.avt1} alt="" />
        </div>

        <div className='w-12 h-12 rounded-full'>
          <img src={images.avt2} alt="" />
        </div>

        <div className='w-12 h-12 rounded-full'>
          <img src={images.avt3} alt="" />
        </div>

        <div className='w-12 h-12 rounded-full'>
          <img src={images.avt4} alt="" />
        </div>

      </div>

      {/* 🟨🟨🟨 animation + text 🟨🟨🟨 */}
      <div className='flex items-center space-x-2 font-secondary font-medium'>
        <BsFillCircleFill className='text-green-500 animate-pulse' />
        <p>400k people online</p>
      </div>

    </div>
  );
};

export default Users;
