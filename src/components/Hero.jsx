import React from 'react';
import HeroImg from '../assets/Images/HeroImg.png';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-gray-900 relative">
      <div className="text-center lg:text-left lg:absolute lg:inset-0 z-10 lg:flex lg:flex-col lg:justify-center px-4">
        <p className="text-2xl bg-gradient-to-r from-blue-100 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mb-4">
          Maximize Your Value With Fast, Secure, And Accurate
        </p>
        <p className="text-base text-white mb-8">
          We provide real-time exchange rates, transparent processes, and reliable service. Convert USDT to AED or AED to USDT
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </div>
      <img src={HeroImg} className="relative lg:ml-10" alt="Hero" />
    </div>
  );
}

export default Hero;
