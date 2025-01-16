"use client"

import { userService } from "@/entities/User";
import { queryClient } from "@/shared/model";
import { Button } from "@/shared/ui";
import { useMutation } from "@tanstack/react-query";

export const SignOutBtn = () => {
   const signOutMutation = useMutation({
      mutationFn: userService.signOut,
      onSuccess: async () => {
         queryClient.invalidateQueries({ queryKey: ["session"] });
      }
   })

   const handleClick = () => {
      signOutMutation.mutate()
   }

   return ( 
      <Button onClick={handleClick}>Sign out</Button>
   );
}