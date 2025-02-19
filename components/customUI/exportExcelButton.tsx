"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ExcelJS from "exceljs";
import { autoSizeColumns, formatDate, normalizeData } from "@/lib/utils";
import { FaFileExcel } from "react-icons/fa";
import useDataStore from "@/store/useDataStore";
import { NormalizationAlertDialog } from "./normalizationAlertDialogue";

export default function ExportExcelButton() {
    const [isLoadingExport, setIsLoadingExport] = useState(false);
    const { attendances, isLoading } = useDataStore();
    const [open, setOpen] = useState(false);

    const exportToExcel = async (normalizedData?: boolean) => {
        try {
            setIsLoadingExport(true);
            const workbook = new ExcelJS.Workbook();
            const sheet1 = workbook.addWorksheet("Attendances");
            const data = normalizedData ? await normalizeData(attendances) : attendances;

            let rows = data.map(({ user, in: inTime, out: outTime }) => {
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
            link.download = `${normalizedData ? "Normalized_Attendances" : "Raw_Attendances"}.xlsx`;

            // Simulate a click to start the download
            link.click();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoadingExport(false);
        }
    };

    const openAlertDialogue = () => {
        setOpen(true);
    };

    return (
        <>
            <Button onClick={openAlertDialogue} isLoading={isLoadingExport} icon={<FaFileExcel />} disabled={isLoading}>
                Export to Excel
            </Button>
            {open && (
                <NormalizationAlertDialog
                    open={open}
                    setOpen={setOpen}
                    callback={() => {
                        exportToExcel(false);
                    }}
                    callback2={() => {
                        exportToExcel(true);
                    }}
                />
            )}
        </>
    );
}
