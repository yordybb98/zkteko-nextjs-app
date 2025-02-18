import NextAuth from "next-auth";
import { Department } from "./department";
import { Role } from "./role";
import { UserType } from "./userType.enum";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            name: string;
            username: string;
            email: string;
            department: Department;
            role: Role;
            token: string;
            userType: UserType;
        };
    }
}
