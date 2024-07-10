import React from 'react';
import img from '../../assets/images/exchangePage/exchangeImg.png';
import img2 from '../../assets/images/exchangePage/exchangeImg2.png';
import useConversionRate from "../../custom_hooks/useConversionRate"; 

function Hero() {
  const conversionRate = useConversionRate("USDT", "INR"); 
  const adjustedBuyingRate = conversionRate ? (conversionRate - 2).toFixed(2) : null;

  return (
    <div className="relative">
      <img src={img} alt="Background" className="w-full h-[160px] xs:h-[200px] sm:h-full" />
      <div className="absolute inset-0 flex justify-center items-center px-1">
       
      <div className="relative">
          <img src={img2} alt="Overlay" className="w-4/5 md:w-3/5 lg:w-4/5 xl:w-full h-auto  mx-auto" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 gap-y-1">
            <p className="text-xs xs:text-sm md:text-lg lg:text-xl xl:text-2xl xs:font-medium font-normal text-white">Buying Price</p>
            <p className="text-md xs:text-xl md:text-2xl mt-0 md:mt-1 lg:text-4xl xl:text-6xl font-semibold bg-clip-text text-transparent bg-custom-gradient ">
              {adjustedBuyingRate} INR
            </p>
            <h1 className="text-xs sm:text-md md:text-xl lg:text-xl xl:text-2xl md:mt-2 xs:font-medium font-normal text-white ">
              1 USDT = {conversionRate ?.toFixed(2)} INR
            </h1>
          </div>
        </div>

        <div className="relative">
          <img src={img2} alt="Overlay" className="w-4/5 md:w-3/5 lg:w-4/5 xl:w-full h-auto  mx-auto" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 gap-y-1">
            <p className="text-xs xs:text-sm md:text-lg lg:text-xl xl:text-2xl xs:font-medium font-normal text-white">Selling Price</p>
            <p className="text-md xs:text-xl md:text-2xl mt-0 md:mt-1 lg:text-4xl xl:text-6xl font-semibold bg-clip-text text-transparent bg-custom-gradient ">
              {conversionRate ?.toFixed(2)} INR
            </p>
            <h1 className="text-xs sm:text-md md:text-xl lg:text-xl xl:text-2xl md:mt-2 xs:font-medium font-normal text-white ">
              1 USDT = {conversionRate ?.toFixed(2)} INR
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
