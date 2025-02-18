"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import ExcelJS from "exceljs";
import { autoSizeColumns, formatDate } from "@/lib/utils";
import { FaFileExcel } from "react-icons/fa";
import useDataStore from "@/store/useDataStore";

export default function ExportExcelButton() {
    const [isLoading, setIsLoading] = React.useState(false);
    const { attendances } = useDataStore();

    const exportToExcel = async () => {
        try {
            setIsLoading(true);
            const workbook = new ExcelJS.Workbook();
            const sheet1 = workbook.addWorksheet("Attendances");

            let rows = attendances.map(({ user, in: inTime, out: outTime }) => {
                const inDate = formatDate(inTime);
                const outDate = outTime === "N/A" ? "" : formatDate(outTime);
                return [user, inDate, outDate];
            });

            sheet1.addTable({
                name: "Attendances",
                ref: "A1",
                headerRow: true,
                style: {
                    theme: "TableStyleMedium2",
                    showRowStripes: true,
                },
                columns: [
                    { name: "Nombre", filterButton: true },
                    { name: "Entrada", filterButton: false },
                    { name: "Salida", filterButton: false },
                ],
                rows: rows,
            });

            autoSizeColumns(sheet1);

            // Generate the Excel file as a buffer
            const buffer = await workbook.xlsx.writeBuffer();

            // Create a Blob from the buffer and create a download link
            const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "output.xlsx";

            // Simulate a click to start the download
            link.click();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={exportToExcel} isLoading={isLoading}>
            <FaFileExcel /> Export to Excel
        </Button>
    );
}
