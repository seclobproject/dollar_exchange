import React, { useState } from 'react';
import userImg from "../../assets/images/userImg.png";
import { MdOutlineEdit } from "react-icons/md";
import { personalDetailsFields, bankAccountFields, accountDetailsFields, initialState } from './data'; 
function DetailsFormComponent() {
  const [referralCode, setReferralCode] = useState(''); // State to hold the referral code
  const [fields, setFields] = useState(initialState);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode); // Copy the referral code to the clipboard
    alert('Referral code copied to clipboard'); // Optional: Notify the user
  };

  const handleState = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
    setFields(initialState);
  };


  
  return (
    <div>
      <div className="bg-custom-blue min-h-screen sm:-mt-2 md:-mt-4 -mt-0 flex items-center justify-center">
        <form className="text-white p-6 rounded shadow-md w-full md:max-w-7xl bg-custom-blue" onSubmit={handleSubmit}>
          <div className='flex mb-4 md:mb-8 flex-row justify-between items-center bg-custom-blue text-white'>
            <div className='flex flex-row justify-center items-center gap-x-1'>
              <img src={userImg} alt="" className='rounded' />
              <span className='text-md font-normal'>  Hello James</span>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-1'>
              <MdOutlineEdit />
              edit
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap md:space-x-12 lg:space-x-20 xl:space-x-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold md:mb-10 mb-4">Personal Details</h2>
              {personalDetailsFields.map(({ label, type, name, placeholder, options, defaultValue }) => (
                <div key={name} className="mb-4 md:flex md:items-center">
                  <label className="block text-sm font-normal mb-2 md:mb-0 md:w-1/3" htmlFor={name}>
                    {label}
                  </label>
                  <div className="md:w-2/3">
                    {type === 'select' ? (
                      <select
                        id={name}
                        name={name}
                        className="block w-full px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                        defaultValue={defaultValue}
                        onChange={handleState}
                        value={fields[name]}
                      >
                        <option value="" disabled>Select {label.toLowerCase()}</option>
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
                        className="block w-full px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        onChange={handleState}
                        value={fields[name]}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-lg md:text-xl font-semibold md:mb-10 mb-4">Bank Account Details</h2>
              {bankAccountFields.map(({ label, type, name, placeholder }) => (
                <div key={name} className="mb-4 md:flex md:items-center">
                  <label className="block text-sm font-normal mb-2 md:mb-0 md:w-1/3" htmlFor={name}>
                    {label}
                  </label>
                  <div className="md:w-2/3">
                    <input
                      type={type}
                      id={name}
                      name={name}
                      className="block w-full px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                      placeholder={placeholder}
                      onChange={handleState}
                      value={fields[name]}
                    />
                  </div>
                </div>
              ))}

              <h2 className="text-lg md:text-xl font-semibold md:mb-10 mb-4 mt-8">My Account Details</h2>
              {accountDetailsFields.map(({ label, type, name, placeholder, defaultValue }) => (
                <div key={name} className="mb-4 md:flex md:items-center">
                  <label className="block text-sm  mb-2 md:mb-0 md:w-1/3" htmlFor={name}>
                    {label}
                  </label>
                  <div className="md:w-2/3">
                    <input
                      type={type}
                      id={name}
                      name={name}
                      className="block w-full px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-white"
                      placeholder={placeholder}
                      defaultValue={defaultValue}
                      onChange={handleState}
                      value={fields[name]}
                    />
                  </div>
                </div>
              ))}

              <div className="mb-4 md:flex md:items-center">
                <label className="block text-sm  mb-2 md:mb-0 md:w-1/3" htmlFor="vaultizo_referral_code">
                  Vaultizo Referral Code
                </label>
                <div className="relative md:w-2/3">
                  <input
                    type="text"
                    id="vaultizo_referral_code"
                    name="vaultizo_referral_code"
                    value={referralCode}
                    onChange={(e) => {
                      setReferralCode(e.target.value);
                      handleState(e);
                    }}
                    className="block w-full px-3 py-2 border border-gray-500 rounded-md bg-custom-blue text-gray-300"
                    placeholder="Enter referral code"
                  />
                  <button
                    type="button"
                    onClick={handleCopyClick}
                    className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 11V9a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3v-1M16 5h6m-6 4h6m-6 4h6m-6 4h6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="ease-in hover:scale-90 md:w-60 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsFormComponent;
