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
