"use server";

import { signIn, signOut } from "@/auth";

const login = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
        const res = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });
        return res;
    } catch (error: any) {
        if (error?.cause?.code === "ECONNREFUSED") {
            return { error: "Connection refused" };
        } else if (error?.cause?.code === "ETIMEDOUT") {
            return { error: "Server Connection Timed Out" };
        }
        console.log({ error });
        return { error: error?.["cause"]?.["err"]?.message || "An unexpected error occurred" };
    }
};

const logOut = async () => {
    await signOut({ redirectTo: "/login" });
};

export { login, logOut };
