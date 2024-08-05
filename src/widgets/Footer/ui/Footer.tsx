'use client'

import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./Footer.module.scss"
import Link from 'next/link';
import { PageRoutes } from "@/src/shared/constants";
import { usePathname } from "next/navigation";

const {Stories, Create} = PageRoutes

export const Footer = () => {
   const pathname = usePathname()
   const shouldNotShowFooter = pathname.startsWith(Stories + '/')

   if (shouldNotShowFooter) {
      return null
   }

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
                  <Link href={Stories}>Stories</Link>
                  <Link href={Create}>Create</Link>
               </nav>
            </div>
         </Wrapper>
      </footer>
   )
}
