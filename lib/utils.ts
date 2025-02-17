import { SETTINGS } from "@/settings";
import { Attendance, AttendanceRecord, User } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function groupByUser(records: AttendanceRecord[]): { [userId: string]: AttendanceRecord[] } {
    return records.reduce((acc, record) => {
        if (!acc[record.deviceUserId]) {
            acc[record.deviceUserId] = [];
        }
        acc[record.deviceUserId].push(record);
        return acc;
    }, {} as { [deviceUserId: string]: AttendanceRecord[] });
}

function parseDate(dateString: string): number {
    return new Date(dateString).getTime();
}

function extractDate(recordTime: string): string {
    return new Date(recordTime).toISOString().split("T")[0]; // Returns the date in 'YYYY-MM-DD' format
}

export function formatDate(recordTime: string): string {
    const date = new Date(recordTime);

    const Dateoptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    const TimeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };

    const formattedDate = date.toLocaleDateString("en-US", Dateoptions); // This gives you MM/DD/YYYY
    const formattedTime = date.toLocaleTimeString("en-US", TimeOptions); // This gives you HH:mm

    // Combine both parts with a space
    return formattedDate + " " + formattedTime;
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

export function correlateEntriesAndExits(records: AttendanceRecord[], users: User[]): Attendance[] {
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
            const recordId = `${userId}-${entryRecord.recordTime}`;

            // Check if there's a corresponding "out" record in the same day for the last "in"
            if (i + 1 < sortedRecords.length) {
                const exitRecord = sortedRecords[i + 1];

                // Check if both "in" and "out" are on the same day
                const entryDate = extractDate(entryRecord.recordTime);
                const exitDate = extractDate(exitRecord.recordTime);

                if (entryDate === exitDate) {
                    // If both records are from the same day, pair them
                    inOutTimes.push({
                        id: recordId,
                        user: userMap[userId], // Lookup the name by userId
                        in: entryRecord.recordTime ?? "N/A",
                        out: exitRecord.recordTime ?? "N/A",
                    });

                    i++; // Skip the "out" record because it's paired now
                } else {
                    // If the "out" record is not on the same day, pair the "in" with "N/A"
                    inOutTimes.push({
                        id: recordId,
                        user: userMap[userId], // Lookup the name by userId
                        in: entryRecord?.recordTime ?? "N/A",
                        out: "N/A", // No exit for the last entry
                    });
                }
            } else {
                // If there's no corresponding "out" record (last entry of the day), pair the "in" with "N/A"
                inOutTimes.push({
                    id: recordId,
                    user: userMap[userId], // Lookup the name by userId
                    in: entryRecord?.recordTime ?? "N/A",
                    out: "N/A", // No exit for the last entry
                });
            }
        }
    });
    return inOutTimes;
}

export const normalizeData = async (data: Attendance[]): Promise<any> => {
    /* //In/Out normalization offset
    data.forEach((attendance) => {
        attendance.in = normalizeDateEntry(attendance.in, "IN");
        attendance.out = normalizeDateEntry(attendance.out, "OUT");
    }); */

    //Validate empty entries
    const validation = validateEmptyEntries(data);

    if (validation.isValid) console.log("Data is valid");
    else console.log("Data is not valid", validation.errors);

    return validation;
};

const normalizeDateEntry = (input: string, type: "IN" | "OUT"): string => {
    const date = new Date(input);

    //In entry validations
    if (type === "IN") {
        const minutesDifference = getMinutesDifference(date, SETTINGS.timeIn);

        // minutes difference above
        if (minutesDifference >= 0 && minutesDifference < SETTINGS.registryOffset) date.setMinutes(0, 0, 0);
        // minutes difference below
        else if (minutesDifference >= -SETTINGS.registryOffset && minutesDifference < 0) date.setHours(date.getHours() + 1, 0, 0, 0);
    }
    //Out entry validations
    else if (type === "OUT") {
        const minutesDifference = getMinutesDifference(date, SETTINGS.timeOut);

        // minutes difference above
        if (minutesDifference >= 0 && minutesDifference < SETTINGS.registryOffset) date.setMinutes(0, 0, 0);
        // minutes difference below
        else if (minutesDifference >= -SETTINGS.registryOffset && minutesDifference < 0) date.setHours(date.getHours() + 1, 0, 0, 0);
    }
    return date.toString();
};

function getMinutesDifference(dateInput: Date, timeString: string, absolute = false): number {
    // Extract hours and minutes from the string
    const [hours, minutes] = timeString.split(":").map(Number);

    // Create a new Date object with the same year, month, and day as dateInput
    const referenceDate = new Date(dateInput);
    referenceDate.setHours(hours, minutes, 0, 0); // Set time to given hour & minutes

    // Calculate difference in milliseconds
    const differenceMs = dateInput.getTime() - referenceDate.getTime();

    // Convert milliseconds to minutes
    const differenceMinutes = Math.round(differenceMs / (1000 * 60)); // Returns difference in minutes

    return absolute ? Math.abs(differenceMinutes) : differenceMinutes;
}

const validateEmptyEntries = (data: Attendance[]) => {
    const errors: Attendance[] = [];
    const groupedByUser: Record<string, Attendance[]> = {};

    const orderedData = orderAttendance(data, "ASC");
    // Group records by user
    orderedData.forEach((entry) => {
        if (!groupedByUser[entry.user]) groupedByUser[entry.user] = [];
        groupedByUser[entry.user].push(entry);
    });

    // Validate each user's entries
    Object.keys(groupedByUser).forEach((user) => {
        let lastOutExists = true; // Assume first entry is valid
        let lastAttendance: Attendance | null = null;

        for (const attendance of groupedByUser[user]) {
            const hasIn = attendance.in !== "N/A";
            const hasOut = attendance.out !== "N/A";

            /* // Out without a previous In
            if (!hasIn && hasOut) {
                errors.push(attendance);
                break; // Exit loop, move to next user
            } */

            // Consecutive "in" without a previous "out"
            if (hasIn && !lastOutExists) {
                errors.push(lastAttendance ?? attendance); // Push the previous attendance if it exists, otherwise the current one
                break; // Exit loop, move to next user
            }

            // Update tracking variables
            lastOutExists = hasOut ? true : hasIn ? false : lastOutExists;
            lastAttendance = attendance; // Store current as last attendance
        }
    });

    return { isValid: errors.length === 0, errors };
};

export const orderAttendance = (data: Attendance[], order: "ASC" | "DESC") => {
    return data.sort((a, b) => {
        const dateA = new Date(a.in).getTime();
        const dateB = new Date(b.in).getTime();
        return order === "ASC" ? dateA - dateB : dateB - dateA;
    });
};
