import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
   matcher: '/stories',
}

export function middleware(req: NextRequest) {
   const url = req.nextUrl.clone()

   if (!url.searchParams.has("page")) {
      url.searchParams.set("page", "1")
      return NextResponse.redirect(url)
   }

}
