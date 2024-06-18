import React from 'react';
import imgOne from '../../assets/images/detailImg1.png';
import imgTwo from '../../assets/images/detailImg2.png';
import imgThree from '../../assets/images/detailImg3.png';
import buttonImg from '../../assets/images/buttonImg.png'

const cardData = [
  {
    img: imgOne,
    title: 'Safe & Secure',
    description:
      'Experience safe and secure currency exchange and effortlessly convert USDT to AED and AED to USDT, backed by robust security measures to protect your transactions.',
  },
  {
    img: imgTwo,
    title: 'Fast & Reliable',
    description:
      'Enjoy fast and reliable currency exchange services with instant processing times and accurate exchange rates to facilitate seamless transactions.',
  },
  {
    img: imgThree,
    title: 'User-Friendly Interface',
    description:
      'Navigate our user-friendly interface designed for optimal convenience, enabling hassle-free currency exchange and financial management.',
  },
];

function Details() {
  return (
    <div className="lg:px-20 md:px-10 px-4 text-white mt-10 xs:mt-16">
      <h1 className='text-base font-semibold xs:text-xl sm:text-2xl ml-6 xs:ml-4 my-6 xs:my-10'>Currency Exchange Made Effortless & Efficient</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 xs:px-6 xl:px-4 gap-6 md:gap-8 ">
        {cardData.map((card, index) => (
          <div key={index} className="p-4 md:p-3 lg:p-4 border-gray-600 border-2 gap-1 lg:gap-2 xl:gap-5 rounded-lg flex flex-col justify-center items-center text-center">
            <img src={card.img} alt="" className="rounded-sm w-48 xs:w-96 xl:w-60" />
            <h1 className="font-medium text-[12px] xs:text-[18px] sm:text-[20px] md:text-[16px] lg:text-[24px] mt-2">{card.title}</h1>
            <span className='text-[10px] xs:text-[13px] md:text-[10px] lg:text-[11px] xl:text-[14px]'>{card.description}</span>
            <span><img src={buttonImg} className='ease-in hover:scale-90 w-5 h-5 xs:w-6 xs:h-full xl:w-full py-2 md:py-1 ' alt="" /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
