import images from '../assets';
import { Users } from '.';

const Banner = () => {

  return (
    <section className='min-h-[600px] pt-24 lg:pt-48 pb-12 lg:pb-0 text-center lg:text-left relative'>

      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row'>

          {/* 🟨🟨🟨 text */}
          <div className=''>
            <h1 className='mb-8 font-bold text-3xl lg:text-5xl lg:leading-snug'>Let's Explore <br /> Three-Dimensional Visually</h1>

            <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores incidunt! Expedita voluptates sunt impedit?</p>

            {/* 🟨🟨🟨 btn */}
            <div className='mb-12 flex items-center justify-around lg:justify-start space-x-4 lg:space-x-8 mx-auto lg:mx-0 max-w-[320px] lg:max-w-none'>
              <button className='btn'>Get it now</button>
              <a href="/#" className='border-b-2 border-transparent hover:border-white transition ease-out'>Explore Device</a>
            </div>

            {/* 🟨🟨🟨 Child Component */}
            <Users />

          </div>


          {/* 🟨🟨🟨 image */}
          <div className='mx-auto'>
            <img src={images.bannerImg} alt="BannerImage" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;
