import { create } from "zustand";
import { Attendance } from "@/types/types";

type EditModalStore = {
    isOpen: boolean;
    data: Attendance[];
    openModal: (data: Attendance[]) => void;
    setData: (data: Attendance[]) => void;
    closeModal: () => void;
};

const useEditModalStore = create<EditModalStore>((set) => ({
    isOpen: false,
    data: [],
    openModal: (data) => set({ isOpen: true, data }),
    setData: (data) => set({ data }),
    closeModal: () => set({ isOpen: false, data: [] }),
}));

export default useEditModalStore;
