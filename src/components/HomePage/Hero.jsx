import React from 'react'
import HeroImg from '../../assets/Images/HeroImg.png'
function Hero() {
  return (
    <div className='flex flex-row justify-end items-start relative '>
      <div className='flex flex-col absolute top-0 left-0  z-10 text-start'>
        <p className='text-2xl text-gradient-to-r from-blue-300 via-purple-500 to-pink-500 '>Maximize Your Value With Fast, Secure, And Accurate</p>
        <p className='text-base text-white'>We provide real-time exchange rates, transparent processes, and reliable service. Convert USDT to AED or AED to USDT</p>
        <button className='bg-blue text-white px-4 py-4'>signup</button>
        <button className='bg-blue text-white px-4 py-4'>getStarted</button>
      </div>
      <img src={HeroImg} className='relative ' alt="" />
    </div>
  )
}


export default Hero
