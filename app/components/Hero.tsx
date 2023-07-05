'use client'

import Discount from './Discount';
import GetStarted from './GetStarted';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='md:flex items-center justify-between h-[70vh] md:h-[80vh] md:px-20 md:pb-20 pt-24 md:pt-0'>
      <div className='flex flex-col items-center md:items-start md:justify-between'>

        {/* discount banner */}
        {/* <div className='mb-5'>
          <Discount />
        </div> */}

        {/* hero titles */}
        <div className='leading-[1] font-poppins font-semibold text-white text-center md:text-left text-[50px] md:text-[70px] mb-4 '>
          <span>Welcome to</span>
          <br />
          <span className='text-gradient animate-pulse'>Quantum Clean</span>
          <br />
          <h2 className='text-[20px] md:text-[30px] mt-5 text-blue-100'>
            The premier mobile auto detailing service that comes to you!
          </h2>
        </div>

        {/* Buttons */}
        <div className='md:flex'>
          <Link legacyBehavior href="#about" >
            <p className="hover:scale-110 duration-200 ease-out inline-block px-6 py-3 mr-3 font-bold  text-center align-middle transition-all bg-bg-primary border border-secondary rounded-sm cursor-pointer border-gradient leading-pro text-md ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-secondary hover:bg-white hover:text-primary active:opacity-80">
              Learn More
            </p>
          </Link>
          <Link legacyBehavior href="#contact" >
            <p className="hover:scale-110 duration-200 ease-out mr-3 inline-block px-6 py-3 font-bold text-center bg-secondary uppercase align-middle transition-all rounded-sm cursor-pointer leading-pro text-md ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25  text-primary  hover:bg-white active:opacity-80">
              Book Now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
