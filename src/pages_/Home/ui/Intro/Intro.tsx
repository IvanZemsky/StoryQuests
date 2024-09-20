import Link from "next/link"
import styles from "./Intro.module.scss"
import LongArrowRightIcon from "@/shared/assets/icons/arrow-right-long.svg"
import { PageRoutes } from "@/shared/constants"

export const Intro = () => {
   return (
      <div className={styles.items}>
         <div className={styles.itemWrap}>
            <div className={styles.item}>
               <h1 className={styles.text}>
                  A website with interactive text story quests
               </h1>
            </div>
         </div>
         <Link href={PageRoutes.Login} className={styles.itemWrap}>
            <div className={styles.item}>
               <h3 className={styles.text}>Log in to create your story <LongArrowRightIcon /></h3>
            </div>
         </Link>
      </div>
   )
}
