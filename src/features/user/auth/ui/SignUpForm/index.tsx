"use client"

import { PageRoutes } from "@/shared/constants"
import { TextInput, Button } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { AuthFormLayout, userService } from "@/entities/User"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { queryClient } from "@/shared/model"

type SignUpForm = {
   login: string
   password: string
}

export const SignUpForm = () => {
   const router = useRouter()
   const { register, handleSubmit } = useForm<SignUpForm>()

   const signUpMutation = useMutation({
      mutationFn: userService.signUp,
      onSuccess: async () => {
         await queryClient.invalidateQueries({ queryKey: ["session"] })
         router.replace(PageRoutes.Stories)
      }
   })

   const onSubmit = (data: SignUpForm) => {
      signUpMutation.mutate(data)
   }

   const error = signUpMutation.error

   return (
      <AuthFormLayout
         onSubmit={handleSubmit(onSubmit)}
         title="Sign Up"
         inputs={
            <>
               <TextInput variant="outlined" placeholder="Login" {...register("login")} />
               <TextInput
                  type="password"
                  variant="outlined"
                  placeholder="Password"
                  {...register("password")}
               />
               <Button type="submit" disabled={signUpMutation.isPending}>
                  Sign up
               </Button>
            </>
         }
         link={<Link href={PageRoutes.SignIn}>Already have an account? Sign in!</Link>}
         error={error}
      />
   )
}
