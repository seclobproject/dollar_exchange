import axiosConfig from '../config/axiosConfig';
 const authAPI = () => {
    const doSignup = async (data) => {
      const res = await axiosConfig.post("/user/register",data,{headers:{
        'Content-Type': 'application/json',
      }});

    return res.data;
    };
  
    const sendOtp = async (data) => {
      const res = await axiosConfig.post("/user/login",data,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
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

    const codDetails = async (data) => {
      console.log(data);
      const res = await axiosConfig.post("/user/placeOrder",data);
      return res.data;
    };
    return { doSignup, sendOtp, verifyOtp,personalDetails,forgotPassword,confirmOtp ,newPassword,codDetails};
}  

export default authAPI