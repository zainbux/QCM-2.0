'use client'

import { FaArrowCircleLeft, FaArrowCircleRight, FaDotCircle } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';


type ImageCarouselProps = {
    images: string[];
  };
  
  const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imagesIndex: number) => {
    setCurrentIndex(imagesIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group bg-primary'>


      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FaArrowCircleLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FaArrowCircleRight onClick={nextSlide} size={30} />
      </div>
      
      <div className='flex top-4 justify-center py-2'>
        {images.map((image, imagesIndex) => (
          <div
            key={imagesIndex}
            onClick={() => goToSlide(imagesIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='text-white'/>
          </div>
        ))}
      </div>
    </div>
  );

};

export default ImageCarousel;
