import React from "react";

function RadioButtons({ paymentMethod, setPaymentMethod }) {
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="text-white px-6 py-3 xs:py-6 w-full">
      <h2 className="md:text-lg text-md xs:text-md font-normal mb-2">
        Pay with:
      </h2>
      <div className="flex xs:flex-row flex-col gap-4">
        <div className="flex items-center sm:gap-10 gap-2 text-[9px] xxss:text-xs md:text-xs lg:text-lg">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on delivery"
              checked={paymentMethod === "Cash on delivery"}
              onChange={handlePaymentMethodChange}
              className="mr-2 accent-custom-green"
            />
            Cash on delivery
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank"
              checked={paymentMethod === "Bank"}
              onChange={handlePaymentMethodChange}
              className="mr-2 accent-custom-green"
            />
            Bank
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Trust Wallet"
              checked={paymentMethod === "Trust Wallet"}
              onChange={handlePaymentMethodChange}
              className="mr-2 accent-custom-green"
            />
            Trust Wallet
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank"
              checked={paymentMethod === "Bank"}
              onChange={handlePaymentMethodChange}
              className="mr-2 accent-custom-green"
            />
            CDM
            </label>
        </div>
      </div>
    </div>
  );
}

export default RadioButtons;
