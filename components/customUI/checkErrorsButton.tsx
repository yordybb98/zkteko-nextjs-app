"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Attendance } from "@/types/types";
import { CheckCheckIcon } from "lucide-react";
import { normalizeData } from "@/lib/utils";
import { toast } from "react-toastify";
import { EditDataModal } from "./editAttendanceModal";

export default function CheckErrorsButton({ data }: { data: Attendance[] }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [errors, setErrors] = React.useState<Attendance[]>([]);

    const checkErrors = async () => {
        try {
            setIsLoading(true);
            const res = await normalizeData(data);
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

    const handleSubmit = (updatedData: Attendance[]) => {
        console.log("Updated data:", updatedData);
    };

    return (
        <>
            <Button onClick={checkErrors} isLoading={isLoading}>
                <CheckCheckIcon /> Check Errors
            </Button>
            {isOpen && <EditDataModal isOpen={isOpen} onClose={handleCloseModal} data={errors} onSubmit={handleSubmit} />}
        </>
    );
}
