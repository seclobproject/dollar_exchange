import React from "react";
import { TiTick } from "react-icons/ti";

function  PaymentStatus({ currentStep }) {
  return (
    <div className="px-6 ">
      <div className="flex md:items-center items-start  text-[9px] xxss:text-[11px] xs:text-sm  lg:text-base space-x-2 mb-2 ">
        <div className="flex items-center space-x-1 xxss:space-x-2">
          <span className="text-custom-green">Payment Details</span>
          <div className="h-px w-3 xs:w-4 bg-custom-green"></div>
          <TiTick className={`text-black rounded-full ${currentStep >= 1 ? "bg-custom-green" : "bg-gray-50"}`} />
          <div className={`h-px w-4 md:w-6 ${currentStep >= 1 ? "bg-custom-green" : "bg-gray-50"}`}></div>
        </div>

        <div className="flex items-center space-x-1 xxss:space-x-2 ">
          
          <span className={`${currentStep >= 2 ? "text-custom-green" : "text-white"}`}>Review</span>
          <div className={`h-px w-3 xs:w-4 md:w-6 ${currentStep >= 2 ? "bg-custom-green" : "bg-gray-50"}`}></div>
          <TiTick className={`text-black rounded-full ${currentStep >= 2 ? "bg-custom-green" : "bg-gray-50"}`} />
        </div>

        <div className="flex items-center space-x-1 xxss:space-x-2">
          <span className={`${currentStep >= 3 ? "text-custom-green" : "text-white"}`}>Payment</span>
          <div className={`h-px w-3 xs:w-4 md:w-6 ${currentStep >= 3 ? "bg-custom-green" : "bg-gray-50"}`}></div>
          <TiTick className={`text-black rounded-full ${currentStep >= 3 ? "bg-custom-green" : "bg-gray-50"}`} />
        </div>
      </div>
    </div>
  );
}

export default PaymentStatus;
