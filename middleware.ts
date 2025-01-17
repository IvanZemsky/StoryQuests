import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
   matcher: ["/stories", "/profile", "/create", "/sign-in", "/sign-up"],
}

export function middleware(req: NextRequest) {
   const url = req.nextUrl.clone()
   const pathname = req.nextUrl.pathname

   const cookie = cookies()
   const accessToken = cookie.get("access-token")

   if ((pathname === "/sign-in" || pathname === "/sign-up") && accessToken) {
      url.pathname = "/profile"
      return NextResponse.redirect(url)
   }

   if ((pathname === "/profile" || pathname === "/create") && !accessToken) {
      url.pathname = "/sign-in"
      return NextResponse.redirect(url)
   }

   if (pathname === "/stories" && !url.searchParams.has("page")) {
      url.searchParams.set("page", "1")
      return NextResponse.redirect(url)
   }

   return NextResponse.next()
}
