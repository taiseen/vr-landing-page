import { headSet } from '../constants/data';


const Headsets = () => {

  return (
    <section className='py-12 lg:py-24'>

      <div className='container mx-auto'>

        <h2 className='text-3xl font-bold mb-6 text-center pb-4'>
          Mixed Reality Headsets
        </h2>

        {/* 🟨🟨🟨 grid layout use here 🟨🟨🟨 */}
        <div className='grid gap-6 md:gap-9 lg:grid-cols-2 '>
          {
            headSet.map(({ title, text, img }) => (

              <div key={title} className='relative mx-auto'>

                <img src={img} alt="" />

                <div className='absolute bottom-0 bg-white/20 max-w-[250px] lg:max-w-[300px] min-h-[150px] backdrop-blur-md p-4 lg:p-6'>
                  <h4 className='font-semibold text-xl mb-2'>{title}</h4>
                  <p>{text}</p>
                </div>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Headsets;
