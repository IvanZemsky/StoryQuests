import Link from "next/link"
import styles from "./Intro.module.scss"
import { LongArrowRightIcon } from "@/src/shared/ui"

type Props = {}
export const Intro = ({}: Props) => {
   return (
      <div className={styles.items}>
         <div className={styles.itemWrap}>
            <div className={styles.item}>
               <h1 className={styles.text}>
                  A website with interactive text story quests
               </h1>
            </div>
         </div>
         <Link href="" className={styles.itemWrap}>
            <div className={styles.item}>
               <h3 className={styles.text}>Log in to create your story <LongArrowRightIcon /></h3>
            </div>
         </Link>
      </div>
   )
}
