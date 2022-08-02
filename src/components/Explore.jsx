import React from 'react';

const Explore = () => {

  return (
    <section className='min-h-[400px] mb-8 lg:mb-12' id='signUp'>

      <div className='container mx-auto h-full'>

        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-semibold mb-8'
            data-aos='fade-right'
            data-aos-offset='1000'
          >
            Explore Product in new way
          </h3>
          <p className='max-w-xs mb-12'
            data-aos='fade-right'
            data-aos-offset='1000'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <form className='flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 gap-x-4'
            data-aos='fade-up'
            data-aos-offset='200'
          >
            <input
              type="text"
              placeholder='Your Email'
              className='py-3 px-4 outline-none rounded-md bg-gradient-to-t from-[#341D38] to-[#271223]'
            />
            <button className='btn'>Send</button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Explore;
