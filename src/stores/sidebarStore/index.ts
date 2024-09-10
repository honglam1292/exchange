import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ModalType {
  open: boolean;
  onOpen: (val: boolean) => void;
}

export const useSideBarStore = create<ModalType>()(
  immer((set) => ({
    open: false,
    onOpen: (open: boolean) =>
      set({
        open,
      }),
  })),
);
