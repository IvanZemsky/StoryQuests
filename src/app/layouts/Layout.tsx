"use client"

import { PropsWithChildren, } from "react"
import "@/src/shared/ui/styles/vars.scss"
import "@/src/shared/ui/styles/mixins.scss"
import "@/src/app/styles/reset.scss"
import "@/src/app/styles/fonts.scss"
import { usePathname, useRouter } from "next/navigation"
import { PageRoutes } from "@/src/shared/constants"
import { MainLayout } from "./MainLayout/MainLayout"
import { NoLayout } from "./NoLayout/NoLayout"

export const Layout = ({ children }: PropsWithChildren) => {
   const pathname = usePathname()

   const noLayoutPaths = [PageRoutes.Login]

   const isNoLayout = noLayoutPaths.some((path) => pathname.startsWith(path))

   if (isNoLayout) return <NoLayout>{children}</NoLayout>

   return <MainLayout>{children}</MainLayout>
}
