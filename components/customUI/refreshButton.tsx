"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useDataStore from "@/store/useDataStore";

export default function RefreshButton() {
    const { fetchAttendances, isLoading } = useDataStore();
    return (
        <Button onClick={fetchAttendances} isLoading={isLoading}>
            Refresh
        </Button>
    );
}
