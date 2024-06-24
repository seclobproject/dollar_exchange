import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
function SocialMediaButtonsLg() {
  return (
    <div className="hidden md:block">
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-2 text-gray-500">or</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="space-y-4">
      <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
        <FcGoogle className="mr-2" /> Sign up with Google
      </button>
      <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
        <BsFacebook className="mr-2 text-blue-600" /> Sign up with
        Facebook
      </button>
      <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
        <IoLogoApple className="mr-2" /> Sign up with Apple
      </button>
    </div>
    <div className="mt-6 text-center mb-2">
      <p className="text-gray-700">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-button-color font-bold hover:underline"
        >
          LOGIN HERE
        </a>
      </p>
    </div>
  </div>
  )
}

export default SocialMediaButtonsLg
