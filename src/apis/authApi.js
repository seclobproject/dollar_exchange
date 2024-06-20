import axiosConfig from "../config/axiosConfig";
 const authAPI = () => {
    const doSignup = async () => {
      const res = await axiosConfig.post("/auth/register");
      return res;
    };
  
    const doSignin = async () => {
      const res = await axiosConfig.post("/auth/login");
      return res;
    };
    return { doSignup, doSignin };
}  

export default authAPI