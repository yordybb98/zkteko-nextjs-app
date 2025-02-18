"use server";

import { correlateEntriesAndExits, orderAttendance } from "@/lib/utils";
import { Attendance, AttendanceRecord, User } from "@/types/types";

const ZKLib = require("zklib-js");
const zkInstance = new ZKLib(process.env.ZKTECO_IP, process.env.ZKTECO_PORT, 5200, 5000);

export async function getData(): Promise<Attendance[]> {
    try {
        /*  // Create socket to machine
        await zkInstance.createSocket();

        // Get data in machine
        const users: User[] = (await zkInstance.getUsers()).data;
        const records: AttendanceRecord[] = (await zkInstance.getAttendances()).data;
        const finalResult = correlateEntriesAndExits(records, users);

        // Sort descending by in time
        const orderedResult = orderAttendance(finalResult, "DESC");
        console.log({ orderedResult });
        // Close socket
        await zkInstance.disconnect(); */

        const orderedResult = [
            {
                id: "62-Mon Feb 17 2025 14:17:43 GMT-0500 (Eastern Standard Time)",
                user: "Juan Carlos Prieto",
                in: "Mon Feb 17 2025 14:17:43 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "65-Mon Feb 17 2025 09:13:02 GMT-0500 (Eastern Standard Time)",
                user: "Erika Rodriguez",
                in: "Mon Feb 17 2025 09:13:02 GMT-0500 (Eastern Standard Time)",
                out: "Mon Feb 17 2025 13:03:46 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "22-Mon Feb 17 2025 09:04:37 GMT-0500 (Eastern Standard Time)",
                user: "Miguel Angel Hernandez",
                in: "Mon Feb 17 2025 09:04:37 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "15-Mon Feb 17 2025 08:36:21 GMT-0500 (Eastern Standard Time)",
                user: "Valentina Lopez Bonilla",
                in: "Mon Feb 17 2025 08:36:21 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "42-Mon Feb 17 2025 08:08:29 GMT-0500 (Eastern Standard Time)",
                user: "Abdel Jesus Castellanos",
                in: "Mon Feb 17 2025 08:08:29 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "70-Mon Feb 17 2025 08:08:06 GMT-0500 (Eastern Standard Time)",
                user: "Camila Rengifo",
                in: "Mon Feb 17 2025 08:08:06 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "14-Mon Feb 17 2025 08:04:40 GMT-0500 (Eastern Standard Time)",
                user: "Juan Rodriguez Rios",
                in: "Mon Feb 17 2025 08:04:40 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "48-Mon Feb 17 2025 08:03:37 GMT-0500 (Eastern Standard Time)",
                user: "Yordan Beltran Blanco",
                in: "Mon Feb 17 2025 08:03:37 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "55-Mon Feb 17 2025 08:02:52 GMT-0500 (Eastern Standard Time)",
                user: "Adrian Beltran",
                in: "Mon Feb 17 2025 08:02:52 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "12-Mon Feb 17 2025 08:02:34 GMT-0500 (Eastern Standard Time)",
                user: "Leunam Gonzalez",
                in: "Mon Feb 17 2025 08:02:34 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "39-Mon Feb 17 2025 08:02:22 GMT-0500 (Eastern Standard Time)",
                user: "Daniel E Hernandez",
                in: "Mon Feb 17 2025 08:02:22 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "49-Mon Feb 17 2025 08:01:47 GMT-0500 (Eastern Standard Time)",
                user: "Antonio Ricardo Diaz",
                in: "Mon Feb 17 2025 08:01:47 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "73-Mon Feb 17 2025 07:59:51 GMT-0500 (Eastern Standard Time)",
                user: "Alexis Prada",
                in: "Mon Feb 17 2025 07:59:51 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "34-Mon Feb 17 2025 07:59:43 GMT-0500 (Eastern Standard Time)",
                user: "Javier Alejandro Ponce",
                in: "Mon Feb 17 2025 07:59:43 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "72-Mon Feb 17 2025 07:59:37 GMT-0500 (Eastern Standard Time)",
                user: "Osvaldo Leyva Casado",
                in: "Mon Feb 17 2025 07:59:37 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "56-Mon Feb 17 2025 07:59:03 GMT-0500 (Eastern Standard Time)",
                user: "Joel Palenzuela",
                in: "Mon Feb 17 2025 07:59:03 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "71-Mon Feb 17 2025 07:58:17 GMT-0500 (Eastern Standard Time)",
                user: "Arturo Torres Catala",
                in: "Mon Feb 17 2025 07:58:17 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "24-Mon Feb 17 2025 07:58:08 GMT-0500 (Eastern Standard Time)",
                user: "Jordan Garcia",
                in: "Mon Feb 17 2025 07:58:08 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "10-Mon Feb 17 2025 07:58:03 GMT-0500 (Eastern Standard Time)",
                user: "Alain Betancourt",
                in: "Mon Feb 17 2025 07:58:03 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "62-Mon Feb 17 2025 07:57:03 GMT-0500 (Eastern Standard Time)",
                user: "Juan Carlos Prieto",
                in: "Mon Feb 17 2025 07:57:03 GMT-0500 (Eastern Standard Time)",
                out: "Mon Feb 17 2025 12:42:57 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "35-Mon Feb 17 2025 07:55:43 GMT-0500 (Eastern Standard Time)",
                user: "Yurisbel La Rosa",
                in: "Mon Feb 17 2025 07:55:43 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "67-Mon Feb 17 2025 07:55:14 GMT-0500 (Eastern Standard Time)",
                user: "Dianelys Valhuerdy",
                in: "Mon Feb 17 2025 07:55:14 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "13-Mon Feb 17 2025 07:55:04 GMT-0500 (Eastern Standard Time)",
                user: "Daniel Zaldivar",
                in: "Mon Feb 17 2025 07:55:04 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "59-Mon Feb 17 2025 07:52:56 GMT-0500 (Eastern Standard Time)",
                user: "Karla Elisa Fraga Diego",
                in: "Mon Feb 17 2025 07:52:56 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "61-Mon Feb 17 2025 07:52:41 GMT-0500 (Eastern Standard Time)",
                user: "Denys Perez Barreras",
                in: "Mon Feb 17 2025 07:52:41 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "68-Mon Feb 17 2025 07:51:47 GMT-0500 (Eastern Standard Time)",
                user: "Hairot Perez Rosquete",
                in: "Mon Feb 17 2025 07:51:47 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "25-Mon Feb 17 2025 07:51:40 GMT-0500 (Eastern Standard Time)",
                user: "Andy Baqos Vilan",
                in: "Mon Feb 17 2025 07:51:40 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "44-Mon Feb 17 2025 07:49:20 GMT-0500 (Eastern Standard Time)",
                user: "Eduardo Marquez",
                in: "Mon Feb 17 2025 07:49:20 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "57-Mon Feb 17 2025 07:34:45 GMT-0500 (Eastern Standard Time)",
                user: "Odalys Alonso",
                in: "Mon Feb 17 2025 07:34:45 GMT-0500 (Eastern Standard Time)",
                out: "Mon Feb 17 2025 11:45:35 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "18-Mon Feb 17 2025 07:32:48 GMT-0500 (Eastern Standard Time)",
                user: "Juan Miguel Hidalgo",
                in: "Mon Feb 17 2025 07:32:48 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "20-Mon Feb 17 2025 07:32:11 GMT-0500 (Eastern Standard Time)",
                user: "Liuder Machado",
                in: "Mon Feb 17 2025 07:32:11 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "48-Fri Feb 14 2025 15:59:53 GMT-0500 (Eastern Standard Time)",
                user: "Yordan Beltran Blanco",
                in: "Fri Feb 14 2025 15:59:53 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "10-Fri Feb 14 2025 14:12:07 GMT-0500 (Eastern Standard Time)",
                user: "Alain Betancourt",
                in: "Fri Feb 14 2025 14:12:07 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:09:10 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "35-Fri Feb 14 2025 13:48:07 GMT-0500 (Eastern Standard Time)",
                user: "Yurisbel La Rosa",
                in: "Fri Feb 14 2025 13:48:07 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:03:41 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "62-Fri Feb 14 2025 09:21:04 GMT-0500 (Eastern Standard Time)",
                user: "Juan Carlos Prieto",
                in: "Fri Feb 14 2025 09:21:04 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:02:46 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "14-Fri Feb 14 2025 08:31:00 GMT-0500 (Eastern Standard Time)",
                user: "Juan Rodriguez Rios",
                in: "Fri Feb 14 2025 08:31:00 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:02:57 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "48-Fri Feb 14 2025 08:14:03 GMT-0500 (Eastern Standard Time)",
                user: "Yordan Beltran Blanco",
                in: "Fri Feb 14 2025 08:14:03 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 14:01:16 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "71-Fri Feb 14 2025 08:12:55 GMT-0500 (Eastern Standard Time)",
                user: "Arturo Torres Catala",
                in: "Fri Feb 14 2025 08:12:55 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 16:42:34 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "70-Fri Feb 14 2025 08:11:44 GMT-0500 (Eastern Standard Time)",
                user: "Camila Rengifo",
                in: "Fri Feb 14 2025 08:11:44 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:02:11 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "39-Fri Feb 14 2025 08:10:47 GMT-0500 (Eastern Standard Time)",
                user: "Daniel E Hernandez",
                in: "Fri Feb 14 2025 08:10:47 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:42 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "42-Fri Feb 14 2025 08:08:22 GMT-0500 (Eastern Standard Time)",
                user: "Abdel Jesus Castellanos",
                in: "Fri Feb 14 2025 08:08:22 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 16:58:25 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "22-Fri Feb 14 2025 08:07:19 GMT-0500 (Eastern Standard Time)",
                user: "Miguel Angel Hernandez",
                in: "Fri Feb 14 2025 08:07:19 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:02:30 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "34-Fri Feb 14 2025 08:06:43 GMT-0500 (Eastern Standard Time)",
                user: "Javier Alejandro Ponce",
                in: "Fri Feb 14 2025 08:06:43 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 14:51:53 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "13-Fri Feb 14 2025 08:06:35 GMT-0500 (Eastern Standard Time)",
                user: "Daniel Zaldivar",
                in: "Fri Feb 14 2025 08:06:35 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "65-Fri Feb 14 2025 08:05:49 GMT-0500 (Eastern Standard Time)",
                user: "Erika Rodriguez",
                in: "Fri Feb 14 2025 08:05:49 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:08:46 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "49-Fri Feb 14 2025 08:05:25 GMT-0500 (Eastern Standard Time)",
                user: "Antonio Ricardo Diaz",
                in: "Fri Feb 14 2025 08:05:25 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:03:00 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "10-Fri Feb 14 2025 08:05:10 GMT-0500 (Eastern Standard Time)",
                user: "Alain Betancourt",
                in: "Fri Feb 14 2025 08:05:10 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 13:55:18 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "12-Fri Feb 14 2025 08:05:02 GMT-0500 (Eastern Standard Time)",
                user: "Leunam Gonzalez",
                in: "Fri Feb 14 2025 08:05:02 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:03:06 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "55-Fri Feb 14 2025 08:02:49 GMT-0500 (Eastern Standard Time)",
                user: "Adrian Beltran",
                in: "Fri Feb 14 2025 08:02:49 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:02:36 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "68-Fri Feb 14 2025 08:02:29 GMT-0500 (Eastern Standard Time)",
                user: "Hairot Perez Rosquete",
                in: "Fri Feb 14 2025 08:02:29 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:35 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "59-Fri Feb 14 2025 08:02:09 GMT-0500 (Eastern Standard Time)",
                user: "Karla Elisa Fraga Diego",
                in: "Fri Feb 14 2025 08:02:09 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 16:58:29 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "35-Fri Feb 14 2025 08:02:06 GMT-0500 (Eastern Standard Time)",
                user: "Yurisbel La Rosa",
                in: "Fri Feb 14 2025 08:02:06 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 10:19:29 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "67-Fri Feb 14 2025 08:00:07 GMT-0500 (Eastern Standard Time)",
                user: "Dianelys Valhuerdy",
                in: "Fri Feb 14 2025 08:00:07 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:01:05 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "73-Fri Feb 14 2025 07:59:43 GMT-0500 (Eastern Standard Time)",
                user: "Alexis Prada",
                in: "Fri Feb 14 2025 07:59:43 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:29 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "72-Fri Feb 14 2025 07:58:26 GMT-0500 (Eastern Standard Time)",
                user: "Osvaldo Leyva Casado",
                in: "Fri Feb 14 2025 07:58:26 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:47 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "20-Fri Feb 14 2025 07:57:11 GMT-0500 (Eastern Standard Time)",
                user: "Liuder Machado",
                in: "Fri Feb 14 2025 07:57:11 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 12:40:05 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "15-Fri Feb 14 2025 07:57:07 GMT-0500 (Eastern Standard Time)",
                user: "Valentina Lopez Bonilla",
                in: "Fri Feb 14 2025 07:57:07 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:59 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "61-Fri Feb 14 2025 07:56:24 GMT-0500 (Eastern Standard Time)",
                user: "Denys Perez Barreras",
                in: "Fri Feb 14 2025 07:56:24 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:02:07 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "56-Fri Feb 14 2025 07:55:45 GMT-0500 (Eastern Standard Time)",
                user: "Joel Palenzuela",
                in: "Fri Feb 14 2025 07:55:45 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:01:58 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "24-Fri Feb 14 2025 07:55:27 GMT-0500 (Eastern Standard Time)",
                user: "Jordan Garcia",
                in: "Fri Feb 14 2025 07:55:27 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:22 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "44-Fri Feb 14 2025 07:46:52 GMT-0500 (Eastern Standard Time)",
                user: "Eduardo Marquez",
                in: "Fri Feb 14 2025 07:46:52 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:00:08 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "57-Fri Feb 14 2025 07:46:43 GMT-0500 (Eastern Standard Time)",
                user: "Odalys Alonso",
                in: "Fri Feb 14 2025 07:46:43 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 16:57:46 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "18-Fri Feb 14 2025 07:46:29 GMT-0500 (Eastern Standard Time)",
                user: "Juan Miguel Hidalgo",
                in: "Fri Feb 14 2025 07:46:29 GMT-0500 (Eastern Standard Time)",
                out: "Fri Feb 14 2025 17:01:17 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "39-Thu Feb 13 2025 15:11:12 GMT-0500 (Eastern Standard Time)",
                user: "Daniel E Hernandez",
                in: "Thu Feb 13 2025 15:11:12 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:04:06 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "68-Thu Feb 13 2025 08:16:11 GMT-0500 (Eastern Standard Time)",
                user: "Hairot Perez Rosquete",
                in: "Thu Feb 13 2025 08:16:11 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 16:43:12 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "42-Thu Feb 13 2025 08:13:24 GMT-0500 (Eastern Standard Time)",
                user: "Abdel Jesus Castellanos",
                in: "Thu Feb 13 2025 08:13:24 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:52:21 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "34-Thu Feb 13 2025 08:13:16 GMT-0500 (Eastern Standard Time)",
                user: "Javier Alejandro Ponce",
                in: "Thu Feb 13 2025 08:13:16 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:52:13 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "70-Thu Feb 13 2025 08:13:13 GMT-0500 (Eastern Standard Time)",
                user: "Camila Rengifo",
                in: "Thu Feb 13 2025 08:13:13 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:03:09 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "71-Thu Feb 13 2025 08:10:47 GMT-0500 (Eastern Standard Time)",
                user: "Arturo Torres Catala",
                in: "Thu Feb 13 2025 08:10:47 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:00:48 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "55-Thu Feb 13 2025 08:08:38 GMT-0500 (Eastern Standard Time)",
                user: "Adrian Beltran",
                in: "Thu Feb 13 2025 08:08:38 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 16:47:59 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "48-Thu Feb 13 2025 08:08:24 GMT-0500 (Eastern Standard Time)",
                user: "Yordan Beltran Blanco",
                in: "Thu Feb 13 2025 08:08:24 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:02:14 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "35-Thu Feb 13 2025 08:06:09 GMT-0500 (Eastern Standard Time)",
                user: "Yurisbel La Rosa",
                in: "Thu Feb 13 2025 08:06:09 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:34:46 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "65-Thu Feb 13 2025 08:05:36 GMT-0500 (Eastern Standard Time)",
                user: "Erika Rodriguez",
                in: "Thu Feb 13 2025 08:05:36 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:02:01 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "59-Thu Feb 13 2025 08:02:26 GMT-0500 (Eastern Standard Time)",
                user: "Karla Elisa Fraga Diego",
                in: "Thu Feb 13 2025 08:02:26 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "13-Thu Feb 13 2025 08:02:05 GMT-0500 (Eastern Standard Time)",
                user: "Daniel Zaldivar",
                in: "Thu Feb 13 2025 08:02:05 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:10:09 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "12-Thu Feb 13 2025 08:02:02 GMT-0500 (Eastern Standard Time)",
                user: "Leunam Gonzalez",
                in: "Thu Feb 13 2025 08:02:02 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:02:20 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "22-Thu Feb 13 2025 08:01:56 GMT-0500 (Eastern Standard Time)",
                user: "Miguel Angel Hernandez",
                in: "Thu Feb 13 2025 08:01:56 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:02:30 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "49-Thu Feb 13 2025 08:01:53 GMT-0500 (Eastern Standard Time)",
                user: "Antonio Ricardo Diaz",
                in: "Thu Feb 13 2025 08:01:53 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:01:20 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "10-Thu Feb 13 2025 07:59:08 GMT-0500 (Eastern Standard Time)",
                user: "Alain Betancourt",
                in: "Thu Feb 13 2025 07:59:08 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:34:40 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "15-Thu Feb 13 2025 07:58:43 GMT-0500 (Eastern Standard Time)",
                user: "Valentina Lopez Bonilla",
                in: "Thu Feb 13 2025 07:58:43 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:03:06 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "39-Thu Feb 13 2025 07:58:14 GMT-0500 (Eastern Standard Time)",
                user: "Daniel E Hernandez",
                in: "Thu Feb 13 2025 07:58:14 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 14:00:07 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "56-Thu Feb 13 2025 07:57:46 GMT-0500 (Eastern Standard Time)",
                user: "Joel Palenzuela",
                in: "Thu Feb 13 2025 07:57:46 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:09:32 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "72-Thu Feb 13 2025 07:57:36 GMT-0500 (Eastern Standard Time)",
                user: "Osvaldo Leyva Casado",
                in: "Thu Feb 13 2025 07:57:36 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:03:00 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "73-Thu Feb 13 2025 07:57:22 GMT-0500 (Eastern Standard Time)",
                user: "Alexis Prada",
                in: "Thu Feb 13 2025 07:57:22 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 16:59:51 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "24-Thu Feb 13 2025 07:57:13 GMT-0500 (Eastern Standard Time)",
                user: "Jordan Garcia",
                in: "Thu Feb 13 2025 07:57:13 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:01:39 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "25-Thu Feb 13 2025 07:57:08 GMT-0500 (Eastern Standard Time)",
                user: "Andy Baqos Vilan",
                in: "Thu Feb 13 2025 07:57:08 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "57-Thu Feb 13 2025 07:56:59 GMT-0500 (Eastern Standard Time)",
                user: "Odalys Alonso",
                in: "Thu Feb 13 2025 07:56:59 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:01:55 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "14-Thu Feb 13 2025 07:56:34 GMT-0500 (Eastern Standard Time)",
                user: "Juan Rodriguez Rios",
                in: "Thu Feb 13 2025 07:56:34 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:01:30 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "62-Thu Feb 13 2025 07:56:09 GMT-0500 (Eastern Standard Time)",
                user: "Juan Carlos Prieto",
                in: "Thu Feb 13 2025 07:56:09 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:02:32 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "67-Thu Feb 13 2025 07:55:38 GMT-0500 (Eastern Standard Time)",
                user: "Dianelys Valhuerdy",
                in: "Thu Feb 13 2025 07:55:38 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:00:44 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "61-Thu Feb 13 2025 07:53:50 GMT-0500 (Eastern Standard Time)",
                user: "Denys Perez Barreras",
                in: "Thu Feb 13 2025 07:53:50 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:01:35 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "44-Thu Feb 13 2025 07:49:13 GMT-0500 (Eastern Standard Time)",
                user: "Eduardo Marquez",
                in: "Thu Feb 13 2025 07:49:13 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:01:44 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "18-Thu Feb 13 2025 07:42:10 GMT-0500 (Eastern Standard Time)",
                user: "Juan Miguel Hidalgo",
                in: "Thu Feb 13 2025 07:42:10 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 17:04:22 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "20-Thu Feb 13 2025 07:15:14 GMT-0500 (Eastern Standard Time)",
                user: "Liuder Machado",
                in: "Thu Feb 13 2025 07:15:14 GMT-0500 (Eastern Standard Time)",
                out: "Thu Feb 13 2025 16:50:53 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "20-Wed Feb 12 2025 17:00:23 GMT-0500 (Eastern Standard Time)",
                user: "Liuder Machado",
                in: "Wed Feb 12 2025 17:00:23 GMT-0500 (Eastern Standard Time)",
                out: "N/A",
            },
            {
                id: "67-Wed Feb 12 2025 09:04:32 GMT-0500 (Eastern Standard Time)",
                user: "Dianelys Valhuerdy",
                in: "Wed Feb 12 2025 09:04:32 GMT-0500 (Eastern Standard Time)",
                out: "Wed Feb 12 2025 17:01:34 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "10-Wed Feb 12 2025 08:15:04 GMT-0500 (Eastern Standard Time)",
                user: "Alain Betancourt",
                in: "Wed Feb 12 2025 08:15:04 GMT-0500 (Eastern Standard Time)",
                out: "Wed Feb 12 2025 17:06:49 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "68-Wed Feb 12 2025 08:07:16 GMT-0500 (Eastern Standard Time)",
                user: "Hairot Perez Rosquete",
                in: "Wed Feb 12 2025 08:07:16 GMT-0500 (Eastern Standard Time)",
                out: "Wed Feb 12 2025 17:00:42 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "14-Wed Feb 12 2025 08:06:58 GMT-0500 (Eastern Standard Time)",
                user: "Juan Rodriguez Rios",
                in: "Wed Feb 12 2025 08:06:58 GMT-0500 (Eastern Standard Time)",
                out: "Wed Feb 12 2025 16:51:09 GMT-0500 (Eastern Standard Time)",
            },
            {
                id: "59-Wed Feb 12 2025 08:06:47 GMT-0500 (Eastern Standard Time)",
                user: "Karla Elisa Fraga Diego",
                in: "N/A",
                out: "Wed Feb 12 2025 17:01:27 GMT-0500 (Eastern Standard Time)",
            },
        ];

        return orderedResult;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
