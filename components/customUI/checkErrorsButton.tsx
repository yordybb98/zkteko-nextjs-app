"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";
import { toast } from "react-toastify";
import useDataStore from "@/store/useDataStore";
import { orderAttendance, validateData } from "@/lib/utils";
import useEditModalStore from "@/store/useEditModalStore";

export default function CheckErrorsButton() {
    const [checkingErrorsLoading, setCheckingErrorsLoading] = React.useState(false);
    const { attendances, isLoading } = useDataStore();
    const { openModal } = useEditModalStore();

    const checkErrors = async () => {
        try {
            setCheckingErrorsLoading(true);
            const orderedData = orderAttendance(attendances, "ASC");
            const res = await validateData(orderedData);
            if (res.isValid) toast("Data is valid", { type: "success" });
            else {
                toast("There are errors in the data, please fix them", { type: "info" });
                openModal(res.errors);
                console.log(res.errors);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setCheckingErrorsLoading(false);
        }
    };

    return (
        <>
            <Button onClick={checkErrors} isLoading={checkingErrorsLoading} disabled={isLoading} icon={<CheckCheckIcon />}>
                Check Errors
            </Button>
        </>
    );
}
