import { getData } from "@/actions/services";
import { Attendance, User } from "@/types/types";
import { create } from "zustand";

type DataStore = {
    attendances: Attendance[] | null;
    zktekoUsers: User[] | null;
    setData: (attendances: Attendance[], zktekoUsers: User[]) => void;
    fetchAttendances: () => Promise<Attendance[]>;
};

const useAuthStore = create<DataStore>((set) => ({
    attendances: null,
    zktekoUsers: null,
    setData: (attendances, zktekoUsers) => set({ attendances, zktekoUsers }),
    fetchAttendances: async () => {
        const newData = await getData();
        set({ attendances: newData });
        return newData;
    },
}));

export default useAuthStore;
