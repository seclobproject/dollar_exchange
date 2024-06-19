import React, { useState } from 'react';
import userImg from "../../assets/images/userImg.png";
import { MdOutlineEdit } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { personalDetailsFields, bankAccountFields, accountDetailsFields, initialState } from './data'; 

// Define validation schema
const detailsSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  nick_name: Yup.string().min(2).max(25),
  dob: Yup.date().required("Please enter your date of birth"),
  gender: Yup.string().required("Please select your gender"),
  marital_status: Yup.string().required("Please select your marital status"),
  id_card: Yup.string().required("Please enter your ID card number"),
  email: Yup.string().email("Invalid email format").required("Please enter your email"),
  mobile: Yup.string().matches(/^\d{10}$/, "Invalid mobile number").required("Please enter your mobile number"),
  country: Yup.string().required("Please select your country"),
  address: Yup.string().required("Please enter your address"),
  bank_name: Yup.string().required("Please enter your bank name"),
  branch_name: Yup.string().required("Please enter your branch name"),
  account_number: Yup.string().required("Please enter your account number"),
  vaultizo_user_id: Yup.string().required("Please enter your user ID"),
  account_creation_date: Yup.date().required("Please enter account creation date"),
  vaultizo_referral_code: Yup.string()
});

function DetailsFormComponent() {
  const [referralCode, setReferralCode] = useState(''); // State to hold the referral code

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialState,
    validationSchema: detailsSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode); // Copy the referral code to the clipboard
    alert('Referral code copied to clipboard'); // Optional: Notify the user
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[name]}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[name]}
                      />
                    )}
                    {touched[name] && errors[name] ? (
                      <p className="form-error text-red-400">{errors[name]}</p>
                    ) : null}
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[name]}
                    />
                    {touched[name] && errors[name] ? (
                      <p className="form-error text-red-400">{errors[name]}</p>
                    ) : null}
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[name]}
                    />
                    {touched[name] && errors[name] ? (
                      <p className="form-error text-red-400">{errors[name]}</p>
                    ) : null}
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
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
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
                        d="M8 7V4a1 1 0 011-1h9a1 1 0 011 1v12a1 1 0 01-1 1h-3m-4 0a1 1 0 00-1 1v3m0 0H5a1 1 0 01-1-1V8a1 1 0 011-1h3m4 0h4a1 1 0 011 1v5"
                      />
                    </svg>
                  </button>
                </div>
                {touched.vaultizo_referral_code && errors.vaultizo_referral_code ? (
                  <p className="form-error text-red-400">{errors.vaultizo_referral_code}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-4">
          <button type="submit" className="ease-in hover:scale-90 md:w-60 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6">
Save
</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailsFormComponent;

