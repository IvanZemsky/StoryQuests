import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
}

export function middleware(req: NextRequest) {
   const url = req.nextUrl.clone()
   const pathname = req.nextUrl.pathname

   const accessToken = req.cookies.get("access-token")

   if (
      (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) &&
      accessToken
   ) {
      url.pathname = "/profile"
      return NextResponse.redirect(url)
   }

   if (
      (pathname.startsWith("/profile") || pathname.startsWith("/create")) &&
      !accessToken
   ) {
      url.pathname = "/sign-in"
      return NextResponse.redirect(url)
   }

   if (pathname === "/stories" && !url.searchParams.has("page")) {
      url.searchParams.set("page", "1")
      return NextResponse.redirect(url)
   }

   return NextResponse.next()
}
