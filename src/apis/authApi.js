import axiosConfig from "../config/axiosConfig";
 const authAPI = () => {
    const doSignup = async (data) => {
      const res = await axiosConfig.post("/user/register",data,{headers:{
        'Content-Type': 'application/json',
      }});

    return res.data;
    };
  
    const sendOtp = async (data) => {
      const res = await axiosConfig.post("/user/login",data);
      return res;
    };
    return { doSignup, sendOtp };
}  

export default authAPI