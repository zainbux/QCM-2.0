'use client'


import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight, FaDotCircle } from 'react-icons/fa';

const Photos = () => {
    const slides = [
        {
          url: 'bmw1.png',
        },
        {
          url: 'bmw2.png',
        },
        {
          url: 'wheel.png',
        },
        {
          url: 'seat.png',
        },
        {
          url: 'cup-holder.png',
        },
    
        {
          url: 'BEFORE.png',
        },
        {
          url: 'door.png',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <div>
        <div className='text-6xl font-semibold text-blue-100 text-center bg-primary '>
            <h1 className='py-20'>Our Work</h1>
        </div>

        <div className=' h-[280px] md:h-[680px] w-full m-auto  relative group'>
        <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full bg-center bg-contain bg-no-repeat duration-200 bg-primary'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
            <FaArrowCircleLeft onClick={prevSlide} className=' text-5xl md:text-8xl hover:text-slate-400 active:text-slate-600' />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
            <FaArrowCircleRight onClick={nextSlide} className=' text-5xl md:text-8xl hover:text-slate-400 active:text-slate-600' />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
            >
               
            </div>
            ))}
        </div>
        </div>
        
    </div>
  )
}

export default Photos



