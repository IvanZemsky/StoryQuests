"use client"

import { LogInLink } from "@/entities/User"
import { MainLink } from "@/shared/ui"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import cn from "classnames"
import { useState } from "react"
import BurgerIcon from "@/shared/assets/icons/burger.svg"
import CrossIcon from "@/shared/assets/icons/cross.svg"

const { Stories, Create, Home } = PageRoutes

export function HeaderMenu() {
   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const handleBurgerClick = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   return (
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
   )
}
