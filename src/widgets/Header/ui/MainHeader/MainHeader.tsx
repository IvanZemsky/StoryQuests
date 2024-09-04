"use client"

import { Logo, MainLink } from "@/src/shared/ui"
import styles from "./MainHeader.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import { useState } from "react"
import BurgerIcon from "@/src/shared/assets/icons/burger.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"

const { Stories, Create, Home } = PageRoutes

export const MainHeader = () => {
   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const handleBurgerClick = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   return (
      <div className={styles.content}>
         <Logo />
         <nav className={styles.nav}>

            <ul className={isMenuOpened ? styles.opened : ""}>
               <MainLink href={Home}>Home</MainLink>
               <MainLink href={Stories}>Stories</MainLink>
               <MainLink href={Create}>Create</MainLink>
               
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
