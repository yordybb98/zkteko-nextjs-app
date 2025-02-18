import { getData } from "@/actions/services";
import { orderAttendance } from "@/lib/utils";
import { Attendance, User } from "@/types/types";
import { create } from "zustand";

type DataStore = {
    attendances: Attendance[];
    zktekoUsers: User[] | null;
    isLoading: boolean;
    setAttendances: (attendances: Attendance[]) => void;
    fetchAttendances: () => Promise<Attendance[]>;
};

const useDataStore = create<DataStore>((set) => ({
    attendances: [],
    zktekoUsers: null,
    isLoading: true,
    setAttendances: (newAttendances: Attendance[]) => set({ attendances: orderAttendance(newAttendances, "DESC") }),
    fetchAttendances: async () => {
        try {
            set({ isLoading: true });
            const newData = await getData();
            set({ attendances: newData });
            return newData;
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useDataStore;
