"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Attendance } from "@/types/types";
import { DateTimePicker } from "./dateTimePicker";

interface EditDataModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: Attendance[];
    onSubmit: (updatedData: Attendance[]) => void;
}

export function EditDataModal({ isOpen, onClose, data, onSubmit }: EditDataModalProps) {
    console.log({ data });
    const [editableData, setEditableData] = useState<Attendance[]>(data);

    const handleInputChange = (id: string, value: string) => {
        setEditableData((prevData) => prevData.map((item) => (item.id === id ? { ...item, out: value } : item)));
    };

    const handleSubmit = () => {
        const isValid = editableData.every((item) => item.out !== "N/A" && item.out.trim() !== "");
        if (isValid) {
            onSubmit(editableData);
            onClose();
        } else {
            alert("Please fill in all 'Out' fields before submitting.");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
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
                            {editableData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.user}</TableCell>
                                    <TableCell>{new Date(item.in).toLocaleString()}</TableCell>
                                    <TableCell>
                                        <DateTimePicker />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <DialogFooter>
                    <Button onClick={onClose} variant="outline">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
