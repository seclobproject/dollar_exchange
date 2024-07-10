import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import img from "../../assets/images/authenticationPageImgs/otpPageImg.png";
import img2 from "../../assets/images/logo.png";
import Mobileimg from "../../assets/images/authenticationPageImgs/otpPageImgMobile.png";
import authAPI from "../../apis/authApi";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocailMediaButtons from "../socialMediaButtons/SocailMediaButtons";
import SocialMediaButtonsSm from "../socialMediaButtons/SocialMediaButtonsSm";
const { confirmOtp, forgotPassword } = authAPI();

function OtpVerificationComponent() {
  const location = useLocation();
  const { userData } = location.state || {};
  console.log(userData);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30); // Timer state
  const [showGetOtpButton, setShowGetOtpButton] = useState(false); // Button visibility state

  useEffect(() => {
    // Start the timer when the component mounts
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setShowGetOtpButton(true); // Show the button when the timer reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const enteredOtp = otp.join("");
      await confirmOtp({ otp: enteredOtp });
      toast.success("You are verified, create a new password", {
        position: "top-center",
      });

      setTimeout(() => {
        navigate("/new-password");
      }, 2500);

      setOtp(["", "", "", "", ""]);
    } catch (err) {
      toast.error("Otp expired or invalid otp", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOtp = async () => {
    try {
      await forgotPassword(userData);
      toast.success("Otp has been sent to your email", {
        position: "top-center",
      });

      // Reset the timer to 30 seconds and show the button
      setTimer(30);
      setShowGetOtpButton(false);

      // Start the countdown again
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setShowGetOtpButton(true); // Show the button when the timer reaches 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      if (err) {
        toast.error(err.response.data.message, {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="flex flex-row ">
      <ToastContainer />
      <img
        src={img}
        alt=""
        className="hidden md:block mt-3 md:h-[200px] md:w-[170px] lg:w-[220px] lg:h-[250px] xl:w-[380px] xl:h-[420px]"
      />
      <div className="hidden md:flex flex-col lg:gap-y-8 md:gap-y-4 gap-y-0 pt-24 xl:pl-7 pl-0 text-white justify-center items-start">
        <img className="w-[160px]" src={img2} alt="" />
        <p className="md:text-2xl lg:text-4xl font-bold">
          Simple, secure,
          <br /> and with great <br /> value.
        </p>
        <p className="lg:max-w-[300px] md:max-w-[200px] text-xs lg:text-sm text-gray-400">
          Our platform is designed with simplicity. Offering seamless and secure
          USDT to AED and AED to USDT exchange.
        </p>
      </div>

      <div className=" md:ml-10 lg:ml-0 md:pr-8 lg:pr-20 xl:pr-36 pr-0 ml-0 md:mt-10 -mt-6 flex flex-1 md:flex-auto items-center pt-16 rounded-xl justify-center md:bg-custom-blue">
        <div className="bg-custom-blue md:bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-sm flex flex-col gap-y-10 h-full">
          <div>
            <div className="mb-6 text-white md:text-black text-start">
              <p className="text-xs sm:text-sm md:text-md font-light md:font-medium">
                Enter Verification Code
              </p>
              <h2 className="sm:text-2xl xs:text-xl text-lg font-normal md:font-medium">
                Verification Code{" "}
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2 flex justify-between items-center">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-12 h-12 text-center text-gray-200 md:text-black rounded-md border-2 border-gray-200 focus:border-gray-400 focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      required
                    />
                  );
                })}
              </div>
              <div className="mb-6 flex justify-end">
                {showGetOtpButton ? (
                  <span
                    onClick={handleOtp}
                    className="text-sm md:text-md md:font-medium font-normal md:text-gray-800 text-white cursor-pointer"
                  >
                    Get OTP
                  </span>
                ) : (
                  <span className="text-sm md:text-md md:font-medium font-normal md:text-gray-800 text-white">
                    Resend OTP in {timer}s
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full mt-3 font-medium md:bg-button-color bg-white md:text-white text-black py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
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
                  "VERIFY"
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

export default OtpVerificationComponent;
