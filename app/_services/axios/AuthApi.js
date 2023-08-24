import axiosInstance from "./Api";

export const signIn = async (payload) => {
  try {
    const res = await axiosInstance.post('/user/login', payload);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}