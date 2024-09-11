"use client"

import { LogInLink, Logo, MainLink, ProfileLink } from "@/src/shared/ui"
import styles from "./MainHeader.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import { useState } from "react"
import BurgerIcon from "@/src/shared/assets/icons/burger.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import cn from "classnames"

const { Stories, Create, Home } = PageRoutes

export const MainHeader = () => {
   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const isAuth = false

   const handleBurgerClick = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   return (
      <div className={styles.content}>
         <Logo />
         <nav className={styles.nav}>

            <ul className={cn({[styles.opened]: isMenuOpened})}>
               <MainLink href={Home}>Home</MainLink>
               <MainLink href={Stories}>Stories</MainLink>
               <MainLink href={Create}>Create</MainLink>
               
               {isAuth ? <ProfileLink/> : <LogInLink/>}
               
               <button className={styles.closeBtn} onClick={handleBurgerClick}>
                  <CrossIcon />
               </button>
            </ul>

            <button className={styles.burger} onClick={handleBurgerClick}>
               <BurgerIcon />
            </button>
         </nav>
      </div>
   )
}
