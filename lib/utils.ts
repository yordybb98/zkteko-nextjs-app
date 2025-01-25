import { Attendance, Record, User } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function groupByUser(records: Record[]): { [userId: string]: Record[] } {
    return records.reduce((acc, record) => {
        if (!acc[record.deviceUserId]) {
            acc[record.deviceUserId] = [];
        }
        acc[record.deviceUserId].push(record);
        return acc;
    }, {} as { [deviceUserId: string]: Record[] });
}

function parseDate(dateString: string): number {
    return new Date(dateString).getTime();
}

export function correlateEntriesAndExits(records: Record[], users: User[]): Attendance[] {
    const groupedByUser = groupByUser(records);

    // Create a map for quick lookup of user names by userId
    const userMap = users.reduce((map, user) => {
        map[user.userId] = user.name;
        return map;
    }, {} as { [userId: string]: string });

    // Create an array to store the final results
    let inOutTimes: Attendance[] = [];

    // Process each user's records
    Object.keys(groupedByUser).forEach((userId) => {
        const userRecords = groupedByUser[userId];

        // Sort records by Tiempo (timestamp)
        const sortedRecords = userRecords.sort((a, b) => parseDate(a.recordTime) - parseDate(b.recordTime));

        // Iterate over the sorted records in pairs (first as "in", second as "out")
        for (let i = 0; i < sortedRecords.length; i++) {
            const entryRecord = sortedRecords[i];

            // We check if there's an "out" record for this "in" record
            if (i + 1 < sortedRecords.length && sortedRecords[i + 1].deviceUserId === entryRecord.deviceUserId) {
                // If the next record is the same user, it's an "out" for the "in" record
                const exitRecord = sortedRecords[i + 1];

                inOutTimes.push({
                    user: userMap[userId], // Lookup the name by userId
                    in: entryRecord?.recordTime ?? "N/A",
                    out: exitRecord?.recordTime ?? "N/A",
                });

                i++; // Skip the "out" record because it's paired now
            } else {
                // If there's no corresponding "out" record, pair the "in" with "N/A"
                inOutTimes.push({
                    user: userMap[userId], // Lookup the name by userId
                    in: entryRecord?.recordTime ?? "N/A",
                    out: "N/A", // No exit for the last entry
                });
            }
        }
    });

    return inOutTimes;
}
