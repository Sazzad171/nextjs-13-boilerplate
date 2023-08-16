import axiosInstance from "./Api";

export const signIn = async (payload) => {
  const res = await axiosInstance.post('/user/login', payload);
  return res.data;
}