import React from "react";
import Mobileimg1 from "../../assets/images/authenticationPageImgs/frgt-pswrd-sm.png";
import Mobileimg2 from "../../assets/images/authenticationPageImgs/otpPageImgMobile.png";
import Mobileimg3 from "../../assets/images/authenticationPageImgs/newPswrd-sm.png";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import { useLocation } from "react-router-dom";
function SocialMediaButtonsSm() {
  const location = useLocation(); 
  let img
  if(location.pathname === "/forgot-password" ){
    img=Mobileimg1
  }
  else if(location.pathname === "/otp-verification"){
  img=Mobileimg2
  }else{
    img=Mobileimg3
  }
  return (
    <div className="md:hidden -mt-3 flex flex-col items-center">
      <img src={img} className="mx-auto w-2/3 xxss:w-auto  h-auto" alt="" />
      <p className="text-gray-300 text-sm sm:text-md mt-3 mb-2">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 font-normal hover:underline">
          Login
        </a>
      </p>
      <p className="text-gray-300 text-sm sm:text-md mb-2">
        <a href="#" className="font-normal hover:underline">
          Or Login with
        </a>
      </p>
      <div className="flex justify-between gap-x-6 py-3 px-6">
        <FcGoogle className="text-2xl px-1 bg-white rounded-md text-gray-700 hover:text-gray-900 cursor-pointer" />
        <BsFacebook className="text-2xl px-1 bg-white rounded-md hover:text-gray-900 cursor-pointer" />
        <IoLogoApple className="text-2xl px-1 bg-white rounded-md hover:text-gray-900 cursor-pointer" />
      </div>
    </div>
  );
}

export default SocialMediaButtonsSm;
