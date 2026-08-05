import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define route classifications
  const isAuthPage =
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/signup") ||
    pathname.startsWith("/auth/forgot-password") ||
    pathname.startsWith("/auth/reset-password");

  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/tasks") ||
    pathname.startsWith("/workouts") ||
    pathname.startsWith("/notes") ||
    pathname.startsWith("/calendar") ||
    pathname.startsWith("/analytics") ||
    pathname.startsWith("/goals") ||
    pathname.startsWith("/settings");

  // Retrieve user JWT token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = !!token;

  // 1. If user is authenticated and trying to access an auth page (SignIn/SignUp), redirect to Dashboard
  if (isAuthenticated && isAuthPage) {
    // Prepared onboarding redirect logic (for future Prompt 05):
    // if (token?.onboardingCompleted === false) {
    //   return NextResponse.redirect(new URL("/onboarding", request.url));
    // }
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 2. If user is NOT authenticated and trying to access a protected route, redirect to Sign In
  if (!isAuthenticated && isProtectedRoute) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/tasks/:path*",
    "/workouts/:path*",
    "/notes/:path*",
    "/calendar/:path*",
    "/analytics/:path*",
    "/goals/:path*",
    "/settings/:path*",
    "/auth/:path*",
  ],
};
