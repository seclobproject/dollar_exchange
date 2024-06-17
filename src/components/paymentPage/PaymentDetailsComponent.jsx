import React, { useState } from "react";
import { personalDetailsFields, addressFields } from "./data";
import PaymentStatus from "./PaymentStatus";
import RadioButtons from "./RadioButtons";
import OrderSummary from "./OrderSummary";
function PaymentDetailsComponent() {
  const [fields, setFields] = useState({});

  const handleState = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <hr className="h-px bg-gray-200 border-0" />
     
      <div className="bg-custom-blue min-h-screen xl:pl-24 lg:pl-12 md:pl-8 flex md:flex-row flex-col">
        <div className="w-full md:w-2/3 flex flex-col">
         <h1 className="md:text-xl text-lg underline p-6 text-white underline-offset-8">
            Buyer Payment Details
          </h1>
          <PaymentStatus />
          <RadioButtons /> 
          <div className="md:hidden">
          <OrderSummary/>

          </div>
          <form
            className="order-3 md:order-3 text-white p-6 rounded shadow-md w-full bg-custom-blue"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="w-full md:w-1/2">
                {personalDetailsFields.map(
                  ({ label, type, name, placeholder, defaultValue }) => (
                    <div
                      key={name}
                      className="mb-4 flex flex-col md:items-start gap-y-1"
                    >
                      <label
                        className="block text-sm font-normal mb-2 md:mb-0"
                        htmlFor={name}
                      >
                        {label}
                      </label>
                      <div className="md:w-2/3">
                        <input
                          type={type}
                          id={name}
                          name={name}
                          className="block w-full md:text-base text-xs px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                          placeholder={placeholder}
                          defaultValue={defaultValue}
                          onChange={handleState}
                          value={fields[name]}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                {addressFields.map(
                  ({
                    label,
                    type,
                    name,
                    placeholder,
                    options,
                    defaultValue,
                  }) => (
                    <div
                      key={name}
                      className="mb-4 flex flex-col md:items-start gap-y-1"
                    >
                      <label
                        className="block text-sm font-normal mb-2 md:mb-0 md:w-1/3"
                        htmlFor={name}
                      >
                        {label}
                      </label>
                      <div className="md:w-2/3">
                        {type === "select" ? (
                          <select
                            id={name}
                            name={name}
                            className="block w-full md:text-base text-xs px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                            defaultValue={defaultValue}
                            onChange={handleState}
                            value={fields[name]}
                          >
                            <option value="" disabled>
                              Select {label.toLowerCase()}
                            </option>
                            {options.map((option) => (
                              <option
                                key={option}
                                value={option}
                                className="bg-custom-blue text-gray-300"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={type}
                            id={name}
                            name={name}
                            className="block md:text-base text-xs w-full px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            onChange={handleState}
                            value={fields[name]}
                          />
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <button
              type="submit"
              className="ease-in hover:scale-90 md:w-60 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
            >
              Save
            </button>
          </form>
        </div>
        <div className="min-h-screen w-[1px] re bg-white hidden md:block"></div>
       <div className="hidden md:block">
       <OrderSummary/>

       </div>

      </div>
    </div>
  );
}

export default PaymentDetailsComponent;
