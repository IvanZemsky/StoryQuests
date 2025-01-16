import { PageRoutes } from "@/shared/constants"
import { ButtonLink } from "@/shared/ui"
import ArrowLeftLongIcon from "@/shared/assets/icons/arrow-left-long.svg"
import { FormEventHandler, ReactNode } from "react"
import styles from "./styles.module.scss"

type Props = {
   error: Error | null
   onSubmit: FormEventHandler<HTMLFormElement>
   inputs: ReactNode
   link: ReactNode
   title: string
}

export const AuthFormLayout = ({
   error,
   onSubmit,
   inputs,
   link,
   title
}: Props) => {
   return (
      <div className={styles.auth}>
         <ButtonLink
            href={PageRoutes.Home}
            className={styles.homeLink}
            leftIcon={<ArrowLeftLongIcon />}
         />
         <form className={styles.form} onSubmit={onSubmit}>
            <h1>{title}</h1>
            {inputs}
            {link}
         </form>

         {error && <p className={styles.error}>Incorrect login or password</p>}
      </div>
   )
}
