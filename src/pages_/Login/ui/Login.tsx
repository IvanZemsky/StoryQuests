import styles from "./Login.module.scss"
import { LoginForm } from "./LoginForm/LoginForm"

export const Login = () => {
   return (
      <main className={styles.content}>
         <LoginForm />

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
