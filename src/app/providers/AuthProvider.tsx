"use client"

import { useAuthCheck } from "@/entities/User"
import { Loading } from "@/shared/ui"
import { PropsWithChildren } from "react"

export const AuthProvider = ({ children }: PropsWithChildren) => {
   const { isLoading, isError, isAuth } = useAuthCheck()

   if (isLoading) return <Loading />

   return children
}
