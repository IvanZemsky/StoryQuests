"use client"

import styles from "./styles.module.scss"
import { UserResultSkeleton } from "../UserResultSkeleton"
import Image from "next/image"
import { useUserResult } from "../../lib/useUserResult"
import { StoryId, StoryResult } from "@/entities/Story"

type Props = {
   storyId: StoryId
   result: StoryResult | null
}

export const UserResult = ({ storyId, result }: Props) => {
   const { isLoading, storyResult } = useUserResult(result, storyId)

   if (isLoading) return <UserResultSkeleton />

   return (
      <section className={styles.resultInfo}>
         <h2>Your result</h2>
         <div className={styles.userResult}>
            {storyResult ? (
               <>
                  <div className={styles.imgWrap}>
                     <Image src={storyResult.scene.img} alt="Result image" fill />
                  </div>
                  <div>
                     <p className={styles.resultTitle}>{storyResult.scene.title}</p>
                     <p className={styles.resultDesc}>{storyResult.scene.description}</p>
                  </div>
               </>
            ) : (
               <p className={styles.noResult}>
                  You haven&apos;t passed the story yet or your result is outdated
               </p>
            )}
         </div>
      </section>
   )
}
