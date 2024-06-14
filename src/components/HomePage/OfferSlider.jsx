import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from "../../assets/images/sliderImg1.png";
import sliderImg2 from "../../assets/images/sliderImg2.png";
import sliderImg3 from "../../assets/images/sliderImg3.png";
import '../../App.css'
const slides = [
  {
    index: 1,
    src: sliderImg1,
    Heading: "Special Offer Get 2-4 Free",
    Description: "Buy Or Sell 100 USDT And Enjoy Extra Bonuses",
  },
  {
    index: 2,
    src: sliderImg2,
    Heading: "Grab Your Bonus Now!",
    Description: "Buy Or Sell 300 USDT And Receive 4-8 USDT Free",
  },
  {
    index: 3,
    src: sliderImg3,
    Heading: "Get More For Your Trade",
    Description: "Buy Or Sell 200 USDT And Receive 3-6 USDT Free",
  },
  {
    index: 4,
    src: sliderImg1,
    Heading: "Special Offer Get 2-4 Free",
    Description: "Buy Or Sell 100 USDT And Enjoy Extra Bonuses",
  },
  {
    index: 5,
    src: sliderImg2,
    Heading: "Grab Your Bonus Now!",
    Description: "Buy Or Sell 300 USDT And Receive 4-8 USDT Free",
  },
  {
    index: 6,
    src: sliderImg3,
    Heading: "Get More For Your Trade",
    Description: "Buy Or Sell 200 USDT And Receive 3-6 USDT Free",
  },
];

function OfferSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 320, // for very small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:px-20 md:px-10 xs:px-8 px-2 xs:ml-0 ml-[-23px] w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-[10px] relative">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full opacity-50"
            />
            <div className="absolute  inset-0 flex items-center xs:px-0 px-9   justify-start mb-0 xl:mb-10">
              <div className="text-white  flex flex-col gap-y-10 xs:gap-y-0 items-start text-start p-6 xs:p-10 lg:p-11 xl:p-16">
                <span className="font-semibold text-[20px] xs:text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-tight">
                  {slide.Heading}
                </span>
                <span className="text-[16px]  xs:text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[20px] pt-2 xs:pt-10 md:pt-5 xl:pt-12 leading-tight">
                  {slide.Description}
                </span>
                <button className="bg-custom-gradient w-26 sm:w-32 md:w-36 mt-3 sm:mt-6 rounded-lg p-[2px] sm:p-[2px] ease-in hover:scale-90">
                  <span className="flex text-xs sm:text-sm md:text-base w-full bg-custom-blue rounded-md px-4 py-1 sm:px-6 sm:py-2 md:px-8 md:py-1 lg:py-2">
                    <p className="bg-clip-text text-transparent bg-custom-gradient font-medium">
                      Start Now
                    </p>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OfferSlider;
