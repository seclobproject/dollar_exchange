import React, { useState } from "react";
import PaymentSuccess from "./PaymentStatus";
import { useNavigate } from "react-router-dom";
const ReviewDetails = ({ data, action, handleBack, setCurrentStep }) => {
  const navigate = useNavigate();
  let orderDetails;
  let orderId;
  let quantity;
  if (action === "buy") {
    orderDetails = data?.orderDetails;
    orderId = data?.orderId;
    quantity = orderDetails.buyQuantity;
  } else if (action === "sell") {
    orderDetails = data?.ExchangeDetails;
    orderId = data?.exchangeId;
    quantity = orderDetails.SellQuantity;
  }
  const paymentMethod = data.paymentMethod;


  const handleContinue = () => {
    navigate("/payment-success", {
      state: {
        serviceFee: 0,
        orderDetails,
        paymentMethod,
        orderId,
        quantity,
      },
    });
    // setCurrentStep(3);
  };



  const maskAccountNumber = (accountNumber) => {
    const maskedLength = accountNumber.length - 4;
    return "*".repeat(maskedLength) + accountNumber.slice(maskedLength);
  };



  return (
    <>
      <div className="p-6 font-normal text-white">
        <div className="grid grid-cols-2 md:mr-0 lg:mr-40 xl:mr-64 text-xs sm:text-sm md:text-base gap-x-1 gap-y-3">
          <div className="text-start">Payment Method:</div>
          <div>{paymentMethod}</div>

          {paymentMethod === "Bank" ? (
            <>
              <div className="text-start">Beneficiary Name:</div>
              <div>{fields.account_holder_name}</div>

              <div className="text-start">Branch:</div>
              <div>{fields.branch_name}</div>

              <div className="text-start">IFSC Code:</div>
              <div>{fields.ifsc_code}</div>

              <div className="text-start">Buy Quantity:</div>
              <div>{orderDetails.buyQuantity}</div>

              <div className="text-start">Amount:</div>
              <div>{orderDetails.amount}</div>

              <div className="text-start">Bank Name:</div>
              <div>{fields.bank_name}</div>

              <div className="text-start">Account No:</div>
              <div>{maskAccountNumber(fields.account_no)}</div>

              <div className="text-start">Account Type:</div>
              <div>{fields.account_type}</div>
            </>
          ) : (
            <>
              <div className="text-start">Company Name:</div>
              <div>{data?.codDetails?.companyName}</div>

              <div className="text-start">Phone Number:</div>
              <div>{data?.codDetails?.phoneNumber}</div>

              <div className="text-start">Email Id:</div>
              <div>{data?.codDetails?.emailId}</div>

              <div className="text-start">Country:</div>
              <div>{data?.codDetails?.country}</div>

              <div className="text-start">Full Address:</div>
              <div>{data?.codDetails?.fullAddress}</div>

              <div className="text-start">Quantity:</div>
              <div>{quantity}</div>

              <div className="text-start">Amount:</div>
              <div>
                {orderDetails?.Totalamount}
                {"  "}
                {orderDetails?.currency}
              </div>
            </>
          )}
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
