import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const initialState = {
  fullName: "",
  email: "",
}

var userStore = (set) => ({
  ...initialState,

  setUserInfo: (val) => {
    set(val);
  },

  resetUserInfo: () => set(initialState)
});

// persist user info
userStore = persist(userStore, {
  name: "user-information",
  storage: createJSONStorage(() => localStorage)
});

// create the store
const useUserStore = create(devtools(userStore));

export default useUserStore;