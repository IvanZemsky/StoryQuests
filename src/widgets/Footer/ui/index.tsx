import { Logo, Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import Link from "next/link"
import { mapNavLinks } from "@/shared/lib"

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.desc}>
                  <Logo />
                  <p className={styles.descText}>
                     Create and share your own story quests
                  </p>
               </div>
               <nav className={styles.links}>
                  {mapNavLinks({ component: Link, isAuth: false })}
               </nav>
            </div>
         </Wrapper>
      </footer>
   )
}
