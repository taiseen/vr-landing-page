import { Swiper, SwiperSlide } from 'swiper/react';
import { slider } from '../constants/data';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const TestimonialSlider = () => {

  return (
    // 🟨🟨🟨 this padding bottom is very useful 
    // 🟨🟨🟨 for pagination bullate points...
    <Swiper className='pb-8'
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {
        slider.map((slide, idx) => {

          const { message, image, name, email } = slide;

          return (
            <SwiperSlide key={idx} className='p-4 lg:p-6 rounded-lg min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35] cursor-grab select-none'>

              <p className='mb-8 min-h-[100px] text-[15px]'>{message}</p>

              <div className='flex flex-row items-center gap-x-4 '>
                <div className='w-14 mb-3 md:mb-0'>
                  <img src={image} alt="" />
                </div>

                <div className='self-start'>
                  <p className='font-medium text-base'>{name}</p>
                  <p className='font-medium text-rose-600'>{email}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default TestimonialSlider;
