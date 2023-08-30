import axiosInstance from "./Api";

export const signIn = async (payload) => {
  try {
    const res = await axiosInstance.post('/user/b2blogin', payload);
    console.log("call api", res);
    return res?.data?.data;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}