"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Attendance } from "@/types/types";
import { CheckCheckIcon } from "lucide-react";
import { normalizeData } from "@/lib/utils";

export default function CheckErrorsButton({ data }: { data: Attendance[] }) {
    const [isLoading, setIsLoading] = React.useState(false);

    const checkErrors = async () => {
        try {
            setIsLoading(true);
            normalizeData(data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={checkErrors} isLoading={isLoading}>
            <CheckCheckIcon /> Check Errors
        </Button>
    );
}
