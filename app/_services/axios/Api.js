import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = `${process.env.API_URL}`

export default axiosInstance;