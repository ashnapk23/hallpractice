import React from 'react';

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#df0043] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#fe4164] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-white'>Scroll Down for Events</button>
      </div>
    </div>
  );
};

export default Hero;