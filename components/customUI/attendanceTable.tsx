"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { useEffect } from "react";
import useDataStore from "@/store/useDataStore";
import { Loader } from "lucide-react";

export function AttendanceTable() {
    const { attendances, fetchAttendances, isLoading } = useDataStore();

    useEffect(() => {
        if (attendances.length === 0) {
            fetchAttendances();
        }
    }, []);

    return (
        <div className="flex gap-2 flex-col">
            <Table>
                <TableCaption>A list of recent attendances.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>IN</TableHead>
                        <TableHead>OUT</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={3}>
                                <div className="flex justify-center p-4 ">
                                    <Loader className="animate-spin" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ) : (
                        attendances?.map((attendance, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{attendance.user}</TableCell>
                                <TableCell>{attendance.in === "N/A" ? "N/A" : formatDate(attendance.in)}</TableCell>
                                <TableCell>{attendance.out === "N/A" ? "N/A" : formatDate(attendance.out)}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
