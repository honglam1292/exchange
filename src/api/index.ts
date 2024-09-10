import axios, { AxiosInstance } from "axios";

const axiosRequest: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  headers: {
    //
  },
});

export default axiosRequest;
