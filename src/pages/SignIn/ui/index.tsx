import { SignInForm } from "@/features/user"
import styles from "./styles.module.scss"

export const SignIn = () => {
   return (
      <main className={styles.content}>
         <SignInForm />

         <div className={styles.rightWrap}>
            <div className={styles.rightContent}>
               <div className={styles.titleWrap}>
                  <h2>Story quests</h2>
                  <hr />
                  <p>A website with interactive text story quests</p>
               </div>
            </div>
         </div>
      </main>
   )
}
