import * as Yup from "yup";
const emailOrPhoneValidation = Yup.string()
  .test(
    "email-or-phone",
    "Please enter a valid email or a 10-digit phone number",
    function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }
  )
  .required("Please enter your email or phone number");

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  emailOrNumber: emailOrPhoneValidation,
  country: Yup.string().required("Please select your country"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const signInSchema = Yup.object({
  emailOrNumber: emailOrPhoneValidation,
  password: Yup.string().min(6).required("Please enter your password"),
  otp: Yup.string().min(6).required("Please enter the otp"),
});

export const detailsSchema = Yup.object().shape({
  company_name: Yup.string().required("Please enter your company name"),
  phone_number: Yup.string().required("Please enter your phone number"),
  email_id: Yup.string().email("Invalid email format").required("Please enter your email"),
  buy_quantity: Yup.number().required("Please enter buying quantity"),
  country: Yup.string().required("Please select your country"),
  full_address: Yup.string().required("Please enter your full address"),
  post_code: Yup.string().required("Please enter your post code"),
});



export const codInitialState = {
  company_name: '',
  phone_number: '',
  email_id: '',
  buy_quantity: '',
  amount: '',
  country: '',
  full_address: '',
  post_code: '',
};

export const bankDetailsInitialState = {
  account_holder_name: '',
  branch_name: '',
  ifsc_code: '',
  buy_quantity: '',
  amount: '',
  bank_name: '',
  account_no: '',
  account_type: '',
};
export const bankDetailsSchema = Yup.object().shape({
  account_holder_name: Yup.string().required("Please enter the account holder's name"),
  branch_name: Yup.string().required("Please enter the branch name"),
  ifsc_code: Yup.string().required("Please enter the IFSC code"),
  buy_quantity: Yup.number().required("Please enter buying quantity"),
  amount: Yup.number().required("Please enter the amount"),
  bank_name: Yup.string().required("Please enter the bank name"),
  account_no: Yup.string().min(11).max(17).required("Please enter the account number"),
  account_type: Yup.string().required("Please select the account type"),
});

