import React, { useEffect } from "react";
import successImg from "../../assets/images/successImg.png";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceFee, orderDetails, paymentMethod } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      alert("Please fill required details.");
      navigate("/payment");
    }
  }, [navigate, location.state]);

  if (!location.state) {
    return null; // Return null to prevent rendering if state is not defined
  }

  return (
    <div className="bg-custom-blue mt text-white min-h-screen flex flex-col justify-start items-center gap-y-8 px-4 sm:px-6 lg:px-8">
      <img src={successImg} alt="Success" className="h-16 sm:h-20" />

      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Buy Order Submitted</h1>
        <p className="text-sm sm:text-base text-gray-300">
          Buy order request submitted. Visit history to view your order status.
        </p>
      </div>

      <div className="text-center ">
        <p className="text-sm sm:text-lg">Buying quantity</p>
        <p className="text-lg sm:text-xl font-semibold mt-2">{orderDetails?.buyQuantity} USDT</p>
      </div>

      <div className="text-gray-300 w-full max-w-sm sm:max-w-md">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row justify-between">
            <p className="font-medium">Order Number:</p>
            <p>o0998097987iuhkj</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-medium">Payment Method:</p>
            <p>{paymentMethod}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-medium">Indicated Amount:</p>
            <p>{orderDetails?.amount} {orderDetails?.currency}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-medium">Transaction Fee:</p>
            <p>{serviceFee}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-sm sm:max-w-md">
        <button
          type="submit"
          className="ease-in hover:scale-90 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4"
        >
          View Wallet
        </button>
        <button
          type="button"
          className="ease-in hover:scale-90 w-full bg-custom-blue border border-custom-green text-custom-green font-medium py-2 rounded-md mt-4"
        >
          View History
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
