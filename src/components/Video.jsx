import { BsPlayCircleFill } from 'react-icons/bs'
import { useState } from 'react';
import ModalVideo from "react-modal-video";
import '../modalVideo.scss';


const Video = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <section className='bg-[#534686]/30 py-8'>

      <div className='container mx-auto'>

        <div className='text-center flex flex-col lg:flex-row items-center justify-center lg:justify-between'>

          <h3 className='text-2xl font-semibold mb-8 lg:mb-0'
            data-aos='fade-right'
            data-aos-offset='350'
          >
            Awesome experience with virtual reality world
          </h3>


          {/* 🟨🟨🟨 When use click on play icon, this modal popup on screen */}
          <ModalVideo
            autoplay
            channel='youtube'
            isOpen={isOpen}
            videoId='NOk_M1Ib5F0'
            onClose={() => setIsOpen(false)}
          />


          <div className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] grid place-items-center'
            data-aos='fade-left'
            data-aos-offset='350'
          >

            <div
              // 🟨🟨🟨 this click event is opening video modal component 
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer'
            >
              <BsPlayCircleFill
                className='text-5xl text-white/80 hover:text-white hover:scale-125 duration-200 animate-pulse'
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Video;
