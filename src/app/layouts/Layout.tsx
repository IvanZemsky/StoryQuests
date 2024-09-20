"use client"

import { PropsWithChildren, } from "react"
import "@/shared/ui/styles/vars.scss"
import "@/shared/ui/styles/mixins.scss"
import "@/app/styles/reset.scss"
import "@/app/styles/fonts.scss"
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
