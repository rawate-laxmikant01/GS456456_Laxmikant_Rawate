import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
});

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/store/:path*",
    "/sku/:path*",
    "/planning/:path*",
    "/charts/:path*",
  ],
};
