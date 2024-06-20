import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti"; // Import down arrow icon from react-icons

function RadioButtons ({ paymentMethod, setPaymentMethod, setLocation,locationError,setLocationError }) {
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
    <div className="">
      <div className="text-white pl-6 pt-3  w-full ">
        <h2 className="md:text-lg text-md font-normal mb-2">Pay with:</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4 ">
          <div className="flex items-center md:gap-2 lg-gap-6 pt-1 gap-2 text-sm md:text-xs lg:text-lg">
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

          <div className="relative min-h-20">
            <div
              className="flex items-center cursor-pointer text-sm md:text-xs lg:text-lg lg:pt-7 xs:pt-8 pt-0 pr-1"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <span className="mr-2 text-sm md:text-xs lg:text-lg">Location</span>
              <TiArrowSortedDown className="text-gray-300" />
            </div>
            {isDropdownOpen && (
              <div className="absolute  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                <div
                  className="py-1 bg-custom-blue rounde"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    className="block border border-e-2 px-4 py-2 text-xs md:text-sm text-white cursor-pointer hover:bg-gray-800"
                    role="menuitem"
                    onClick={() => handleLocationChange("Country 1")}
                  >
                    Country 1
                  </div>
                  <div
                    className="block border border-e-2 px-4 py-2 text-xs md:text-sm text-white cursor-pointer hover:bg-gray-800"
                    role="menuitem"
                    onClick={() => handleLocationChange("Country 2")}
                  >
                    Country 2
                  </div>
                  <div
                    className="block border rounded-b-md border-e-2 px-4 py-2 text-xs md:text-sm text-white cursor-pointer hover:bg-gray-800"
                    role="menuitem"
                    onClick={() => handleLocationChange("Country 2")}
                  >
                    Country 2
                  </div>
                </div>
              </div>
              
            )}
              {locationError && <p className="text-red-500 text-sm">{locationError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioButtons;
