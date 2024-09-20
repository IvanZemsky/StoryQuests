import { Logo, Wrapper } from "@/shared/ui"
import styles from "./Footer.module.scss"
import Link from 'next/link';
import { PageRoutes } from "@/shared/constants";

const {Stories, Create, Home} = PageRoutes

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
                  <Link href={Home}>Home</Link>
                  <Link href={Stories}>Stories</Link>
                  <Link href={Create}>Create</Link>
               </nav>
            </div>
         </Wrapper>
      </footer>
   )
}
