import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import img from "../../assets/images/authenticationPageImgs/signupImg.png";
import img2 from "../../assets/images/logo.png";
import Mobileimg from "../../assets/images/authenticationPageImgs/signupImg2.png";

function SignUp() {
  return (
    <div className="flex flex-row">
      <img
        src={img}
        alt=""
        className="hidden md:block md:h-[200px] md:w-[170px] lg:w-[220px] lg:h-[250px] xl:w-[380px] xl:h-[420px]"
      />
      <div className="hidden md:flex flex-col gap-y-4 pb-20 xl:pl-7 pl-0 text-white my-auto   items-start">
        <img className="w-[160px] " src={img2} alt="" />
        <p className="text-2xl font-bold">
          Maximize Your <br /> Value
        </p>
        <p className="lg:max-w-xs md:max-w-[200px] text-xs lg:text-sm text-gray-400">
          Maximize the value of your currency exchange between USDT and AED. We
          provide simplicity and value with our USDT to AED and AED to USDT
          exchange platform
        </p>
      </div>

      <div className=" md:ml-10 lg:ml-0 md:pr-8 lg:pr-20 xl:pr-36 pr-0 ml-0 mt-10 flex flex-1 md:flex-auto items-center rounded-xl justify-center md:bg-custom-blue">
        <div className="bg-custom-blue md:bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-sm">
          {/* Create account text and image */}
          <div className="flex flex-row gap-x-2">
            <div className="mb-6 text-white md:text-black text-start">
              <p className="text-sm md:text-md font-medium">Register Here</p>
              <h2 className="sm:text-2xl xs:text-xl text-md  font-medium">
                Create an Account
              </h2>
            </div>
            <img
              src={Mobileimg}
              className="md:hidden -mt-[70px] xs:-mt-20 xs:w-[170px] xs:h-[150px] sm:w-[170px] sm:h-[140px] w-[150px] h-[130px]"
              alt=""
            />
          </div>
          {/* End of Create account text and image */}

          <form>
          <div className="mb-4 relative">
  <label
    htmlFor="name"
    className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
  >
    Your Name
  </label>
  <input
    type="text"
    id="name"
    className="p-2 w-full text-gray-200 md:text-black  rounded-md border-2  border-gray-200 focus:border-gray-400 focus:outline-none  md:bg-white bg-custom-blue focus:ring-opacity-50"
  />
</div>

            <div className="mb-4 relative">
              <label
                htmlFor="emailOrPhone"
                className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
              >
                Enter Email Or Phone
              </label>
              <input
                type="text"
                id="emailOrPhone"
                className="p-2 w-full border-2  border-gray-200 focus:border-gray-400 text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="country"
                className="block sm:text-md text-sm md:text-gray-700 text-gray-400  mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1 z-10"
              >
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  className="block border-2  border-gray-200 focus:border-gray-400 appearance-none w-full p-3 sm:text-md text-sm md:text-gray-700 text-gray-400   rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
                >
                  <option value="US">United States</option>
                  <option value="CA">UAE</option>
                  <option value="GB">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-2 w-full border-2  border-gray-200 focus:border-gray-400 text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="p-2   border-2  border-gray-200 focus:border-gray-400 w-full text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-gray-300 rounded focus:outline-none"
              />
              <label htmlFor="terms" className="ml-2 text-gray-400 text-xs  md:text-md sm:text-sm">
                I agree to Vaultizo <br />
                <span className="text-blue-400 ">
                  Terms of Service, Privacy Policy & Cookie Policy
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full font-medium md:bg-button-color bg-white md:text-white text-black py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Get Started
            </button>
          </form>
          {/* social media buttons   */}
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
                href="#"
                className="text-button-color font-bold hover:underline"
              >
                LOGIN HERE
              </a>
            </p>
          </div>
          </div>
         {/* end of social media buttons   */}
     {/* social media buttons mobile */}
<div className="md:hidden mt-6 flex flex-col items-center">
  <p className="text-gray-300 text-sm sm:text-md mb-2">Already have an account? <a href="#" className="text-blue-500 font-normal hover:underline">Login</a></p>
  <p className="text-gray-300 text-sm sm:text-md mb-2"><a href="#" className=" font-normal hover:underline">Or Login with</a></p>

  <div className="flex justify-between gap-x-6  py-3 px-6">
    <FcGoogle className="text-2xl px-1 bg-white rounded-md text-gray-700 hover:text-gray-900 cursor-pointer" />
    <BsFacebook className="text-2xl px-1 bg-white rounded-md hover:text-gray-900 cursor-pointer" />
    <IoLogoApple className="text-2xl px-1 bg-white rounded-md hover:text-gray-900 cursor-pointer" />
  </div>
</div>
{/* end of social media buttons mobile */}


        </div>
      </div>
    </div>
  );
}

export default SignUp;
