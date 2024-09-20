"use client"

import { PageRoutes } from "@/shared/constants"
import Link from "next/link"
import styles from "./StoryHeader.module.scss"
import { Wrapper } from "@/shared/ui"

const { Stories, Home } = PageRoutes

interface Props {
   storyName?: string | null
}

export const StoryHeader = ({storyName}: Props) => {
   return (
      <header className={styles.header}>
         <Wrapper className={styles.wrapper}>
            <div className={styles.content}>
               <h1>
                  <Link className={styles.link} href={Home}>
                     StoryQuests
                  </Link>{" "}
                  <span>-</span> {storyName || "Story not found"}
               </h1>
               <nav className={styles.nav}>
                  <ul>
                     <Link href={Stories}>Exit</Link>
                  </ul>
               </nav>
            </div>
         </Wrapper>
      </header>
   )
}
