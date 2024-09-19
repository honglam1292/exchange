import { ProfileType } from "@/api/auth/type";
import { LOCAL } from "@/constants/common";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface authType {
  username: string;
  token: string;
  isAuth: boolean;
  profile?: ProfileType;
  setUsernameLocale: (username: string) => void;
  setTokenLocale: (token: string) => void;
  setIsAuth: (isAuth: boolean) => void;
  setProfile: (p: ProfileType) => void;
}

export const useUserToken = create(
  persist<authType>(
    (set) => ({
      username: "",
      token: "",
      isAuth: false,
      profile: undefined,
      setUsernameLocale: (username: string) => {
        set({ username });
      },
      setTokenLocale: (token: string) => {
        set({ token });
      },
      setIsAuth: (isAuth: boolean) => {
        set({ isAuth });
      },
      setProfile: (profile: ProfileType) => {
        set({ profile });
      },
    }),
    {
      name: LOCAL.auth,
      getStorage: () => localStorage,
    },
  )
);
