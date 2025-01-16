import { SignUpForm } from "@/features/user"
import styles from "./styles.module.scss"

export const SignUp = () => {
   return (
      <main className={styles.content}>
         <SignUpForm />

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
