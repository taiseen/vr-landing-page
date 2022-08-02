import { Banner, Experience, Explore, Header, Headsets, NavMobile, Testimonial, Video } from './components';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const App = () => {

  const [navMobile, setNavMobile] = useState(false);


  // 🟨🟨🟨 must ==> aos init | either its wont work 🟨🟨🟨
  useEffect(() => { Aos.init({ duration: 2500, delay: 400 }) }, []);


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
        <div className={`${navMobile ? 'right-0 shadow-full' : '-right-full'} 
          fixed top-0 bottom-0 w-48 transition-all z-50`}
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