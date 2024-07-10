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
  otp: Yup.string().min(5).required("Please enter the otp"),
});

export const detailsSchema = Yup.object().shape({
  company_name: Yup.string().required("Please enter your company name"),
  phone_number: Yup.string().required("Please enter your phone number"),
  email_id: Yup.string().email("Invalid email format").required("Please enter your email"),
  country: Yup.string().required("Please select your country"),
  full_address: Yup.string().required("Please enter your full address"),
  post_code: Yup.string().required("Please enter your post code"),
});

export const forgotPasswordSchema=Yup.object().shape({
  emailOrNumber: emailOrPhoneValidation,
});
export const newPasswordSchema=Yup.object().shape({
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});


export const codInitialState = {
  company_name: '',
  phone_number: '',
  email_id: '',
  country: '',
  full_address: '',
  post_code: '',
};

export const bankDetailsInitialState = {
  account_holder_name: '',
  branch_name: '',
  ifsc_code: '',
  bank_name: '',
  account_no: '',
  account_type: '',
};
export const signupInitialValues = {
  name: "",
  emailOrNumber: "",
  password: "",
  country: "",
  confirmPassword: "",
};
export const signinInitialValues = {
  emailOrNumber: "",
  password: "",
  otp: "",
};
export const bankDetailsSchema = Yup.object().shape({
  account_holder_name: Yup.string().required("Please enter the account holder's name"),
  branch_name: Yup.string().required("Please enter the branch name"),
  ifsc_code: Yup.string().required("Please enter the IFSC code"),
  bank_name: Yup.string().required("Please enter the bank name"),
  account_no: Yup.string().min(11).max(17).required("Please enter the account number"),
  account_type: Yup.string().required("Please select the account type"),
});


export const userDetailsSchema = Yup.object().shape({


  name: Yup.string().min(2).max(25).required("Please enter your name"),
  nickname: Yup.string().min(2).max(25).required("Please enter your date of birth"),
  dateOfBirth: Yup.date().required("Please enter your date of birth"),
  gender: Yup.string().required("Please select your gender"),
  maritalStatus: Yup.string().required("Please select your marital status"),
  idCardNo: Yup.string().required("Please enter your ID card number"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
    mobileNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid mobile number")
    .required("Please enter your mobile number"),
  country: Yup.string().required("Please select your country"),
  address: Yup.string().required("Please enter your address"),
  bankName: Yup.string().required("Please enter your bank name"),
  branchName: Yup.string().required("Please enter your branch name"),
  accountNo: Yup.string().required("Please enter your account number"),
  vaultizoUserId: Yup.string().required("Please enter your user ID"),
  accountCreationDate: Yup.date().required(
    "Please enter account creation date"
  ),
  vaultizoReferralCode: Yup.string(),
});



