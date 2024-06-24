import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

function RadioButtons({ paymentMethod, setPaymentMethod, setLocation, locationError, setLocationError }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleLocationChange = (country) => {
    setLocation(country);
    setLocationError("");
    setIsDropdownOpen(false);
  };

  return (
    <div className="text-white px-6 py-3 xs:py-6 w-full">
      <h2 className="md:text-lg text-sm xs:text-md font-normal mb-2">Pay with:</h2>
      <div className="flex xs:flex-row flex-col gap-4">
        <div className="flex items-center gap-2 text-[10px] xxss:text-sm md:text-xs lg:text-lg">
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
        </div>

        <div className="relative">
          <div
            className="flex items-center cursor-pointer text-xs xxss:text-sm md:text-xs lg:text-lg"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span className="mr-2">Location</span>
            <TiArrowSortedDown className="text-gray-300" />
          </div>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
              <div
                className="py-1 bg-custom-blue"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  className="block px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-800"
                  role="menuitem"
                  onClick={() => handleLocationChange("Country 1")}
                >
                  Country 1
                </div>
                <div
                  className="block px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-800"
                  role="menuitem"
                  onClick={() => handleLocationChange("Country 2")}
                >
                  Country 2
                </div>
                <div
                  className="block px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-800"
                  role="menuitem"
                  onClick={() => handleLocationChange("Country 3")}
                >
                  Country 3
                </div>
              </div>
            </div>
          )}
          {locationError && <p className="text-red-500 text-sm">{locationError}</p>}
        </div>
      </div>
    </div>
  );
}

export default RadioButtons;
