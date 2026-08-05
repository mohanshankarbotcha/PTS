import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/signup") ||
    pathname.startsWith("/auth/forgot-password") ||
    pathname.startsWith("/auth/reset-password");

  const isOnboardingPage = pathname.startsWith("/onboarding");

  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/tasks") ||
    pathname.startsWith("/workouts") ||
    pathname.startsWith("/notes") ||
    pathname.startsWith("/calendar") ||
    pathname.startsWith("/analytics") ||
    pathname.startsWith("/goals") ||
    pathname.startsWith("/settings");

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = !!token;
  const isOnboardingCompleted = token?.onboardingCompleted === true;

  // 1. Unauthenticated users trying to access protected routes or onboarding -> Redirect to Sign In
  if (!isAuthenticated && (isProtectedRoute || isOnboardingPage)) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // 2. Authenticated users trying to access auth pages (Sign In/Sign Up)
  if (isAuthenticated && isAuthPage) {
    if (!isOnboardingCompleted) {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 3. Authenticated user needs onboarding, but trying to access protected dashboard routes -> Redirect to Onboarding
  if (isAuthenticated && isProtectedRoute && !isOnboardingCompleted) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  // 4. Authenticated user ALREADY completed onboarding, but trying to access /onboarding -> Redirect to Dashboard
  if (isAuthenticated && isOnboardingPage && isOnboardingCompleted) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
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
    "/onboarding/:path*",
  ],
};
