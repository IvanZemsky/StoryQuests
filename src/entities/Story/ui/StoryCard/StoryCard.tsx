import Link from "next/link"
import styles from "./StoryCard.module.scss"
import { PageLink, PageRoutes } from "@/src/shared"
import Image from "next/image"
import cardbg from "@/public/cardbg.jpg"

export const StoryCard = () => {
   return (
      <li className={styles.wrap}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>
               <Image src={cardbg} alt="" />
            </div>
            <div className={styles.info}>
               <h2 className={styles.title}>Story Name</h2>
               <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat
               </p>
               <div className={styles.links}>
                  <PageLink href="#!" color="primary">
                     Start
                  </PageLink>
                  <Link href={PageRoutes.Profile} className={styles.authorLink}>
                     #AuthorNickname
                  </Link>
               </div>
            </div>
         </div>
      </li>
   )
}
