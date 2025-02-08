"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Attendance } from "@/types/types";

export default function ImportOdooButton({ data }: { data: Attendance[] }) {
    const importFn = async () => {
        try {
            const a = await fetch("http://localhost:3000/odoo/attendance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify([
                    {
                        user: "Yordan Beltran Blanco",
                        in: "Sat Feb 08 2025 08:00:28 GMT-0500 (Eastern Standard Time)",
                        out: "N/A",
                    },
                    {
                        user: "Yurisbel La Rosa",
                        in: "Fri Feb 07 2025 12:58:25 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:08:06 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Arturo Torres Catala",
                        in: "Fri Feb 07 2025 08:18:51 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:02:08 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Camila Rengifo",
                        in: "Fri Feb 07 2025 08:10:48 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:02:43 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Juan Rodriguez Rios",
                        in: "Fri Feb 07 2025 08:10:05 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:00:23 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Yordan Beltran Blanco",
                        in: "Fri Feb 07 2025 08:05:25 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:01:46 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Abdel Jesus Castellanos",
                        in: "Fri Feb 07 2025 08:04:11 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:08:56 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Hairot Perez Rosquete",
                        in: "Fri Feb 07 2025 08:03:49 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:01:37 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Valentina Lopez Bonilla",
                        in: "Fri Feb 07 2025 08:03:15 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:02:40 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Juan Carlos Prieto",
                        in: "Fri Feb 07 2025 08:02:14 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:00:31 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Joel Palenzuela",
                        in: "Fri Feb 07 2025 07:59:13 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:02:30 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Osvaldo Leyva Casado",
                        in: "Fri Feb 07 2025 07:59:03 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:01:55 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Karla Elisa Fraga Diego",
                        in: "Fri Feb 07 2025 07:58:32 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:02:25 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Dianelys Valhuerdy",
                        in: "Fri Feb 07 2025 07:57:24 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:03:51 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Andy Baqos Vilan",
                        in: "Fri Feb 07 2025 07:54:34 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:03:23 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Odalys Alonso",
                        in: "Fri Feb 07 2025 07:53:51 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 16:57:46 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Denys Perez Barreras",
                        in: "Fri Feb 07 2025 07:53:36 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:00:27 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Yurisbel La Rosa",
                        in: "Fri Feb 07 2025 07:50:28 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 12:09:50 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Leunam Gonzalez",
                        in: "Fri Feb 07 2025 07:47:13 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:01:18 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Jordan Garcia",
                        in: "Fri Feb 07 2025 07:46:44 GMT-0500 (Eastern Standard Time)",
                        out: "Fri Feb 07 2025 17:02:20 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Yordan Beltran Blanco",
                        in: "Thu Feb 06 2025 13:18:36 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:02:22 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Camila Rengifo",
                        in: "Thu Feb 06 2025 08:11:27 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:01:45 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Yurisbel La Rosa",
                        in: "Thu Feb 06 2025 08:08:11 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:15:08 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Abdel Jesus Castellanos",
                        in: "Thu Feb 06 2025 08:07:53 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 16:58:39 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Arturo Torres Catala",
                        in: "Thu Feb 06 2025 08:07:46 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:02:18 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Juan Rodriguez Rios",
                        in: "Thu Feb 06 2025 08:04:38 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 16:58:26 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Juan Carlos Prieto",
                        in: "Thu Feb 06 2025 08:01:29 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:03:44 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Adrian Beltran",
                        in: "Thu Feb 06 2025 08:00:10 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:01:40 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Yordan Beltran Blanco",
                        in: "Thu Feb 06 2025 08:00:06 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 12:01:17 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Leunam Gonzalez",
                        in: "Thu Feb 06 2025 08:00:01 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:00:12 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Joel Palenzuela",
                        in: "Thu Feb 06 2025 07:58:50 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:03:32 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Karla Elisa Fraga Diego",
                        in: "Thu Feb 06 2025 07:58:24 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:04:49 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Osvaldo Leyva Casado",
                        in: "Thu Feb 06 2025 07:57:34 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:00:40 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Hairot Perez Rosquete",
                        in: "Thu Feb 06 2025 07:57:11 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:00:03 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Denys Perez Barreras",
                        in: "Thu Feb 06 2025 07:56:42 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 16:58:18 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Andy Baqos Vilan",
                        in: "Thu Feb 06 2025 07:51:31 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:02:59 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Dianelys Valhuerdy",
                        in: "Thu Feb 06 2025 07:51:06 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:04:47 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Odalys Alonso",
                        in: "Thu Feb 06 2025 07:43:28 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 16:58:46 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Jordan Garcia",
                        in: "Thu Feb 06 2025 07:43:19 GMT-0500 (Eastern Standard Time)",
                        out: "Thu Feb 06 2025 17:00:47 GMT-0500 (Eastern Standard Time)",
                    },
                    {
                        user: "Jordan Garcia",
                        in: "Wed Feb 05 2025 12:05:37 GMT-0500 (Eastern Standard Time)",
                        out: "Wed Feb 05 2025 17:02:19 GMT-0500 (Eastern Standard Time)",
                    },
                ]),
            });
            const res = await a.json();
            console.log({ res });
        } catch (e) {
            console.log(e);
        }
    };

    return <Button onClick={importFn}>Import to Odoo</Button>;
}
