import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import img from "../../assets/images/authenticationPageImgs/newPswrdImg.png";
import img2 from "../../assets/images/logo.png";
import Mobileimg from "../../assets/images/authenticationPageImgs/newPswrd-sm.png";

function NewPswrd() {
  return (
    <div className="flex flex-row ">
      <img
        src={img}
        alt=""
        className="hidden md:block md:h-[200px] md:w-[170px] lg:w-[220px] lg:h-[250px] xl:w-[380px] xl:h-[420px]"
      />
      <div className="hidden md:flex flex-col lg:gap-y-8 md:gap-y-4 gap-y-0 pt-24 xl:pl-7 pl-0 text-white justify-center items-start">
        <img className="w-[160px]" src={img2} alt="" />
        <p className="md:text-2xl lg:text-4xl font-bold">
          Transact swiftly, <br /> safeguarded
        </p>
        <p className="lg:max-w-[300px] md:max-w-[200px] text-xs lg:text-sm text-gray-400">
          We ensure expeditious, fortified, and enhanced operations. The
          protection of your transactions is our paramount concern.
        </p>
      </div>

      <div className=" md:ml-10 lg:ml-0 md:pr-8 lg:pr-20 xl:pr-36 pr-0 ml-0 md:mt-10 -mt-6 flex flex-1 md:flex-auto items-center pt-16 rounded-xl justify-center md:bg-custom-blue">
        {/* Added flex flex-col justify-between h-full to this div */}
        <div className="bg-custom-blue md:bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-sm flex flex-col gap-y-10 h-full">
          <div>
            {/* Create account text and image */}

            <div className="mb-6 text-white md:text-black text-start">
              <p className="text-xs sm:text-sm md:text-md font-light md:font-medium">
                New Password
              </p>
              <h2 className="sm:text-2xl xs:text-xl text-lg font-normal md:font-medium">
                Create New Password{" "}
              </h2>
            </div>

            {/* End of Create account text and image */}

            <form>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
              >
                Enter New Password
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
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="p-2   border-2  border-gray-200 focus:border-gray-400 w-full text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
            </div>

              <button
                type="submit"
                className="w-full font-medium md:bg-button-color bg-white md:text-white text-black py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              >
                GET OTP
              </button>
            </form>
          </div>
          {/* social media buttons */}
          <div className="hidden md:block mt-6">
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
          {/* end of social media buttons */}
          <div className="md:hidden mt-6 flex flex-col items-center">
            <img src={Mobileimg} className="mx-auto w-auto h-auto" alt="" />
            <p className="text-gray-300 text-sm sm:text-md mt-3 mb-2">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 font-normal hover:underline">
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
        </div>
      </div>
    </div>
  );
}

export default NewPswrd;