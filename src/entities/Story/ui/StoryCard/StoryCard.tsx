import Link from "next/link"
import styles from "./StoryCard.module.scss"
import { ButtonLink, PageRoutes } from "@/src/shared"
import Image from "next/image"
import cardbg from "@/public/cardbg.jpg"

interface StoryCard {
   id: string
   name: string
   description: string
   login: string
   imgLink: string
   className?: string
}

export const StoryCard = ({className}: {className?: string}) => {
   return (
      <li className={[styles.wrap, className].join(" ")}>
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
                  <ButtonLink href={`${PageRoutes.Stories}/1233423`} color="primary">
                     Start
                  </ButtonLink>
                  <Link href={PageRoutes.Profile} className={styles.authorLink}>
                     #AuthorNickname
                  </Link>
               </div>
            </div>
         </div>
      </li>
   )
}
