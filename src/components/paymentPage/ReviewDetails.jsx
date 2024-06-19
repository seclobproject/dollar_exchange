import React, { useState } from "react";
import FinalPaymentDetails from "./FinalPaymentDetails";
import PaymentStatus from "./PaymentStatus";

const ReviewDetails = ({ fields, paymentMethod, handleBack, setCurrentStep }) => {
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const handleContinue = () => {
    setShowPaymentDetails(true);
    setCurrentStep(3)
  };

  const handlePay = () => {
    alert("Payment process initiated.");
  };

  const handleBackToReview = () => {
    setShowPaymentDetails(false);
    setCurrentStep(2)
  };

  if (showPaymentDetails) {
    return (
      <>
        <FinalPaymentDetails
          serviceFee={0}
          totalPayment={3119.5}
          handlePay={handlePay}
          handleBackToReview={handleBackToReview}
        />
      </>
    );
  }

  return (
    <>
      <div className="p-6 font-normal text-white">
        <div className="grid grid-cols-2 md:mr-0 lg:mr-40 xl:mr-64 text-xs sm:text-sm md:text-base gap-x-1 gap-y-3">
          <div className="text-start">Payment Method:</div>
          <div>{paymentMethod}</div>

          <div className="text-start">Company Name:</div>
          <div>{fields.company_name}</div>

          <div className="text-start">Phone Number:</div>
          <div>{fields.phone_number}</div>

          <div className="text-start">Email Id:</div>
          <div>{fields.email_id}</div>

          <div className="text-start">Country:</div>
          <div>{fields.country}</div>

          <div className="text-start">Full Address:</div>
          <div>{fields.full_address}</div>

          <div className="text-start">Quantity:</div>
          <div>{fields.buy_quantity}</div>

          <div className="text-start">Amount:</div>
          <div>{fields.amount}</div>
        </div>
        <div className="flex flex-col mt-6">
          <button
            type="button"
            onClick={handleContinue}
            className="ease-in hover:scale-90 md:w-60 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="ease-in hover:scale-90 md:w-60 w-full bg-custom-blue border border-custom-green text-custom-green font-medium py-2 rounded-md mt-4 md:mt-6"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
