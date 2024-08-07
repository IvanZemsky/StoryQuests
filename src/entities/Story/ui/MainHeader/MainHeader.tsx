import { Logo, MainLink } from "@/src/shared/ui"
import styles from "./MainHeader.module.scss"
import { PageRoutes } from "@/src/shared/constants"

const { Stories, Create } = PageRoutes

export const MainHeader = () => {
   return (
      <div className={styles.content}>
         <Logo />
         <nav className={styles.nav}>
            <ul>
               <MainLink href={Stories}>Stories</MainLink>
               <MainLink href={Create}>Create</MainLink>
            </ul>
         </nav>
      </div>
   )
}
