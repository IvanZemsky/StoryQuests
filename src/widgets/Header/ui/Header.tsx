"use client"

import { Logo, MainLink, Wrapper } from "@/shared/ui"
import { PageRoutes } from "@/shared/constants"
import styles from "./Header.module.scss"
import BurgerIcon from "@/shared/assets/icons/burger.svg"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import cn from "classnames"
import { useState } from "react"
import { ProfileLink, LogInLink, useAuthCheck, authStore } from "@/entities/User"
import { observer } from "mobx-react"
import { storyService } from "@/entities/Story"

const { Stories, Create, Home } = PageRoutes

export const Header = observer(() => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleBurgerClick = () => {
     setIsMenuOpened(!isMenuOpened)
  }

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <nav className={styles.nav}>
                  <ul className={cn({ [styles.opened]: isMenuOpened })}>
                     <MainLink href={Home}>Home</MainLink>
                     <MainLink href={Stories}>Stories</MainLink>
                     <MainLink href={Create}>Create</MainLink>

                      <LogInLink />

                     <button className={styles.closeBtn} onClick={handleBurgerClick}>
                        <CrossIcon />
                     </button>
                  </ul>

                  <button className={styles.burger} onClick={handleBurgerClick}>
                     <BurgerIcon />
                  </button>
               </nav>
            </div>
         </Wrapper>
      </header>
   )
})
