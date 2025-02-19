"use server";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { auth } from "@/auth";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { getInitials } from "@/lib/utils";
import { SignOutButton } from "../customUI/signOutButton";

export async function UserNav() {
    const session = await auth();
    if (session) {
        const initials = getInitials(session?.user?.name);

        return (
            <DropdownMenu>
                <TooltipProvider disableHoverableContent>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="#" alt="Avatar" />
                                        <AvatarFallback className="bg-transparent">{initials}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">Profile</TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="flex font-normal justify-between">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
                        </div>
                        <div>
                            <p className="text-xs leading-none text-muted-foreground">{session?.user?.role.name}</p>
                        </div>
                    </DropdownMenuLabel>
                    {/* <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="hover:cursor-pointer" asChild>
                            <Link href="#" className="flex items-center">
                                <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
                                Main Menu
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:cursor-pointer" asChild>
                            <Link href="#" className="flex items-center">
                                <User className="w-4 h-4 mr-3 text-muted-foreground" />
                                Account
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:cursor-pointer">
                        <SignOutButton />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
}
