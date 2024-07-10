import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import authAPI from "../apis/authApi";
const { sendOtp } = authAPI();

const useHandleGetOtp = () => {
  const [showRequestButton, setShowRequestButton] = useState(true);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (!showRequestButton && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (!showRequestButton && countdown === 0) {
      clearInterval(timer);
      setShowRequestButton(true);
      setCountdown(30); // Reset countdown to 30 seconds
    }
    return () => clearInterval(timer);
  }, [showRequestButton, countdown]);

  const handleGetOtp = async (values) => {
    if (!values.emailOrNumber || !values.password) {
      toast.error("Please enter email/phone and password to get Otp", {
        position: "top-center",
      });
      return;
    }

    try {
      await sendOtp({
        email: values.emailOrNumber.includes("@")
          ? values.emailOrNumber
          : undefined,
        phone: !values.emailOrNumber.includes("@")
          ? values.emailOrNumber
          : undefined,
        password: values.password,
      });
      toast.success("OTP sent successfully", {
        position: "top-center",
      });
      setShowRequestButton(false);
    } catch (err) {
      if (err.response) {
        const status = err.response.status;
        if (status === 404) {
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        } else if (status === 400) {
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        } else if (status === 500) {
          toast.error("Server error. Please try again later.", {
            position: "top-center",
          });
        } else {
          toast.error("login  failed. Please try again.", {
            position: "top-center",
          });
        }
      } else {
        toast.error("login  failed. Please check your internet connection.", {
          position: "top-center",
        });
      }
    }
  };

  return {
    showRequestButton,
    countdown,
    setCountdown,
    handleGetOtp,
    setShowRequestButton,
  };
};

export default useHandleGetOtp;
