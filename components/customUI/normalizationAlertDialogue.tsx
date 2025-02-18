import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export function NormalizationAlertDialog({ open, setOpen, callback, callback2 }: { open: boolean; setOpen: (open: boolean) => void; callback: () => void; callback2: () => void }) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <div className="absolute top-2 right-2">
                    <Button variant={"destructive"} className="w-5 h-5 bg-red-600" onClick={() => setOpen(false)}>
                        X
                    </Button>
                </div>
                <AlertDialogHeader>
                    <AlertDialogTitle>How do you want to export the Data</AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-4">
                        Choose how you want to export the data. You can either export the raw data as it is or normalize it for better readability and consistency.
                        <table>
                            <thead>
                                <tr>
                                    <th>Raw Data</th>
                                    <th>Normalized Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7:58 AM</td>
                                    <td>8:00 AM</td>
                                </tr>
                                <tr>
                                    <td>4:56 PM</td>
                                    <td>5:00 PM</td>
                                </tr>
                                <tr>
                                    <td>5:12 PM</td>
                                    <td>5:00 PM</td>
                                </tr>
                            </tbody>
                        </table>
                        Normalization rounds time to the nearest hour, making reports easier to analyze.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={callback}>Raw Data</AlertDialogAction>
                    <AlertDialogAction onClick={callback2}>Normalized Data</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
