import axiosInstance from "./Api";

// get categories
export const getLayoutCategories = () => {
  const url = "/categories";
  return axiosInstance.get(url);
}