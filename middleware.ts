import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
    matcher: ["/((?!api|_next|favicon.ico|images|.*\\.webp|.*\\.jpg|.*\\.png).*)"],
};

export default auth((req) => {
    const reqUrl = new URL(req.url);
    // Check if the user is authenticated
    if (!req.auth) {
        if (reqUrl.pathname !== "/login")
            // Redirect to login if not authenticated
            return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`, req.url));
    } else {
        /* // Define allowed roles for specific routes
        const roleBasedRoutes = {
            "/user": ["admin"],
            "/roles": ["admin"]
            // Add more routes and their allowed roles as needed
        };
        // Check user role based on the requested path
        const userRole = req.auth.user.role; // Adjust this based on your session structure
        const allowedRoles = Object.entries(roleBasedRoutes).find(([path]) => reqUrl.pathname.startsWith(path))?.[1];

        if (allowedRoles && !allowedRoles.includes(userRole.name.toLocaleLowerCase())) {
            // Redirect to unauthorized page if the user's role is not allowed
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        } */

        // Continue to the requested page if authenticated and authorized
        return NextResponse.next();
    }
});
