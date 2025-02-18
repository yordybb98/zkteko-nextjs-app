"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { login } from "@/actions/auth";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);

        try {
            const res = await login(formData);

            if (res.error) {
                toast.error(res.error);
            } else {
                // Initialize WebSocket connection
                const session = await getSession();
                console.log("CONNECTING.........");

                // Save credentials to local storage
                if (rememberMe) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    localStorage.setItem("rememberMe", rememberMe.toString());
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    localStorage.removeItem("rememberMe");
                }
                window.location.reload();
            }
        } catch (error: any) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        // Check local storage for saved credentials
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");
        const savedRememberMe = localStorage.getItem("rememberMe");

        if (savedUsername) {
            setUsername(savedUsername);
        }
        if (savedPassword) {
            setPassword(savedPassword);
        }
        if (savedRememberMe) {
            setRememberMe(savedRememberMe === "true");
        }
    }, []);

    return (
        <main className="relative z-10 flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8 dark:bg-background/60 bg-white backdrop-blur-lg p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h2>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="username" className="block text-sm font-medium text-foreground">
                            Username
                        </Label>
                        <Input id="username" name="username" type="text" autoComplete="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-sm font-medium text-foreground">
                            Password
                        </Label>
                        <Input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                                Remember me
                            </Label>
                        </div>
                        {/* <div className="text-sm">
                            <Button
                                variant="link"
                                className="font-medium text-primary hover:text-primary/80"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toast.info("Not implemented yet");
                                }}
                            >
                                Forgot your password?
                            </Button>
                        </div> */}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                </form>
            </div>
        </main>
    );
}
