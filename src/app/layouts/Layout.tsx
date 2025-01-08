"use client"

import { PropsWithChildren, } from "react"
import { usePathname } from "next/navigation"
import { PageRoutes } from "@/shared/constants"
import { MainLayout } from "./MainLayout/MainLayout"
import { NoLayout } from "./NoLayout/NoLayout"

export const Layout = ({ children }: PropsWithChildren) => {
   const pathname = usePathname()

   const noLayoutPaths = [PageRoutes.Login, PageRoutes.Stories + '/']

   const isNoLayout = noLayoutPaths.some((path) => pathname.startsWith(path))

   if (isNoLayout) return <NoLayout>{children}</NoLayout>

   return <MainLayout>{children}</MainLayout>
}
