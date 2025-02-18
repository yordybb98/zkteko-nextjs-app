"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Attendance } from "@/types/types";
import { CheckCheckIcon } from "lucide-react";
import { toast } from "react-toastify";
import { EditDataModal } from "./editAttendanceModal";
import useDataStore from "@/store/useDataStore";
import { orderAttendance, validateData } from "@/lib/utils";

export default function CheckErrorsButton() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [errors, setErrors] = React.useState<Attendance[]>([]);
    const { attendances } = useDataStore();

    const checkErrors = async () => {
        try {
            setIsLoading(true);
            const orderedData = orderAttendance(attendances, "ASC");
            const res = await validateData(orderedData);
            if (res.isValid) toast("Data is valid", { type: "success" });
            else {
                toast("There are errors in the data, please fix them", { type: "info" });
                console.log(res.errors);
                setErrors(res.errors);
                handleOpenModal();
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    return (
        <>
            <Button onClick={checkErrors} isLoading={isLoading}>
                <CheckCheckIcon /> Check Errors
            </Button>
            {isOpen && <EditDataModal isOpen={isOpen} onClose={handleCloseModal} data={errors} />}
        </>
    );
}
