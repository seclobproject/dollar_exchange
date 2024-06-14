import React from "react";
import HeroImg from "../../assets/images/HeroImg.png";
import "../../App.css"; // Import your custom CSS file for additional styles

function Hero() {
  return (
    <div className="lg:px-20 md:px-10 px-4 ">
      <div className="lg:flex lg:flex-row justify-end items-start relative font-poppins">
        <img src={HeroImg} className="relative lg:w-auto w-full" alt="Hero" />
        <div className="flex flex-col w-full lg:w-auto absolute top-0 left-0 z-10 text-start p-4 space-y-2 sm:space-y-6 md:space-y-8 xl:space-y-12 mt-0 lg:mt-10">
          <p className="text-[10px] xs:text-[30px] sm:text-[38px] md:text-[42px] lg:text-[50px] xl:text-[56px] bg-clip-text text-transparent bg-custom-gradient font-bold leading-tight flex flex-col gap-y-0 md:gap-y-2 lg:gap-y-3">
            Maximize Your Value
            <span className="block">With Fast, Secure, And</span>
            <span className="block">Accurate</span>
          </p>
          <p className="text-white xl:text-[24px] md:text-xl lg:text-2xl sm:text-[10px] xs:text-[10px] text-[7px] flex flex-col gap-y-1">
            We provide real-time exchange rates, transparent processes,
            <span>
              and reliable service. Convert USDT to AED or AED to USDT.
            </span>
          </p>
          <div className="flex space-x-4 lg:space-x-8 pt-2 sm:pt-0">
            <button className="bg-custom-gradient rounded-lg p-[2px] sm:p-[2px] ease-in hover:scale-90">
              <span className="flex text-xs sm:text-sm md:text-base w-full bg-custom-blue text-white rounded-md px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3">
                Sign Up
              </span>
            </button>
            <button className="bg-custom-gradient rounded-lg p-[1px] sm:p-[2px] ease-in hover:scale-90 ">
              <span className="flex text-xs sm:text-sm md:text-base w-full bg-custom-blue text-white rounded-md px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3">
                Get Started
              </span>
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
