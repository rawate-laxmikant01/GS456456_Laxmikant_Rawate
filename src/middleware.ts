import { withAuth } from "next-auth/middleware";

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
