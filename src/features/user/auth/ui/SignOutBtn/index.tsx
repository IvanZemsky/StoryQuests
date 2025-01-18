"use client"

import { userService } from "@/entities/User"
import { PageRoutes } from "@/shared/constants"
import { queryClient } from "@/shared/model"
import { Button } from "@/shared/ui"
import { useMutation } from "@tanstack/react-query"

export const SignOutBtn = () => {
   const signOutMutation = useMutation({
      mutationFn: userService.signOut,
      onSuccess: async () => {
         await queryClient.invalidateQueries({ queryKey: ["session"] })
         window.location.replace(PageRoutes.Home)
      },
   })

   const handleClick = () => {
      signOutMutation.mutate()
   }

   return <Button onClick={handleClick}>Sign out</Button>
}
