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

export function NormalizationAlertDialog({ open, setOpen, callback, callback2 }: { open: boolean; setOpen: (open: boolean) => void; callback: () => void; callback2: () => void }) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>How do you want to export the Data</AlertDialogTitle>
                    <AlertDialogDescription>Select if you want to normalize the data</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={callback}>Raw Data</AlertDialogAction>
                    <AlertDialogAction onClick={callback2}>Normalized Data</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
