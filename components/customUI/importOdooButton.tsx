"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Attendance } from "@/types/types";
const fakeData = [
    {
        user: "Dianelys Valhuerdy",
        in: "Wed Feb 12 2025 09:04:32 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Alain Betancourt",
        in: "Wed Feb 12 2025 08:15:04 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Hairot Perez Rosquete",
        in: "Wed Feb 12 2025 08:07:16 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Juan Rodriguez Rios",
        in: "Wed Feb 12 2025 08:06:58 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Karla Elisa Fraga Diego",
        in: "Wed Feb 12 2025 08:06:47 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Javier Alejandro Ponce",
        in: "Wed Feb 12 2025 08:06:09 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Camila Rengifo",
        in: "Wed Feb 12 2025 08:06:01 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Yordan Beltran Blanco",
        in: "Wed Feb 12 2025 08:05:08 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Miguel Angel Hernandez",
        in: "Wed Feb 12 2025 08:04:14 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Juan Carlos Prieto",
        in: "Wed Feb 12 2025 08:04:04 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Yurisbel La Rosa",
        in: "Wed Feb 12 2025 08:02:38 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Valentina Lopez Bonilla",
        in: "Wed Feb 12 2025 08:02:06 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Erika Rodriguez",
        in: "Wed Feb 12 2025 08:01:58 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Abdel Jesus Castellanos",
        in: "Wed Feb 12 2025 08:01:15 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Andy Baqos Vilan",
        in: "Wed Feb 12 2025 08:01:10 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Daniel Zaldivar",
        in: "Wed Feb 12 2025 08:01:03 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Daniel E Hernandez",
        in: "Wed Feb 12 2025 07:59:39 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Joel Palenzuela",
        in: "Wed Feb 12 2025 07:59:14 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Osvaldo Leyva Casado",
        in: "Wed Feb 12 2025 07:58:53 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Denys Perez Barreras",
        in: "Wed Feb 12 2025 07:58:42 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Leunam Gonzalez",
        in: "Wed Feb 12 2025 07:57:43 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Antonio Ricardo Diaz",
        in: "Wed Feb 12 2025 07:57:33 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Alexis Prada",
        in: "Wed Feb 12 2025 07:56:39 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Adrian Beltran",
        in: "Wed Feb 12 2025 07:56:00 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Jordan Garcia",
        in: "Wed Feb 12 2025 07:54:08 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Juan Miguel Hidalgo",
        in: "Wed Feb 12 2025 07:53:41 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Arturo Torres Catala",
        in: "Wed Feb 12 2025 07:52:05 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Odalys Alonso",
        in: "Wed Feb 12 2025 07:51:59 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Eduardo Marquez",
        in: "Wed Feb 12 2025 07:51:29 GMT-0500 (Eastern Standard Time)",
        out: "N/A",
    },
    {
        user: "Yordan Beltran Blanco",
        in: "Tue Feb 11 2025 14:20:14 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 18:51:09 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Alexis Prada",
        in: "Tue Feb 11 2025 11:55:31 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:01:17 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Dianelys Valhuerdy",
        in: "Tue Feb 11 2025 10:11:04 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:24 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Camila Rengifo",
        in: "Tue Feb 11 2025 08:18:37 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:00 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Antonio Ricardo Diaz",
        in: "Tue Feb 11 2025 08:12:21 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:50 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Leunam Gonzalez",
        in: "Tue Feb 11 2025 08:12:15 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:21 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Abdel Jesus Castellanos",
        in: "Tue Feb 11 2025 08:11:54 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:01:10 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Daniel E Hernandez",
        in: "Tue Feb 11 2025 08:09:27 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:34 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Javier Alejandro Ponce",
        in: "Tue Feb 11 2025 08:03:52 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:37 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Daniel Zaldivar",
        in: "Tue Feb 11 2025 08:03:23 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:31 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Liuder Machado",
        in: "Tue Feb 11 2025 08:02:39 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:03:13 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Alain Betancourt",
        in: "Tue Feb 11 2025 08:02:33 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:05:06 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Hairot Perez Rosquete",
        in: "Tue Feb 11 2025 08:01:58 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 16:44:01 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Karla Elisa Fraga Diego",
        in: "Tue Feb 11 2025 08:01:07 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:03:20 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Erika Rodriguez",
        in: "Tue Feb 11 2025 08:00:48 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:43:48 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Adrian Beltran",
        in: "Tue Feb 11 2025 08:00:05 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:25 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Valentina Lopez Bonilla",
        in: "Tue Feb 11 2025 07:59:56 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:43 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Joel Palenzuela",
        in: "Tue Feb 11 2025 07:58:51 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:03:46 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Osvaldo Leyva Casado",
        in: "Tue Feb 11 2025 07:58:31 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:14 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Andy Baqos Vilan",
        in: "Tue Feb 11 2025 07:58:19 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:01:05 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Arturo Torres Catala",
        in: "Tue Feb 11 2025 07:57:58 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:06:31 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Yordan Beltran Blanco",
        in: "Tue Feb 11 2025 07:57:50 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 13:29:55 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Juan Carlos Prieto",
        in: "Tue Feb 11 2025 07:55:52 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:05 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Miguel Angel Hernandez",
        in: "Tue Feb 11 2025 07:54:26 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:43 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Denys Perez Barreras",
        in: "Tue Feb 11 2025 07:53:11 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:33 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Yurisbel La Rosa",
        in: "Tue Feb 11 2025 07:50:20 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:13 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Juan Rodriguez Rios",
        in: "Tue Feb 11 2025 07:49:55 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:37 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Eduardo Marquez",
        in: "Tue Feb 11 2025 07:45:20 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:00:53 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Odalys Alonso",
        in: "Tue Feb 11 2025 07:40:16 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:04:05 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Juan Miguel Hidalgo",
        in: "Tue Feb 11 2025 07:39:48 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 18:52:09 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Jordan Garcia",
        in: "Tue Feb 11 2025 07:39:41 GMT-0500 (Eastern Standard Time)",
        out: "Tue Feb 11 2025 17:02:21 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Odalys Alonso",
        in: "Mon Feb 10 2025 09:29:45 GMT-0500 (Eastern Standard Time)",
        out: "Mon Feb 10 2025 11:38:07 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Yordan Beltran Blanco",
        in: "Mon Feb 10 2025 09:22:17 GMT-0500 (Eastern Standard Time)",
        out: "Mon Feb 10 2025 17:03:10 GMT-0500 (Eastern Standard Time)",
    },
    {
        user: "Alain Betancourt",
        in: "Mon Feb 10 2025 09:22:12 GMT-0500 (Eastern Standard Time)",
        out: "Mon Feb 10 2025 17:05:38 GMT-0500 (Eastern Standard Time)",
    },
];
export default function ImportOdooButton({ data }: { data: Attendance[] }) {
    const [isLoading, setIsLoading] = useState(false);
    const importFn = async () => {
        try {
            setIsLoading(true);
            const a = await fetch("http://localhost:3000/odoo/attendance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await a.json();
            console.log({ res });
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={importFn} isLoading={isLoading}>
            Import to Odoo
        </Button>
    );
}
