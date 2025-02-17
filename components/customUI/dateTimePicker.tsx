"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DateTimePickerProps {
    defaultDate?: Date;
    onChange?: (date: Date) => void;
}

export function DateTimePicker({ defaultDate, onChange }: DateTimePickerProps) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(defaultDate);
    const [open, setOpen] = useState(false);

    function handleDateSelect(date: Date | undefined) {
        if (date) {
            setSelectedDate((prev) => {
                const newDate = new Date(date);
                if (prev) {
                    newDate.setHours(prev.getHours(), prev.getMinutes());
                }
                return newDate;
            });
        }
    }

    function handleTimeChange(type: "hour" | "minute" | "ampm", value: string) {
        if (!selectedDate) return;
        const newDate = new Date(selectedDate);

        if (type === "hour") {
            const hour = parseInt(value, 10);
            newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
        } else if (type === "minute") {
            newDate.setMinutes(parseInt(value, 10));
        } else if (type === "ampm") {
            const hours = newDate.getHours();
            if (value === "AM" && hours >= 12) newDate.setHours(hours - 12);
            if (value === "PM" && hours < 12) newDate.setHours(hours + 12);
        }

        setSelectedDate(newDate);
    }

    const handleSubmit = () => {
        onChange?.(selectedDate || new Date());
        handleClosePopover();
    };

    const handleClosePopover = () => {
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !selectedDate && "text-muted-foreground")}>
                    {selectedDate ? format(selectedDate, "MM/dd/yyyy hh:mm aa") : <span>Pick a date & time</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2 w-auto p-4">
                <div className="sm:flex">
                    {/* Date Selection */}
                    <Calendar mode="single" selected={selectedDate} onSelect={handleDateSelect} initialFocus />

                    {/* Time Selection */}
                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                        {/* Hour Selection */}
                        <ScrollArea className="w-24">
                            <div className="flex sm:flex-col p-2">
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                                    <Button
                                        key={hour}
                                        size="icon"
                                        variant={selectedDate && selectedDate?.getHours() % 12 === hour % 12 ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("hour", hour.toString())}
                                    >
                                        {hour}
                                    </Button>
                                ))}
                            </div>
                        </ScrollArea>

                        {/* Minute Selection */}
                        <ScrollArea className="w-24">
                            <div className="flex sm:flex-col p-2">
                                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                                    <Button
                                        key={minute}
                                        size="icon"
                                        variant={selectedDate?.getMinutes() === minute ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("minute", minute.toString())}
                                    >
                                        {minute.toString().padStart(2, "0")}
                                    </Button>
                                ))}
                            </div>
                        </ScrollArea>

                        {/* AM/PM Selection */}
                        <ScrollArea>
                            <div className="flex sm:flex-col p-2">
                                {["AM", "PM"].map((ampm) => (
                                    <Button
                                        key={ampm}
                                        size="icon"
                                        variant={selectedDate && ((ampm === "AM" && selectedDate.getHours() < 12) || (ampm === "PM" && selectedDate.getHours() >= 12)) ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("ampm", ampm)}
                                    >
                                        {ampm}
                                    </Button>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <Button className="w-40" onClick={handleSubmit}>
                        Done
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
