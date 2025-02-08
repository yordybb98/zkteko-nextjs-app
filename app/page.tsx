import { AttendanceTable } from "@/components/customUI/attendanceTable";
import { getData } from "@/actions/services";
import ExportExcelButton from "@/components/customUI/exportExcelButton";

export default async function Home() {
    let data = await getData();
    return (
        <div className="flex gap-4 flex-col p-4">
            <h1>ZKTeco Luxe App</h1>

            <div className="flex justify-end">
                <ExportExcelButton data={data} />
            </div>
            <AttendanceTable attendances={data.reverse()} />
        </div>
    );
}
