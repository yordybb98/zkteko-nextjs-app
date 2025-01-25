export type User = {
    /*     uid: number;
    role: number;
    password: string; */
    name: string /* 
    cardno: number; */;
    userId: string;
};

export type Record = {
    deviceUserId: string;
    recordTime: string;
};

export type Attendance = {
    user: string;
    in: string;
    out: string;
};
