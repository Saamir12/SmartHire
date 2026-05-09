import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default axiosInstance;

// ✅ Call this once in your app root (e.g. main.jsx or App.jsx)
export const setupAxiosInterceptor = (getToken) => {
  axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};