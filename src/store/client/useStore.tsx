import { create } from "zustand";

const useAlertStore = create((set) => ({
  bol: false,
  setBol: (bol: boolean) =>
    set((state: any) => ({
      bol: bol,
    })),
}));

export default useAlertStore;
