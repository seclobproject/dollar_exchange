import axiosConfig from '../config/axiosConfig';
 const authAPI = () => {
    const doSignup = async (data) => {
      const res = await axiosConfig.post("/user/register",data);

    return res.data;
    };
  
    const sendOtp = async (data) => {
      const res = await axiosConfig.post("/user/login",data);
      return res;
    };
    const verifyOtp = async (data) => {
      const res = await axiosConfig.post("/user/login-verifed",data);
      return res.data;
    };

    const personalDetails = async (data) => {
      const res = await axiosConfig.post("/user/addDetails",data);
      return res.data;
    };

    const forgotPassword = async (data) => {
      console.log(data);
      const res = await axiosConfig.post("/user/newPassOtp",data);
      return res.data;
    };
    const confirmOtp = async (data) => {
      console.log(data);
      const res = await axiosConfig.post("/user/verifiedOtp",data);
      return res.data;
    };
    const newPassword = async (data) => {
 
      const res = await axiosConfig.patch("/user/change-password",data);
      return res.data;
    };


    return { doSignup, sendOtp, verifyOtp,personalDetails,forgotPassword,confirmOtp ,newPassword};
}  

export default authAPI