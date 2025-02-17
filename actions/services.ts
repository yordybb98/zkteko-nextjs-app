import { correlateEntriesAndExits, orderAttendance } from "@/lib/utils";
import { Attendance, AttendanceRecord, User } from "@/types/types";

const ZKLib = require("zklib-js");
const zkInstance = new ZKLib(process.env.ZKTECO_IP, process.env.ZKTECO_PORT, 5200, 5000);

export async function getData(): Promise<Attendance[]> {
    try {
        // Create socket to machine
        await zkInstance.createSocket();

        // Get data in machine
        const users: User[] = (await zkInstance.getUsers()).data;
        const records: AttendanceRecord[] = (await zkInstance.getAttendances()).data;
        const finalResult = correlateEntriesAndExits(records, users);

        // Sort descending by in time
        const orderedResult = orderAttendance(finalResult, "DESC");

        return orderedResult;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
