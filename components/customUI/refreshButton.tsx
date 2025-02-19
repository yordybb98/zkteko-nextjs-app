"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useDataStore from "@/store/useDataStore";
import { IoMdRefresh } from "react-icons/io";

export default function RefreshButton() {
    const { fetchAttendances, isLoading } = useDataStore();
    return (
        <Button onClick={fetchAttendances} isLoading={isLoading} icon={<IoMdRefresh />} disabled={isLoading}>
            Refresh
        </Button>
    );
}
