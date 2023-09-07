import { create } from "zustand";

const initialState = {
  name: "",
  email: "",
  token: "",
}

const userStore = (set) => ({
  ...initialState 

  
})

// create the store
const useUserStore = create(devtools(userStore));

export default useUserStore;