import React from "react";

const FinalPaymentDetails = ({ serviceFee, totalPayment, handlePay, handleBackToReview }) => {
  return (
    <div className="p-6 font-normal text-white">
      <div className="flex flex-col items-start xl:w-1/2 w-full justify-start border rounded-md border-gray-500 p-4">
        <div className="flex flex-row justify-between w-full mb-2">
          <span>QTY:</span>
          <p>850 USDT</p>
        </div>
        <div className="flex flex-row justify-between w-full mb-2">
          <span>Service Fee:</span>
          <p>{serviceFee} AED</p>
        </div>
        <div className="flex flex-row justify-between w-full mb-2">
          <span>Total Payment:</span>
          <p>{totalPayment} AED</p>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <button
          type="button"
          onClick={handlePay}
          className="ease-in hover:scale-90 md:w-60 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
        >
          Pay
        </button>
        <button
          type="button"
          onClick={handleBackToReview}
          className="ease-in hover:scale-90 md:w-60 w-full bg-custom-blue border border-custom-green text-custom-green font-medium py-2 rounded-md mt-4 md:mt-6"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default FinalPaymentDetails;



