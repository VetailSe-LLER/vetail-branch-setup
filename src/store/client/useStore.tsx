import { create } from "zustand";

const useAlertStore = create((set) => ({
  bol: false,
  setBol: (bol: boolean) =>
    set(() => ({
      bol: bol,
    })),
  subEdit: false,
  setSubEdit: (edit: boolean) =>
    set((state: any) => ({
      edit,
    })),
}));

export default useAlertStore;
