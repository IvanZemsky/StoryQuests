"use client"

import { PageRoutes } from "@/src/shared/constants"
import { ButtonLink, TextInput, Button } from "@/src/shared/ui"
import styles from "./styles.module.scss"
import ArrowLeftLongIcon from "@/src/shared/assets/icons/arrow-left-long.svg"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { IUserLogin } from "@/src/shared/api"
import { authStore } from "@/src/entities/User/model/authStore"
import { observer } from "mobx-react"
import { useState } from "react"
import cn from "classnames"
import { userService } from "@/src/entities/User"

export const LoginForm = observer(() => {
   const { register, handleSubmit, getValues } = useForm()
   const { setToken } = authStore
   const [isError, setIsError] = useState(false)

   const loginMutation = useMutation({
      mutationFn: (loginData: IUserLogin) => userService.login(loginData),
      onSuccess(data: { token: string }) {
         setIsError(false)
         setToken(data.token)
      },
      onError(error) {
         setIsError(true)
      },
   })

   const onSubmit = (data: any) => {
      const loginData = {
         login: getValues("login"),
         password: getValues("password"),
      }
      loginMutation.mutate(loginData)
   }

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
            <Button type="submit">Log in</Button>
         </form>

         <p className={cn(styles.error, { [styles.opened]: isError })}>
            Incorrect login or password
         </p>
      </div>
   )
})
