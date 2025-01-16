"use client"

import { PageRoutes } from "@/shared/constants"
import { ButtonLink, TextInput, Button } from "@/shared/ui"
import styles from "./styles.module.scss"
import ArrowLeftLongIcon from "@/shared/assets/icons/arrow-left-long.svg"
import { useForm } from "react-hook-form"
import { userService } from "@/entities/User"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

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
      <div className={styles.auth}>
         <ButtonLink
            href={PageRoutes.Home}
            className={styles.homeLink}
            leftIcon={<ArrowLeftLongIcon />}
         />
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Authorization</h1>
            <TextInput variant="outlined" placeholder="Login" {...register("login")} />
            <TextInput
               variant="outlined"
               placeholder="Password"
               {...register("password")}
            />
            <Button type="submit">Sign in</Button>
         </form>

         {error && <p className={styles.error}>Incorrect login or password</p>}
      </div>
   )
}
