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
                        <TableCell>{attendance.in}</TableCell>
                        <TableCell>{attendance.out}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
