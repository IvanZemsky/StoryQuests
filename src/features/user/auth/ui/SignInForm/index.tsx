"use client"

import { PageRoutes } from "@/shared/constants"
import { TextInput, Button } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { AuthFormLayout, userService } from "@/entities/User"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import Link from "next/link"

type SignInForm = {
   login: string
   password: string
}

export const SignInForm = () => {
   const router = useRouter()
   const { register, handleSubmit } = useForm<SignInForm>()

   const signUpMutation = useMutation({
      mutationFn: userService.signIn,
      onSuccess: () => router.replace(PageRoutes.Stories),
   })

   const onSubmit = (data: SignInForm) => {
      signUpMutation.mutate(data)
   }

   const error = signUpMutation.error

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
               <Button type="submit" disabled={signUpMutation.isPending}>
                  Sign in
               </Button>
            </>
         }
         link={<Link href={PageRoutes.SignUp}>Doesn&apos;t have an account? Sign up!</Link>}
         error={error}
      />
   )
}
