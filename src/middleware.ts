import { withAuth } from "next-auth/middleware";
import { NextResponse, NextRequest } from "next/server";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized: ({ token }) => !!token, // Allow only authenticated users
  },
});

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (!req.cookies.get("next-auth.session-token")) {
    url.pathname = "/signin";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/store/:path*",
    "/sku/:path*",
    "/planning/:path*",
    "/charts/:path*",
  ],
};
