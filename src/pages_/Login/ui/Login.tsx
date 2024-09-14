import { Button, ButtonLink, TextInput } from "@/src/shared/ui"
import styles from "./Login.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import ArrowLeftLongIcon from "@/src/shared/assets/icons/arrow-left-long.svg"

export const Login = () => {
   return (
      <main className={styles.content}>
         <div className={styles.auth}>
            <ButtonLink
               href={PageRoutes.Home}
               className={styles.homeLink}
               leftIcon={<ArrowLeftLongIcon />}
            />
            <form className={styles.form}>
               <h2>Authorization</h2>
               <TextInput variant="outlined" placeholder="Login" />
               <TextInput variant="outlined" placeholder="Password" />
               <Button>Log in</Button>
            </form>
         </div>

         <div className={styles.rightWrap}>
            <div className={styles.rightContent}>
               <div className={styles.titleWrap}>
                  <h1>Story quests</h1>
                  <hr />
                  <p>A website with interactive text story quests</p>
               </div>
            </div>
         </div>
      </main>
   )
}
