import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";

function SocialMediaButtonsSm() {
  return (
    <div className="md:hidden mt-6 flex flex-col items-center">
    <p className="text-gray-300 text-sm sm:text-md mb-2">
      Already have an account?{" "}
      <a href="/login" className="text-blue-500 font-normal hover:underline">
        Login
      </a>
    </p>
    <p className="text-gray-300 text-sm sm:text-md mb-2">
      <a href="#" className=" font-normal hover:underline">
        Or Login with
      </a>
    </p>

    <div className="flex justify-between gap-x-6  py-3 px-6">
      <FcGoogle className="text-2xl px-1 bg-white rounded-md text-gray-700 hover:text-gray-900 cursor-pointer" />
      <BsFacebook className="text-2xl px-1 bg-white rounded-md hover:text-gray-900 cursor-pointer" />
      <IoLogoApple className="text-2xl px-1 bg-white rounded-md hover:text-gray-900 cursor-pointer" />
    </div>
  </div>
  )
}

export default SocialMediaButtonsSm
