import { LOCAL } from "@/constants/common";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface authType {
  username: string;
  token: string;
  isAuth: boolean;
  setUsernameLocale: (username: string) => void;
  setTokenLocale: (token: string) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const useUserToken = create(
  persist<authType>(
    (set) => ({
      username: "",
      token: "",
      isAuth: false,
      setUsernameLocale: (username: string) => {
        set({ username });
      },
      setTokenLocale: (token: string) => {
        set({ token });
      },
      setIsAuth: (isAuth: boolean) => {
        set({ isAuth });
      },
    }),
    {
      name: LOCAL.auth,
      getStorage: () => localStorage, 
    },
  )
);
