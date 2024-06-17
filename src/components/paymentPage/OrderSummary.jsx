import React from "react";
import useFormattedDate from "../../custom_hooks/useFormattedDate";

function OrderSummary() {
  const formattedDate = useFormattedDate();

  return (
    <div className="mb-4 text-white flex md:gap-y-4 gap-y-2  m-6 p-2 px-5 md:p-6 flex-col items-start border h-auto border-gray-500 rounded-md">
      <h2 className="md:text-lg text-md  font-semibold mb-2">USDT</h2>
      <p className="md:text-md text-sm">850 QTY</p>
      <span className="flex flex-row text-xs md:text-base justify-center gap-x-4 items-start">
        <p className="">3.67 AED</p>
        <p className="text-xss text-custom-green">+1.89%</p>
        <p>date: {formattedDate}</p>
      </span>
    </div>
  );
}

export default OrderSummary;
