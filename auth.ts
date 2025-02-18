import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { BASE_API_URL } from "./settings";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const res = await fetch(`${BASE_API_URL}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                    }),
                });

                if (res.ok) {
                    const user = await res.json();
                    alert(user);
                    if (user && user.role) return user;
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            return {
                ...token,
                ...user,
            };
        },
        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    },
    trustHost: true,
    session: {
        maxAge: 9 * 60 * 60, // 9 hours
    },
});
