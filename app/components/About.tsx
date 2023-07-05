'use client'


const About = () => {
  return (
    <section className='font-poppins pt-28 bg-blue-100'>

      <div className='mx-8 md:mx-[10%] flex flex-col md:flex-row '>

        <div className='flex-1'>
          <img src='clean1.jpeg' alt='Main' className='h-full w-full object-cover rounded-sm shadow-2xl' />
        </div>
        
        <div className='flex-1 flex flex-col justify-center md:pl-8 m-4 text-center md:text-left text-primary'>
        
          <h1 className='text-6xl font-bold mb-4'>About Us</h1>

          <p className='mb-4 md:text-2xl'>
            We are a mobile auto detailing service that prioritizes convenience. You won&apos;t have to leave your house to get your vehicle detailed, we will come to you. We pride ourselves on using only the best products and equipment, ensuring that your vehicle looks brand new.
          </p>
          
          <p className='mb-4 md:text-2xl'>
            We provide service to the entire Ottawa area, including Rockland, Kanata, and Gatineau. Our team is dedicated to providing high-quality service and ensuring that our customers are satisfied with the end result. Let us take care of your car while you sit back and relax.
          </p>

        </div>

      </div>

      <div className='mx-8 md:mx-[10%] flex justify-center mt-10 gap-10'>

        <div className='flex flex-col items-center mb-8' style={{width: '300px'}}>
          <img src='peace.png' alt='Peace of Mind' className='h-16 w-16 object-contain mb-4 hover:scale-125 ease-in-out duration-300' />
          <h3 className='text-sm md:text-xl font-bold mb-2'>Peace of Mind</h3>
          <p className='hidden md:block'>With our mobile auto detailing service, we guarantee a perfect clean for your car and prioritize your peace of mind.</p>
        </div>
        <div className='flex flex-col items-center mb-8' style={{width: '300px'}}>
          <img src='time.png' alt='Flexibility' className='h-16 w-16 object-contain mb-4 hover:animate-spin' />
          <h3 className='text-sm md:text-xl font-bold mb-2'>Flexibility</h3>
          <p className='hidden md:block'>We understand that our clients have busy schedules and we can work with them to find a time that fits their needs.</p>
        </div>
        <div className='flex flex-col items-center mb-8' style={{width: '300px'}}>
          <img src='spray.png' alt='Cutting-Edge Technology' className='h-16 w-16 object-contain mb-4 hover:scale-125 ease-in-out duration-300' />
          <h3 className='text-sm md:text-xl font-bold mb-2'>Cutting-Edge Technology</h3>
          <p className='hidden md:block'>We use only the latest and top-of-the-line equipment for every job!</p>
        </div>

      </div>

    </section>
  );
};

export default About;
