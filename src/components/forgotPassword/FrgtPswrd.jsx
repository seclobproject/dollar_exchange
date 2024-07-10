import React, { useState } from "react";
import img from "../../assets/images/authenticationPageImgs/frgt-password-lg.png";
import img2 from "../../assets/images/logo.png";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocailMediaButtons from "../socialMediaButtons/SocailMediaButtons";
import SocialMediaButtonsSm from "../socialMediaButtons/SocialMediaButtonsSm";
import authAPI from "../../apis/authApi";
const { forgotPassword } = authAPI();
function FrgtPswrd() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { emailOrNumber: "" },
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const data = {
            email: values.emailOrNumber.includes("@")
              ? values.emailOrNumber
              : undefined,
            phone: !values.emailOrNumber.includes("@")
              ? values.emailOrNumber
              : undefined,
          };
          const res = await forgotPassword(data);
          const id = res.userId;
          localStorage.setItem("userId", id);
          toast.success("Otp has send to your mail ", {
            position: "top-center",
          });
          setTimeout(() => {
            navigate("/otp-verification", {
              state: {
                userData: data,
              },
            });
          }, 2500);
        } catch (err) {
          if (err) {
            toast.error(err.response.data.message, {
              position: "top-center",
            });
          }
        } finally {
          setLoading(false);
        }
      },
    });
  // const handleOtp = () => {
  //   navigate("/otp-verification");
  // };

  return (
    <div className="flex flex-row">
      <ToastContainer />
      <img
        src={img}
        alt=""
        className="hidden md:block md:h-[200px] md:w-[170px] lg:w-[220px] lg:h-[250px] xl:w-[380px] xl:h-[420px]"
      />
      <div className="hidden md:flex flex-col lg:gap-y-8 md:gap-y-4 gap-y-0 pt-24 xl:pl-7 pl-0 text-white justify-center items-start">
        <img className="w-[160px]" src={img2} alt="" />
        <p className="md:text-2xl lg:text-4xl font-bold">
          Exchange dollars <br />
          at competitive <br />
          rates
        </p>
        <p className="lg:max-w-[300px] md:max-w-[200px] text-xs lg:text-sm text-gray-400">
          Our platform offers competitive rates on dollar exchanges, ensuring
          you get the most value for your money.
        </p>
      </div>

      <div className="md:ml-10 lg:ml-0 md:pr-8 lg:pr-20 xl:pr-36 pr-0 ml-0 md:mt-10 -mt-6 flex flex-1 md:flex-auto items-center pt-16 rounded-xl justify-center md:bg-custom-blue">
        <div className="bg-custom-blue md:bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-sm flex flex-col gap-y-10 h-full">
          <div>
            <div className="mb-6 text-white md:text-black text-start">
              <p className="text-xs sm:text-sm md:text-md font-light md:font-medium">
                Reset Your Password
              </p>
              <h2 className="sm:text-2xl xs:text-xl text-lg font-normal md:font-medium">
                Forgot Password
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 relative">
                <label
                  htmlFor="emailOrPhone"
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
                  className="p-2 w-full border-2 border-gray-200 focus:border-gray-400 text-gray-200 md:text-black rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
                />
                {touched.emailOrNumber && errors.emailOrNumber ? (
                  <p className="form-error sm:text-red-600 text-red-400">
                    {errors.emailOrNumber}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full font-medium md:bg-button-color bg-white md:text-white text-black py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  "GET OTP"
                )}
              </button>
            </form>
          </div>
          <SocailMediaButtons />
          <SocialMediaButtonsSm />
        </div>
      </div>
    </div>
  );
}

export default FrgtPswrd;
