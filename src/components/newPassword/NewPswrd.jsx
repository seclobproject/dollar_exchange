import React,{useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import img from "../../assets/images/authenticationPageImgs/newPswrdImg.png";
import img2 from "../../assets/images/logo.png";
import Mobileimg from "../../assets/images/authenticationPageImgs/newPswrd-sm.png";
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authAPI from "../../apis/authApi";
import SocailMediaButtons from "../socialMediaButtons/SocailMediaButtons";
import SocialMediaButtonsSm from "../socialMediaButtons/SocialMediaButtonsSm";
const { newPassword } = authAPI();
function NewPswrd() {

  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      toast.error("User not verified. Redirecting to login...", {
        position: "top-center",
        onClose: () => navigate('/login')
      });
    }
  }, [navigate]);
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { password: "", confirmPassword: "" },
      validationSchema: newPasswordSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          const userId = localStorage.getItem("userId");
          const payload = { password: values.password, userId };
          const res = await newPassword(payload);
          localStorage.removeItem("userId");

          resetForm();
          toast.success(
            <div>
              New password created
              <br />
              Redirecting to login...
            </div>,
            {
              position: "top-center",
              onClose: () => navigate("/login"),
            }
          );
          // Handle the form submission
        } catch (err) {
          if (err) {
            toast.error(err.response.data.message,   {
              position: "top-center",
              onClose: () => navigate("/login"),
            });
          }
          // Handle the error
        }
      },
    });
  return (
    <div className="flex flex-row ">
      <img
        src={img}
        alt=""
        className="hidden md:block md:h-[200px] md:w-[170px] lg:w-[220px] lg:h-[250px] xl:w-[380px] xl:h-[420px]"
      />
      <ToastContainer />
      <div className="hidden md:flex flex-col lg:gap-y-8 md:gap-y-4 gap-y-0 pt-24 xl:pl-7 pl-0 text-white justify-center items-start">
        <img className="w-[160px]" src={img2} alt="" />
        <p className="md:text-2xl lg:text-4xl font-bold">
          Transact swiftly, <br /> safeguarded
        </p>
        <p className="lg:max-w-[300px] md:max-w-[200px] text-xs lg:text-sm text-gray-400">
          We ensure expeditious, fortified, and enhanced operations. The
          protection of your transactions is our paramount concern.
        </p>
      </div>

      <div className=" md:ml-10 lg:ml-0 md:pr-8 lg:pr-20 xl:pr-36 pr-0 ml-0 md:mt-10 -mt-6 flex flex-1 md:flex-auto items-center pt-16 rounded-xl justify-center md:bg-custom-blue">
        {/* Added flex flex-col justify-between h-full to this div */}
        <div className="bg-custom-blue md:bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-sm flex flex-col gap-y-10 h-full">
          <div>
            {/* Create account text and image */}

            <div className="mb-6 text-white md:text-black text-start">
              <p className="text-xs sm:text-sm md:text-md font-light md:font-medium">
                New Password
              </p>
              <h2 className="sm:text-2xl xs:text-xl text-lg font-normal md:font-medium">
                Create New Password{" "}
              </h2>
            </div>

            {/* End of Create account text and image */}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
                >
                  Enter New Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="p-2 w-full border-2  border-gray-200 focus:border-gray-400 text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
                />
                {touched.password && errors.password ? (
                  <p className="form-error sm:text-red-600 text-red-400">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="confirmPassword"
                  className="block sm:text-md text-sm md:text-gray-700 text-gray-400 mb-1 absolute -top-3 left-2 md:bg-white bg-custom-blue px-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="p-2   border-2  border-gray-200 focus:border-gray-400 w-full text-gray-200 md:text-black  rounded-md focus:outline-none md:bg-white bg-custom-blue focus:ring-opacity-50"
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <p className="form-error sm:text-red-600 text-red-400">
                    {errors.confirmPassword}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full font-medium md:bg-button-color bg-white md:text-white text-black py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              >
                CONFORM
              </button>
            </form>
          </div>
          {/* social media buttons */}
               <SocailMediaButtons />
          <SocialMediaButtonsSm />
        </div>
      </div>
    </div>
  );
}

export default NewPswrd;
