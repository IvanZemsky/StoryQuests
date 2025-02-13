"use client"

import { Story } from "@/entities/Story"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import { ButtonLink } from "@/shared/ui"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
   story: Story
   result: any
}

export const ResultHeader = ({ story, result }: Props) => {
   const [storyResult, setStoryResult] = useState(result)

   useEffect(() => {
      if (result === null) {
         const localStoredResult = JSON.parse(localStorage.getItem("storyResult") || "")
         if (localStoredResult) {
            setStoryResult(localStoredResult)
         }
      }
   }, [])

   return (
      <header>
         <h1 className={styles.title}>Results: {story.name}</h1>
         <div className={styles.headerLinks}>
            {storyResult && <p className={styles.date}>Passed: {storyResult.datetime}</p>}
            <div className={styles.author}>
               <p>
                  Author:{" "}
                  <Link href={setPath(PageRoutes.Users, story.author.id)}>
                     {story.author.login}
                  </Link>
               </p>
            </div>
            <div>
               <ButtonLink
                  href={setPath(PageRoutes.Stories, story.id)}
                  className={styles.toStoryLink}
               >
                  To the story
               </ButtonLink>
            </div>
         </div>
      </header>
   )
}
