import { Button, ButtonLink, TextInput } from "@/src/shared/ui"
import styles from "./Login.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import ArrowLeftLongIcon from "@/src/shared/assets/icons/arrow-left-long.svg"

export const Login = () => {
   return (
      <div className={styles.content}>
         <div className={styles.auth}>
            <ButtonLink
               href={PageRoutes.Home}
               className={styles.homeLink}
               leftIcon={<ArrowLeftLongIcon />}
            />
            <form className={styles.form}>
               <h1>Authorization</h1>
               <TextInput placeholder="Login" />
               <TextInput placeholder="Password" />
               <Button>Log in</Button>
            </form>
         </div>
      </div>
   )
}
