import axiosConfig from '../config/axiosConfig';
 const orderAPI = () => {
    
    const codBuying = async (data) => {
      console.log(data);
      const res = await axiosConfig.post("/user/placeOrder",data);
      return res.data;
    };
    const listOrders = async () => {
      
      const res = await axiosConfig.get("/user/listorder");
      return res.data;
    };
    const codSelling = async (data) => {
      console.log(data);
      const res = await axiosConfig.post("/user/exchange",data);
      return res.data;
    };
    return { codBuying,listOrders,codSelling};
}  

export default orderAPI