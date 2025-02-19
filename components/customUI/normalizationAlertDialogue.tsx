import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

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
                    <AlertDialogDescription>
                        Choose how you want to export the data. You can either export the raw data as it is or normalize it for better readability and consistency.
                    </AlertDialogDescription>
                    <div className="flex flex-col gap-4">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Raw Data</th>
                                    <th className="border border-gray-300 px-4 py-2">Normalized Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">7:58 AM</td>
                                    <td className="border border-gray-300 px-4 py-2">8:00 AM</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">4:56 PM</td>
                                    <td className="border border-gray-300 px-4 py-2">5:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">5:12 PM</td>
                                    <td className="border border-gray-300 px-4 py-2">5:00 PM</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>Normalization rounds time to the nearest hour, making reports easier to analyze.</p>
                    </div>
                </AlertDialogHeader>
                <div className="flex justify-evenly">
                    <AlertDialogAction onClick={callback}>Raw Data</AlertDialogAction>
                    <AlertDialogAction onClick={callback2}>Normalized Data</AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
