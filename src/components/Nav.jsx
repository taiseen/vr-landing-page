const Nav = () => {

  const links = [
    { linkName: 'Home', path: '#home' },
    { linkName: 'Company', path: '#company' },
    { linkName: 'Features', path: '#features' },
    { linkName: 'Sign up', path: '#signUp' },
  ]


  return (

    // 🟨 hidden  = hide in 📱 mobile screen... but 
    // 🟨 lg:flex = display in 💻 large screen...
    <nav className='hidden lg:flex'>

      <ul className='flex items-center space-x-12 font-secondary'>
        {
          links.map((link, i) => (
            (i !== links.length - 1)
              ? <li className='text-lg'>
                <a href={link.path}>{link.linkName}</a>
              </li>
              : <li className='btn'>
                <a href={link.path}>{link.linkName}</a>
              </li>
          ))
        }
      </ul>

    </nav>
  );
};

export default Nav;