import axiosInstance from "./Api";

// get categories
export const getLayoutCategories = () => {
  const url = "/categories";
  return axiosInstance.get(url);
}

// get layouts
export const getAllLayouts = () => {
  const url = "/layouts?per_page=20";
  return axiosInstance.get(url);
}

// get single layout
export const getSingleLayout = (payload) => {
  const url = `/layout-details?layout_id=${payload}`;
  return axiosInstance.get(url);
}

// get current user
export const getCurrentUser = async () => {
  const url = '/user/GetCurrentUser';
  return await axiosInstance.get(url);
}