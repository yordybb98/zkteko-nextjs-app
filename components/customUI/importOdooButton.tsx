"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import useDataStore from "@/store/useDataStore";
import { normalizeData, validateData } from "@/lib/utils";
import useEditModalStore from "@/store/useEditModalStore";
import { HiUpload } from "react-icons/hi";
import { BASE_API_URL } from "@/settings";

export default function ImportOdooButton() {
    const [isLoadingImport, setIsLoadingImport] = useState(false);
    const { attendances, isLoading } = useDataStore();
    const { openModal } = useEditModalStore();
    const importFn = async () => {
        try {
            setIsLoadingImport(true);
            const validation = await validateData(attendances);
            if (!validation.isValid) {
                toast("There are errors in the data, please fix them", { type: "info" });
                openModal(validation.errors);
                return;
            }
            const normalizedAttendances = await normalizeData(attendances);
            console.log({ normalizedAttendances });
            const a = await fetch(`${BASE_API_URL}/odoo/attendance`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(normalizedAttendances),
            });
            const res = await a.json();
            if (res.success) {
                toast("Data imported to Odoo", { type: "success" });
            } else {
                toast(`Failed to import: ${res.error}`, { type: "error" });
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoadingImport(false);
        }
    };

    return (
        <Button onClick={importFn} isLoading={isLoadingImport} disabled={isLoading} icon={<HiUpload />}>
            Import to Odoo
        </Button>
    );
}
