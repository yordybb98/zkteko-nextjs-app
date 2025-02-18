import { auth } from "@/auth";
import { UserNav } from "./ui/user-nav";

interface NavbarProps {
    title: string;
}

export async function Navbar({ title }: NavbarProps) {
    const session = await auth();
    return (
        <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
            <div className="mx-4 sm:mx-8 flex h-14 items-center">
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <UserNav />
                </div>
            </div>
        </header>
    );
}
