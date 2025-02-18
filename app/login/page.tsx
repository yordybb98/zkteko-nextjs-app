import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import LoginForm from "@/components/loginForm";

export default async function HomePage() {
    const session = await auth();
    if (session?.user) redirect("/");
    return (
        <div className="relative flex flex-col w-screen h-screen">
            <Image src="/luxe_login.webp" alt="Luxe Graphics Background" fill />
            <div className="absolute inset-0  dark:bg-black/10 bg-white/20" />

            <LoginForm />
        </div>
    );
}
