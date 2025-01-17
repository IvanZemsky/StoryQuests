"use client"

import { MainLink } from "@/shared/ui"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import cn from "classnames"
import { useState } from "react"
import BurgerIcon from "@/shared/assets/icons/burger.svg"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import { LogInLink } from "../LogInLink"
import { ProfileLink } from "../ProfileLink"
import { useSessionQuery } from "@/entities/User"

const { Stories, Create, Home } = PageRoutes

export function HeaderMenu() {
   const session = useSessionQuery()
   console.log(session.data)

   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const handleBurgerClick = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   if (session.isPending) {
      return null
   }

   return (
      <nav className={styles.nav}>
         <ul className={cn({ [styles.opened]: isMenuOpened })}>
            <MainLink href={Home}>Home</MainLink>
            <MainLink href={Stories}>Stories</MainLink>
            {session.data && <MainLink href={Create}>Create</MainLink>}

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
