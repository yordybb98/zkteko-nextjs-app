"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Attendance } from "@/types/types";
import { DateTimePicker } from "./dateTimePicker";
import { toast } from "react-toastify";
import useDataStore from "@/store/useDataStore";
import useEditModalStore from "@/store/useEditModalStore";
import { setFixedTime } from "@/lib/utils";

export function EditDataModal() {
    const { isOpen, data, setData, closeModal } = useEditModalStore();
    const { attendances, setAttendances } = useDataStore();

    const handleSubmit = () => {
        const isValid = data.every((item) => item.out !== "N/A" && item.out.trim() !== "" && item.in !== "N/A" && item.in.trim() !== "");
        if (isValid) {
            const newData = attendances.map((item) => {
                const correctedItem = data.find((data) => data.id === item.id);
                return correctedItem ? { ...item, in: correctedItem.in, out: correctedItem.out } : item;
            });
            setAttendances(newData);
            toast("Data updated successfully", { type: "success" });
            closeModal();
        } else {
            toast("Please fill in all the required fields", { type: "warning" });
        }
    };

    const handleDateTimeSelection = (selectedDate: Date, id: string, type: "IN" | "OUT") => {
        const newData = data.map((attendance) => {
            if (attendance.id === id) {
                if (type === "IN") {
                    return { ...attendance, in: selectedDate.toString() };
                } else if (type === "OUT") {
                    return { ...attendance, out: selectedDate.toString() };
                }
            }
            return attendance;
        });
        setData(newData);
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>Edit Data</DialogTitle>
                </DialogHeader>
                <div className="max-h-[60vh] overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>In</TableHead>
                                <TableHead>Out</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map(({ id, in: inDate, out: outDate, user }) => (
                                <TableRow key={id}>
                                    <TableCell>{user}</TableCell>
                                    <TableCell>
                                        {inDate === "N/A" ? (
                                            <DateTimePicker onChange={(selectedDate) => handleDateTimeSelection(selectedDate, id, "IN")} autoCompleteDate={setFixedTime(outDate, 8)} />
                                        ) : (
                                            new Date(inDate).toLocaleString()
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {outDate === "N/A" ? (
                                            <DateTimePicker onChange={(selectedDate) => handleDateTimeSelection(selectedDate, id, "OUT")} autoCompleteDate={setFixedTime(inDate, 17)} />
                                        ) : (
                                            new Date(outDate).toLocaleString()
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <DialogFooter>
                    <Button onClick={closeModal} variant="outline">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
