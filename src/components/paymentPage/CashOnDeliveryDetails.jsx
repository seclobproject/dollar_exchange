  import React from "react";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import { personalDetailsFields, addressFields } from "./data";

  const CashOnDeliveryDetails = ({ handleData, handleBack }) => {
    const initialState = {
      company_name: '',
      phone_number: '',
      email_id: '',
      buy_quantity: '',
      amount: '',
      country: '',
      full_address: '',
      post_code: '',
    };  // Define validation schema
    const detailsSchema = Yup.object().shape({
      company_name: Yup.string().required("Please enter your company name"),
      phone_number: Yup.string().required("Please enter your phone number"),
      email_id: Yup.string().email("Invalid email format").required("Please enter your email"),
      buy_quantity: Yup.number().required("Please enter buying quantity"),
      amount: Yup.string().required("Please enter the amount"),
      country: Yup.string().required("Please select your country"),
      full_address: Yup.string().required("Please enter your full address"),
      post_code: Yup.string().required("Please enter your post code"),
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialState,
      validationSchema: detailsSchema,
      onSubmit: (values, { resetForm }) => {
        handleData(values)
        resetForm();
      },
    });

    return (
      <form  onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            {personalDetailsFields.map(({ label, type, name, placeholder }) => (
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                  
                  />
                  {touched[name] && errors[name] && (
                    <p className="form-error text-red-400">{errors[name]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 mt-2 md:mt-0">
            {addressFields.map(({ label, type, name, placeholder, options }) => (
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[name]}
                  
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[name]}
                  
                    />
                  )}
                  {touched[name] && errors[name] && (
                    <p className="form-error text-red-400">{errors[name]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
                  <button
                    type="submit"
                    className="ease-in hover:scale-90 md:w-60 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    onClick={handleBack}
                    className="ease-in hover:scale-90 md:w-60 w-full bg-custom-blue border border-custom-green text-custom-green font-medium py-2 rounded-md mt-4 md:mt-6"
                  >
                    Back
                  </button>
                </div>
      </form>
      
        
  
    );
  };

  export default CashOnDeliveryDetails;
