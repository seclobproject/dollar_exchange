import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/images/exchangePage/currencyImg.png";
import { currencyNames } from "./data";
const BASE_URL = import.meta.env.VITE_CURRENCIES_URL2;

function SliderComponent() {
  const [usdRates, setUsdRates] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}?from=USD`)
      .then((res) => res.json())
      .then((data) => {
        setUsdRates(data.rates);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Disable center mode for very small screens
          centerPadding: "20px", // Remove padding for very small screens
        },
      },
    ],
  };

  return (
    <div className="bg-custom-blue min-h-screen p-4 px-12 sm:px-10">
      <h1 className="text-white text-start text-md xs:text-xl sm:text-2xl lg:text-3xl ml-5 font-semibold mb-4">
        Market List
      </h1>
      <Slider {...settings}>
        {Object.keys(usdRates).map((currency) => (
          <div key={currency} className="px-4">
            <div className="bg-custom-blue flex flex-col gap-2 border border-green-200 p-4 rounded shadow-md text-center">
              <div className="flex flex-row justify-start items-center gap-x-2">
                <img src={img} alt="" className="w-8 h-8 xxss:w-auto" />
                <div className="text-sm xxss:text-md xs:text-lg sm:text-xl text-gray-400 font-bold">
                  {usdRates[currency].toFixed(2)} USDT
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-white  xxss:text-md text-xs font-medium">
                  {currency}/USDT
                </span>
                <span className="text-gray-400 text-[9px] xxss:text-xs xs:text-sm">
                  {currencyNames[currency]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
