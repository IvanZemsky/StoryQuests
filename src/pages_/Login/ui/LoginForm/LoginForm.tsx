"use client"

import { PageRoutes } from "@/src/shared/constants"
import { ButtonLink, TextInput, Button } from "@/src/shared/ui"
import styles from "./styles.module.scss"
import ArrowLeftLongIcon from "@/src/shared/assets/icons/arrow-left-long.svg"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { IUserLogin, api, APIEndpoints } from "@/src/shared/api"
import { IUser } from "@/src/entities/User"
import { AxiosResponse } from "axios"

const {Login, Auth} = APIEndpoints

const login = async (loginData: IUserLogin): Promise<IUser> => {
   const response: AxiosResponse<IUser> = await api.post(Auth + Login, loginData)
   return response.data
}

export const LoginForm = () => {
   const { register, handleSubmit, getValues } = useForm()

   const loginMutation = useMutation({
      mutationFn: (loginData: IUserLogin) => login(loginData),
      onSuccess(data: IUser) {
         console.log('Login successful', data)
      },
      onError(error) {
         console.error('Login failed', error)
      }
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
            <TextInput variant="outlined" placeholder="Login" {...register("login")}/>
            <TextInput variant="outlined" placeholder="Password" {...register("password")}/>
            <Button type="submit">Log in</Button>
         </form>
      </div>
   )
}
