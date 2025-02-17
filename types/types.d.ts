export type User = {
    /*     uid: number;
    role: number;
    password: string; */
    name: string /* 
    cardno: number; */;
    userId: string;
};

export type AttendanceRecord = {
    deviceUserId: string;
    recordTime: string;
};

export type Attendance = {
    id: string;
    user: string;
    in: string;
    out: string;
};

export type Settings = {
    timeIn: string;
    timeOut: string;
    lunchStart: string;
    lunchEnd: string;
    registryOffset: number;
};
