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

function extractDate(recordTime: string): string {
    return new Date(recordTime).toISOString().split("T")[0]; // Returns the date in 'YYYY-MM-DD' format
}

export const autoSizeColumns = (worksheet: any) => {
    worksheet.columns.forEach((column: any) => {
        let maxLength = 0;

        column.eachCell((cell: any) => {
            const cellValue = cell.value ? String(cell.value) : "";
            maxLength = Math.max(maxLength, cellValue.length);
            cell.alignment = { horizontal: "center", vertical: "middle" };
        });

        column.width = maxLength + 2; // Adding padding to the width
    });
};

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

            // Check if there's a corresponding "out" record in the same day for this "in"
            if (i + 1 < sortedRecords.length) {
                const exitRecord = sortedRecords[i + 1];

                // Check if both "in" and "out" are on the same day
                const entryDate = extractDate(entryRecord.recordTime);
                const exitDate = extractDate(exitRecord.recordTime);

                if (entryDate === exitDate) {
                    // If both records are from the same day, pair them
                    inOutTimes.push({
                        user: userMap[userId], // Lookup the name by userId
                        in: entryRecord?.recordTime ?? "N/A",
                        out: exitRecord?.recordTime ?? "N/A",
                    });

                    i++; // Skip the "out" record because it's paired now
                } else {
                    // If the "out" record is not on the same day, pair the "in" with "N/A"
                    inOutTimes.push({
                        user: userMap[userId], // Lookup the name by userId
                        in: entryRecord?.recordTime ?? "N/A",
                        out: "N/A", // No exit for the last entry
                    });
                }
            } else {
                // If there's no corresponding "out" record (last entry of the day), pair the "in" with "N/A"
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
