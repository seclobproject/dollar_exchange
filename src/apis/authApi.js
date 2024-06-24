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
    return { doSignup, sendOtp, verifyOtp };
}  

export default authAPI