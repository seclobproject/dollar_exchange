import React from "react";
import { TiTick } from "react-icons/ti";

function PaymentStatus({isReview}) {
  return (
    <div className="px-6 ">
      <div className="flex md:items-center items-start  text-[9px] xxs:text-sm  lg:text-base space-x-2 mb-2 ">
        <div className="flex items-center space-x-2">
          <span className="text-custom-green">Payment Details</span>
          <div className="h-px w-4 bg-custom-green"></div>
          <TiTick className={`text-black rounded-full ${isReview?`bg-custom-green`:`bg-gray-50`}  `} />
          <div className={`h-px w-4 md:w-6 ${isReview?`bg-custom-green`:`bg-gray-50`} `}></div>
        </div>

        <div className="flex items-center space-x-2 ">
          <span className={`${isReview?`text-custom-green`:`text-white`}`}>Review</span>
          <div className={`h-px w-4 md:w-6 ${isReview?`bg:green`:`bg-gray-50`}`}></div>

          <TiTick className="text-black rounded-full bg-gray-50 " />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-px w-4 md:w-6 bg-white"></div>

          <span className="text-white">Payment</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentStatus;
