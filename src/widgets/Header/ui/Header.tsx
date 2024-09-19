"use client"

import { Logo, MainLink, Wrapper } from "@/src/shared/ui"
import { PageRoutes } from "@/src/shared/constants"
import styles from "./Header.module.scss"
import BurgerIcon from "@/src/shared/assets/icons/burger.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import cn from "classnames"
import { useState } from "react"
import { ProfileLink, LogInLink } from "@/src/entities/User"

const { Stories, Create, Home } = PageRoutes

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const isAuth = false

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

                     {isAuth ? <ProfileLink /> : <LogInLink />}

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
}
