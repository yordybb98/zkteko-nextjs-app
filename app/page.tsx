import { AttendanceTable } from "@/components/customUI/table";
import { getData } from "../actions/services";

export default async function Home() {
    const data = await getData();
    console.log({ data });
    return (
        <div className="flex gap-4 flex-col p-4">
            <h1>ZKTeco Luxe App</h1>
            <AttendanceTable attendances={data.reverse()} />
        </div>
    );
}
