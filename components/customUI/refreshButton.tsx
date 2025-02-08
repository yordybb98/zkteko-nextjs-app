"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function RefreshButton({ callback }: { callback: () => void }) {
    return (
        <Button variant="outline" onClick={callback}>
            Refresh
        </Button>
    );
}
