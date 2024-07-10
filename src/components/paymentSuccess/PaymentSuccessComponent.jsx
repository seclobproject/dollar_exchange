import React, { useEffect } from "react";
import successImg from "../../assets/images/successImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/authContext";
const PaymentSuccessPage = () => {
  const { action } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceFee, orderDetails, quantity, paymentMethod, orderId } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      toast.error("Please fill required details.", {
        position: "top-center",
        autoClose: 1000,
        onClose: () => navigate("/buyingPage"),
      });
    }
  }, [navigate, location.state]);

  // if (!location.state) {
  //   return null; // Return null to prevent rendering if state is not defined
  // }

  const handleClick = () => {
    navigate("/order-status");
  };

  return (
    <div className="bg-custom-blue text-white min-h-screen flex flex-col justify-start items-center gap-y-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <img src={successImg} alt="Success" className="h-16 sm:h-20" />

      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          
        {action==='buy'?'Buy':'Selling'} Order Submitted
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Buy order request submitted. Visit history to view your order status.
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm sm:text-lg">{action==='buy'?'Buying Quantity':'Selling Quantity'}</p>
        <p className="text-lg sm:text-xl font-semibold mt-2">{quantity} USDT</p>
      </div>

      <div className="text-gray-300 w-full max-w-sm sm:max-w-md">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row justify-between">
            <p className="font-medium">Order Number:</p>
            <p>{orderId}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-medium">Payment Method:</p>
            <p>{paymentMethod}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-medium">Indicated Amount:</p>
            <p>
              {orderDetails?.Totalamount} {orderDetails?.currency}
            </p>
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
          onClick={handleClick}
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
