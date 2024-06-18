import React from "react";
import { personalDetailsFields, addressFields } from "./data";

const CashOnDeliveryDetails = ({ fields, handleState }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2">
        {personalDetailsFields.map(({ label, type, name, placeholder, defaultValue }) => (
          <div key={name} className="mb-4 flex flex-col md:items-start gap-y-1">
            <label className="block text-sm font-normal mb-2 md:mb-0" htmlFor={name}>
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
        ))}
      </div>
      <div className="w-full md:w-1/2 mt-2 md:mt-0">
        {addressFields.map(({ label, type, name, placeholder, options, defaultValue }) => (
          <div key={name} className="mb-4 flex flex-col md:items-start gap-y-1">
            <label className="block text-sm font-normal mb-2 md:mb-0 md:w-1/3" htmlFor={name}>
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
                  required
                >
                  <option value="" disabled>
                    Select {label.toLowerCase()}
                  </option>
                  {options.map((option) => (
                    <option key={option} value={option} className="bg-custom-blue text-gray-300">
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
                  required

                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashOnDeliveryDetails;
