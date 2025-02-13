"use client"

import { useState, useEffect } from "react"
import styles from "./styles.module.scss"

type Props = { result: any }

export const UserResult = ({ result }: Props) => {
   const [storyResult, setStoryResult] = useState(result)

   useEffect(() => {
      if (result === null) {
         const localStoredResult = JSON.parse(localStorage.getItem("storyResult") || "")
         if (localStoredResult) {
            setStoryResult(localStoredResult)
         }
      }
   }, [])

   if (!storyResult) {
      return null
   }

   return (
      <section className={styles.resultInfo}>
         <h2>Your result</h2>
         <div className={styles.userResult}>
            <img src={storyResult.scene.img} alt="Result image" />
            <div>
               <p className={styles.resultTitle}>{storyResult.scene.title}</p>
               <p className={styles.resultDesc}>{storyResult.scene.description}</p>
            </div>
         </div>
      </section>
   )
}
