import React from "react";
import useFormattedDate from "../../custom_hooks/useFormattedDate";

function OrderSummary({ buyQuantity, amount }) {
  const formattedDate = useFormattedDate();

  return (
    <div className="mb-4 text-white xs:mt-4 mt-0 flex xxss:gap-y-2 gap-y-1 mx-6 p-2 px-5 md:p-6 flex-col items-start border border-gray-500 rounded-md">
      <h2 className="md:text-lg xs:text-md text-sm font-semibold mb-0 xx:mb-2    ">USDT</h2>
      <p className="md:text-md xs:text-sm text-xs">{buyQuantity} QTY</p>
      <span className="flex flex-row text-xs md:text-base justify-center gap-x-4  items-start">
        <p className="text-xs lg:text-base">{amount} AED</p>
        <p className="text-xs lg:text-base text-custom-green">+1.89%</p>
        <p className="text-[8px] xxss:text-xs lg:text-base"> Date: {formattedDate}</p>
      </span>
    </div>
  );
}

export default OrderSummary;
