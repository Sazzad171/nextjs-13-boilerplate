import axios from "axios";
import { getUserSession } from "@/app/_components/common/Functions";
import { getSession } from "next-auth/react";

// axios instace create
const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = `${process.env.API_URL}`;

// check session for auth
// const session = getUserSession();
// console.log("session", session);

// if logged in user so set header authorization bearer token
axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();

  console.log("session:", session);

  if (session) {
    config.headers.Authorization = `Bearer ${session?.user.token}`
  }
  return config;
});

export default axiosInstance;