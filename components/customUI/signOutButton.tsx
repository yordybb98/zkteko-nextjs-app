"use client";

import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { logOut } from "@/actions/auth";

export const SignOutButton = forwardRef<HTMLButtonElement, { collapsable?: boolean }>(({ collapsable = false }, ref) => {
    return (
        <Button
            ref={ref} // Forwarding the ref to the Button component
            onClick={() => {
                logOut();
            }}
            className="flex items-center w-full transition-all"
        >
            <span className={cn(collapsable ? "" : "mr-4")}>
                <LogOut size={18} />
            </span>
            <p className={cn("whitespace-nowrap transition-all ease-in", collapsable ? "opacity-0 hidden" : "opacity-100")}>Sign out</p>
        </Button>
    );
});

SignOutButton.displayName = "SignOutButton";
