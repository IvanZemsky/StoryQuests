"use client"

import { BurgerIcon, Button, Logo, MainLink } from "@/src/shared/ui"
import styles from "./MainHeader.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import { useState } from "react"

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
               
               <button className={styles.burger} onClick={handleBurgerClick}>
                  <BurgerIcon />
               </button>
            </ul>

            <button className={styles.burger} onClick={handleBurgerClick}>
               <BurgerIcon />
            </button>
         </nav>
      </div>
   )
}
