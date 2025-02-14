import { AttendanceTable } from "@/components/customUI/attendanceTable";
import { getData } from "@/actions/services";
import ExportExcelButton from "@/components/customUI/exportExcelButton";
import ImportOdooButton from "@/components/customUI/importOdooButton";
import CheckErrorsButton from "@/components/customUI/checkErrorsButton";

export default async function Home() {
    const initialData = await getData();
    return (
        <div className="flex gap-4 flex-col p-4">
            <h1>ZKTeco Luxe App</h1>

            <div className="flex justify-end    gap-2">
                <CheckErrorsButton data={initialData} />
                <ImportOdooButton data={initialData} />
                <ExportExcelButton data={initialData} />
            </div>
            <AttendanceTable attendances={initialData} />
        </div>
    );
}
