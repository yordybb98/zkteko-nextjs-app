import { correlateEntriesAndExits } from "@/lib/utils";
import { Attendance, Record, User } from "@/types/types";

const ZKLib = require("zklib-js");
const zkInstance = new ZKLib(process.env.ZKTECO_IP, process.env.ZKTECO_PORT, 5200, 5000);

export async function getData(): Promise<Attendance[]> {
    try {
        // Create socket to machine
        await zkInstance.createSocket();

        // Get data in machine
        const users: User[] = (await zkInstance.getUsers()).data;
        const records: Record[] = (await zkInstance.getAttendances()).data;

        const finalResult = correlateEntriesAndExits(records, users);

        // Disconnect
        await zkInstance.disconnect();

        return finalResult;
    } catch (e) {
        console.log(e);
        return [];
    }
}
