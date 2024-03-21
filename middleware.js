export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/user","/admin"]
  // matcher: ["/((?!register|api|login).*)"],
};