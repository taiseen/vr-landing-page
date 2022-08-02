import { Banner, Experience, Explore, Header, Headsets, NavMobile, Testimonial, Video } from './components';
import { useState } from 'react';


const App = () => {

  const [navMobile, setNavMobile] = useState(false);


  return (
    <main className='relative overflow-hidden 
      before:w-[600px]
      before:h-[220px]
      before:bg-circle
      before:bg-no-repeat
      before:absolute
      before:-top-16
      before:left-[600px]
      before:hidden
      before:lg:flex
    '>

      <Header setNavMobile={setNavMobile} />

      <Banner />

      {
        // For 📱 Mobile Navigation SideBar...
        <div className={`${navMobile ? 'right-0' : '-right-full'} 
          fixed top-0 bottom-0 w-48 transition-all`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
      }

      <Experience />

      <Video />

      <Headsets />

      <Testimonial />

      <Explore />

    </main>
  );
};

export default App;