import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Attendance } from "@/types/types";

export function AttendanceTable({ attendances }: { attendances: Attendance[] }) {
    return (
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
                {attendances.map((attendance, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{attendance.user}</TableCell>
                        <TableCell>{new Date(attendance.in).toLocaleString()}</TableCell>
                        <TableCell>{attendance.out === "N/A" ? "N/A" : new Date(attendance.out).toLocaleString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
