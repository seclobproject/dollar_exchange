import React from "react";
export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;

  return (
    <div className="flex items-center w-full sm:w-auto">
      <div className="flex border border-gray-300 rounded-md overflow-hidden h-9  w-full ">
        <input
          type="number"
          className="border-none p-2  text-black w-full  xs:w-32 md:w-48 lg:w-80 focus:outline-none"
          value={amount}
          onChange={onChangeAmount}
        />
        <span className="px-2 hidden xs:block py-2 bg-white text-gray-500">|</span>
        <select
          className="border-none p-1 sm:p-2 bg-white text-black focus:outline-none w-full sm:w-auto z-10"
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
