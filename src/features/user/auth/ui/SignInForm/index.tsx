"use client"

import { PageRoutes } from "@/shared/constants"
import { TextInput, Button } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { AuthFormLayout, userService } from "@/entities/User"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { queryClient } from "@/shared/model"

type SignInForm = {
   login: string
   password: string
}

export const SignInForm = () => {
   const router = useRouter()
   const { register, handleSubmit } = useForm<SignInForm>()

   const signInMutation = useMutation({
      mutationFn: userService.signIn,
      onSuccess: async () => {
         await queryClient.invalidateQueries({ queryKey: ["session"] })
         await queryClient.refetchQueries({ queryKey: ["stories"] })
         router.replace(PageRoutes.Stories)
         router.refresh()
      },
   })

   const onSubmit = (data: SignInForm) => {
      signInMutation.mutate(data)
   }

   return (
      <AuthFormLayout
         onSubmit={handleSubmit(onSubmit)}
         title="Sign In"
         inputs={
            <>
               <TextInput variant="outlined" placeholder="Login" {...register("login")} />
               <TextInput
                  type="password"
                  variant="outlined"
                  placeholder="Password"
                  {...register("password")}
               />
               <Button
                  type="submit"
                  disabled={signInMutation.isPending || signInMutation.isSuccess}
               >
                  Sign in
               </Button>
            </>
         }
         link={
            <Link href={PageRoutes.SignUp}>Doesn&apos;t have an account? Sign up!</Link>
         }
         error={signInMutation.error}
      />
   )
}
