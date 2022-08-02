import { IoClose } from 'react-icons/io5';


const NavMobile = ({ setNavMobile }) => {

  const links = [
    { linkName: 'Home', path: '#home' },
    { linkName: 'Company', path: '#company' },
    { linkName: 'Features', path: '#features' },
    { linkName: 'Sign up', path: '#signUp' },
  ]

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
        {
          links.map((link, i) => (
            (i !== links.length - 1)
              ? <li
                className='text-lg'
                onClick={() => setNavMobile(false)}
              >
                <a href={link.path}>{link.linkName}</a>
              </li>
              : <li className='btn'
                onClick={() => setNavMobile(false)}
              >
                <a href={link.path}>{link.linkName}</a>
              </li>
          ))
        }
      </ul>

    </nav>
  );
};

export default NavMobile;
