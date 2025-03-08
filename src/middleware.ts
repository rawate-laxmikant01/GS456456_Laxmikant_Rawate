import { withAuth } from "next-auth/middleware";
import { NextResponse, NextRequest } from "next/server";

export default withAuth({
  pages: {
    signIn: "/signin",
  }
});

export const config = {
  matcher: [
    "/store/:path*",
    "/sku/:path*",
    "/planning/:path*",
    "/charts/:path*",
  ],
};
