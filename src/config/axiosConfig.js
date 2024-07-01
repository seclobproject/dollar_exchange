// axiosConfig.js
import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api"
    : import.meta.env.VITE_BACKEND_URL;

const axiosConfig = axios.create({
  baseURL,
  withCredentials: true,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosConfig;
