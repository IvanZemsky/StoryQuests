import { Logo, Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { HeaderMenu } from "./HeaderMenu"

export const Header = async () => {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <HeaderMenu/>
            </div>
         </Wrapper>
      </header>
   )
}
