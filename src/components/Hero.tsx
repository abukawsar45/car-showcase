'use client';


import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {

  const handleScroll = () => {
    console.log('hero line 7')
  }
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className="flex-1 pt-36 px-4">
        <h1 className='2xl:text-7xl sm:text-6xl text-5xl font-extrabold' >Find, book, or rent a car -- quickly and easily!</h1>
        <p className='text-3xl text-black mt-5' >Streamline your car rental experience with our effortless booking process.</p>
        
        <CustomButton title='Explore Cars' containerstyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
    </div>
  )
}

export default Hero;