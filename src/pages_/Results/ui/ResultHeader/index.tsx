"use client"

import { Story } from "@/entities/Story"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import Link from "next/link"
import { useUserResult } from "../../lib/useUserResult"

type Props = {
   story: Story
   result: any
}

export const ResultHeader = ({ story, result }: Props) => {
   const storyResult = useUserResult(result)

   return (
      <header>
         <h1 className={styles.title}>Results: {story.name}</h1>
         {storyResult ? (
            <div className={styles.headerLinks}>
               <p className={styles.date}>Passed: {storyResult.datetime}</p>
               <div className={styles.author}>
                  <p>
                     Author:{" "}
                     <Link href={setPath(PageRoutes.Users, story.author.id)}>
                        {story.author.login}
                     </Link>
                  </p>
               </div>
               <div>
                  <Link
                     href={setPath(PageRoutes.Stories, story.id)}
                     className={styles.toStoryLink}
                  >
                     To the story
                  </Link>
               </div>
            </div>
         ) : (
            <div className={styles.skeleton}></div>
         )}
      </header>
   )
}
