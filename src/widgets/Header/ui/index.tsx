import { Logo, Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { observer } from "mobx-react"
import { HeaderMenu } from "./HeaderMenu"

export const Header = observer(() => {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <HeaderMenu />
            </div>
         </Wrapper>
      </header>
   )
})
