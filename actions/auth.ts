"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

const login = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
        const res = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });
        revalidatePath("/");
        return res;
        // redirect("/");
    } catch (error: any) {
        if (error?.cause?.code === "ECONNREFUSED") {
            return { error: "Connection refused" };
        } else if (error?.cause?.code === "ETIMEDOUT") {
            return { error: "Server Connection Timed Out" };
        }
        return { error: "Invalid credentials" };
    }
};

const logOut = async () => {
    await signOut({ redirectTo: "/login" });
};

export { login, logOut };
