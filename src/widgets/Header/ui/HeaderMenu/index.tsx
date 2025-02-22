"use client"

import { MainLink } from "@/shared/ui"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useState } from "react"
import BurgerIcon from "@/shared/assets/icons/burger.svg"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import { LogInLink } from "../LogInLink"
import { ProfileLink } from "../ProfileLink"
import { useSessionQuery } from "@/entities/User"
import { mapNavLinks } from "@/shared/lib"

export function HeaderMenu() {
   const session = useSessionQuery()

   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const handleBurgerClick = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   if (session.isPending) {
      return <div className={styles.skeleton}></div>
   }

   return (
      <nav className={styles.nav}>
         <ul className={cn({ [styles.opened]: isMenuOpened })}>
            {mapNavLinks({ component: MainLink, isAuth: !!session.data })}

            {session.data ? <ProfileLink /> : <LogInLink />}

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
