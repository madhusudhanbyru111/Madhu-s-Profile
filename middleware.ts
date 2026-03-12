import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Block common attack patterns
  const url = request.nextUrl.pathname.toLowerCase();
  const blockedPatterns = ["/wp-admin", "/wp-login", "/admin", ".php", ".env"];

  if (blockedPatterns.some((pattern) => url.includes(pattern))) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
