import { TestimonialSlider } from ".";


const Testimonial = () => {

  return (
    <section className="mb-44 lg:mb-48">

      <div className="container mx-auto">

        <div className="bg-purple-400/10 max-h-[400px] rounded-lg p-8 lg:p-12">

          <div className="text-center">

            <h2 className="text-2xl lg: font-bold mb-6"
              data-aos='fade-up'
              data-aos-offset='300'
              data-aos-delay='1600'
            >What out clients say</h2>

            <p className="max-w-2xl mx-auto mb-12 lg:mb-24"
              data-aos='fade-up'
              data-aos-offset='300'
              data-aos-delay='1800'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, possimus minus. Quas provident amet quasi maiores? Commodi laboriosam quas pariatur!
            </p>
          </div>


          {/* 🟨🟨🟨 slider 🟨🟨🟨 */}
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-delay='2000'
          >
            <TestimonialSlider />
          </div>

        </div>
      </div>

    </section>
  )
};

export default Testimonial;
