import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value; // 🔥 FIXED
  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*", "/login"],
};