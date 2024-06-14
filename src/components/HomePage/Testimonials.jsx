import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";
import userImg from "../../assets/images/userImg.png";
import ratingImg from "../../assets/images/rating.png";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default slides to show
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1440, // for extra large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
        },
      },
      {
        breakpoint: 1280, // for large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600, // for mid-sized devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
          centerPadding: "40px", // Adjust padding as needed for peek effect
        },
      },
      {
        breakpoint: 480, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
          centerPadding: "40px", // Adjust padding as needed for peek effect
        },
      },
      {
        breakpoint: 320, // for very small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
          centerPadding: "10px", // Adjust padding as needed for peek effect
        },
      },
    ],
  };

  return (
    <div className="carousel-container lg:px-20 md:px-10 px-7 xs:px-10 py-6">
      <Slider {...settings}>
        {Array(10)
          .fill()
          .map((_, index) => (
            <div key={index} className="px-2">
<span className="items-center sm:items-start py-4 sm:py-2 md:py-6 xl:py-10 flex-grow xs:w-full w-auto xs:px-6 px-4 sm:px-10 flex flex-col gap-y-4 p-2 mt-8 justify-center bg-custom-gray text-white rounded-md">
<div className="flex sm:flex-row flex-col justify-center gap-x-3 items-center">
                  <img src={userImg} alt="User" />
                  <span className="flex flex-col gap-y-2">
                    <p className="text-sm sm:text-base">John Smith</p>
                    <img src={ratingImg} alt="Rating" />
                  </span>
                </div>
                <span className="sm:text-lg md:text-sm text-[12px] xs:text-[15px]">
                  Great platform for Exchange currency! Easy to use with clear interface. Great platform for Exchange currency! Easy to use with clear interface. Great platform for Exchange currency.
                </span>
              </span>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
