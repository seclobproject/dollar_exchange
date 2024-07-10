import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/authenticationPageImgs/signupImg.png";
import img2 from "../../assets/images/logo.png";
import Mobileimg from "../../assets/images/authenticationPageImgs/signupImg2.png";
import SocialMediaButtonsLg from "./SocialMediaButtonsLg";
import SocialMediaButtonsSm from "./SocialMediaButtonsSm";
import { useFormik } from "formik";
import { signUpSchema, signupInitialValues } from "../../schemas";
import authAPI from "../../apis/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { doSignup } = authAPI();

function SignUp() {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: signupInitialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values) => {
        const data = {
          name: values.name,
          email: values.emailOrNumber.includes("@")
            ? values.emailOrNumber
            : undefined,
          phone: !values.emailOrNumber.includes("@")
            ? values.emailOrNumber
            : undefined,
          country: values.country,
          password: values.password,
        };
        try {
          const res = await doSignup(data);
          toast.success(
            <div>
              Sign up successful
              <br />
              Redirecting to login...
            </div>,
            {
              position: "top-center",
              onClose: () => navigate("/login"),
            }
          );
        } catch (err) {
          if (err.response) {
            const status = err.response.status;
            if (status === 400) {
              toast.error(err.response.data.message, {
                position: "top-center",
              });
            } else if (status === 500) {
              toast.error("Server error. Please try again later.", {
                position: "top-center",
              });
            } else {
              toast.error("Sign up failed. Please try again.", {
                position: "top-center",
              });
            }
          } else {
            toast.error(
              "Sign up failed. Please check your internet connection.",
              {
                position: "top-center",
              }
            );
          }
        }
      },
    });

  return (
    <div className="flex flex-row">
      <img
        src={img}
        alt=""
        className="hidden md:block md:h-[200px] md:w-[170px] lg:w-[220px] lg:h-[250px] xl:w-[380px] xl:h-[420px]"
      />
      <ToastContainer />

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
          <div className="flex flex-row gap-x-3">
            <div className="mb-6 text-white md:text-black text-start">
              <p className="text-sm md:text-md font-medium">Register Here</p>
              <h2 className="sm:text-2xl xs:text-xl text-md  font-medium">
                Create an Account
              </h2>
            </div>
            <img
              src={Mobileimg}
              className=" md:hidden -mt-[70px] w-[110px] h-[120px] xxss:w-[130px] xxss:h-[140px]  xxs:-mt-20 xs:w-[170px] xs:h-[150px]  sm:w-[170px] sm:h-[140px]"
              alt=""
            />
          </div>

          <form onSubmit={handleSubmit}>
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
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-2 w-full text-gray-200 md:text-black  rounded-md border-2  border-gray-200 focus:border-gray-400 focus:outline-none  md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
              {touched.name && errors.name ? (
                <p className="form-error sm:text-red-600 text-red-400">
                  {errors.name}
                </p>
              ) : null}{" "}
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="emailOrNumber"
                className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
              >
                Enter Email Or Phone
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrNumber"
                value={values.emailOrNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-2 w-full border-2  border-gray-200 focus:border-gray-400 text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
              {touched.emailOrNumber && errors.emailOrNumber ? (
                <p className="form-error sm:text-red-600 text-red-400">
                  {errors.emailOrNumber}
                </p>
              ) : null}{" "}
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
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block border-2  border-gray-200 focus:border-gray-400 appearance-none w-full p-3 sm:text-md text-sm md:text-gray-700 text-gray-400   rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
                >
                  <option value="US">United States</option>
                  <option value="CA">UAE</option>
                  <option value="GB">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
                {touched.country && errors.country ? (
                  <p className="form-error sm:text-red-600 text-red-400">
                    {errors.country}
                  </p>
                ) : null}{" "}
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
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-2 w-full border-2  border-gray-200 focus:border-gray-400 text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
              {touched.password && errors.password ? (
                <p className="form-error sm:text-red-600 text-red-400">
                  {errors.password}
                </p>
              ) : null}
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
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-2   border-2  border-gray-200 focus:border-gray-400 w-full text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="form-error sm:text-red-600 text-red-400">
                  {errors.confirmPassword}
                </p>
              ) : null}
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-gray-300 rounded focus:outline-none"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-gray-400 text-xs  md:text-md sm:text-sm"
              >
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
          <SocialMediaButtonsLg />
          {/* end of social media buttons   */}

          {/* social media buttons mobile */}
          <SocialMediaButtonsSm />
          {/* end of social media buttons mobile */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
