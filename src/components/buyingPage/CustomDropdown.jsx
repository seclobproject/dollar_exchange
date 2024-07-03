import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedValue, onValueChange, getFlagUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    onValueChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative h-10 inline-block w-full">
      <span
        className="appearance-none bg-custom-blue w-full lg:w-72 md:w-64 py-2 pl-3 pr-10 text-base leading-6 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={getFlagUrl(selectedValue)}
          alt={`${selectedValue} flag`}
          className="inline-block h-4 w-4 mr-2"
        />
        <span className="mr-2 text-xs xs:text-sm sm:text-base">{`${selectedValue} - ${options[selectedValue]}`}</span>
        <span className="ml-auto">▼</span>
      </span>
      {isOpen && (
        <div className="absolute z-10 w-full bg-custom-blue border border-gray-300 mt-1 max-h-40 overflow-y-auto">
          {Object.entries(options).map(([code, name]) => (
            <div
              key={code}
              className="py-2 px-4 hover:bg-gray-800 flex items-center cursor-pointer"
              onClick={() => handleOptionClick(code)}
            >
              <img
                src={getFlagUrl(code)}
                alt={`${code} flag`}
                className="inline-block h-4 w-4 mr-2"
              />
              <span className="mr-2 text-xs xs:text-sm sm:text-base">{`${code} - ${name}`}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
