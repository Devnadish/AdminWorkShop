export { default } from "next-auth/middleware";

// export const config = { matcher: ["/"] };


// export const config = {
//   matcher: [/^\/dashboard(\/.*)?/],
// };

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/clients/new",
    
  ],
};
