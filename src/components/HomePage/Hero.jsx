import React from "react";
import HeroImg from "../../assets/images/HeroImg.png";
import "../../App.css"; // Import your custom CSS file for additional styles

function Hero() {
  return (
    <div className="lg:px-20 md:px-10 px-2 ">
      <div className="relative flex flex-col-reverse sm:flex-row sm:justify-end   bg-custom-blue">
    <div className="text-start p-4 space-y-2 sm:space-y-6 md:space-y-8 xl:space-y-12 mt-0 lg:mt-2 flex flex-col justify-start sm:justify-start px-10 sm:items-start sm:absolute sm:bottom-4 sm:top-12 sm:left-4 sm:bg-opacity-75 bg-transparent sm:px-2 sm:py-1">
    <p className="text-2xl xs:text-[30px] sm:text-[38px] md:text-[42px] lg:text-[50px] xl:text-[56px] bg-clip-text text-transparent bg-custom-gradient font-bold leading-tight flex flex-col gap-y-2 md:gap-y-2 lg:gap-y-3">
            Maximize Your Value
            <span className="block">With Fast, Secure, And</span>
            <span className="block">Accurate</span>
          </p>
          <p className="text-white pt-4 xs:pt-0 xs:max-w-xl max-w-sm md:text-xl sm:text-lg xs:text-md text-[15px] flex flex-col gap-y-1">
            We provide real-time exchange rates, transparent processes,
           
              and reliable service. Convert USDT to AED or AED to USDT.
          </p>
          <div className="flex space-x-4 lg:space-x-8 xs:justify-normal justify-between pt-4 sm:pt-0">
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
    <img src={HeroImg} className="px-2 xl:h-[650px]" alt="" />
  </div>
    </div>
  );
}

export default Hero;
