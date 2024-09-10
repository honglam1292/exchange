import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type KeyModalType = "language" | "login" | "";

interface ModalType {
  keyModal: KeyModalType;
  openModal: (keyModal: KeyModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalType>()(
  immer((set) => ({
    keyModal: "",
    openModal: (keyModal: KeyModalType) =>
      set({
        keyModal,
      }),

    closeModal: () => set({ keyModal: "" }),
  }))
);
