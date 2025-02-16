"use client"

import styles from "./styles.module.scss"
import { UserResultSkeleton } from "../UserResultSkeleton"
import Image from "next/image"
import { useUserResult } from "../../lib/useUserResult"

type Props = { result: any }

export const UserResult = ({ result }: Props) => {
   const storyResult = useUserResult(result)

   if (!storyResult) return <UserResultSkeleton />

   return (
      <section className={styles.resultInfo}>
         <h2>Your result</h2>
         <div className={styles.userResult}>
            <div className={styles.imgWrap}>
               <Image src={storyResult.scene.img} alt="Result image" fill />
            </div>
            <div>
               <p className={styles.resultTitle}>{storyResult.scene.title}</p>
               <p className={styles.resultDesc}>{storyResult.scene.description}</p>
            </div>
         </div>
      </section>
   )
}
