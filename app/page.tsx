import { AttendanceTable } from "@/components/customUI/attendanceTable";
import { getData } from "@/actions/services";
import ExportExcelButton from "@/components/customUI/exportExcelButton";
import ImportOdooButton from "@/components/customUI/importOdooButton";
import CheckErrorsButton from "@/components/customUI/checkErrorsButton";

export default async function Home() {
    return (
        <div className="flex gap-4 flex-col p-4">
            <h1>ZKTeco Luxe App</h1>

            <div className="flex justify-end gap-2">
                <CheckErrorsButton />
                <ImportOdooButton />
                <ExportExcelButton />
            </div>
            <AttendanceTable />
        </div>
    );
}
