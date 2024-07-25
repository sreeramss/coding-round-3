import React from 'react'
import img1 from '../assets/GK-hpZKWgAAHaBt.jpg'
function Hero() {
  return (
    <div className='m-4 bg-[#e0d9cf] hidden sm:block rounded-lg  '>
        <div className=' p-2 w-full rounded-xl h-[220px]  '>
            <img className='px-2 w-[100%] h-[100%] rounded-2xl object-cover object-top pt-2' src={img1} alt="Bg-Image " />
        </div>
        <div className='p-2'>
            <p className='px-2'>Discover Your Inner Peace</p>
            <p className='px-2 py-2 text-[10px]'>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
        </div>
    </div>
  )
}

export default Hero