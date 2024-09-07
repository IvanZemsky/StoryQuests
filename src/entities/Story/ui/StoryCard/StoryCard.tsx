import Link from "next/link"
import styles from "./StoryCard.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import { HTMLAttributes } from "react"
import { ButtonLink, Button } from "@/src/shared/ui"
import { IStory } from "../../model/types"
import HeartIcon from "@/src/shared/assets/icons/heart.svg"
import EyeIcon from "@/src/shared/assets/icons/eye.svg"

interface Props extends HTMLAttributes<HTMLDivElement>, IStory {
   id: string
   type?: "default" | "preview"
}

export const StoryCard = ({
   id,
   name,
   description,
   author,
   img,
   passes,
   likes,
   type = "default",
   className,
}: Props) => {
   return (
      <li className={[styles.wrap, className].join(" ")}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>{img && <img src={img} alt="" />}</div>
            <div className={styles.info}>
               <h2 className={styles.title}>{name}</h2>
               <p className={styles.desc}>{description}</p>

               <div className={styles.controls}>
                  <Link href={PageRoutes.Profile} className={styles.authorLink}>
                     #{author.login}
                  </Link>

                  <div className={styles.stats}>
                     <div className={styles.statsItem}>
                        <button className={styles.likeBtn}>
                           <HeartIcon />
                        </button>
                        <p>{likes}</p>
                     </div>
                     <div className={styles.statsItem}>
                        <EyeIcon />
                        <p>{passes}</p>
                     </div>
                  </div>

                  {type === "default" ? (
                     <ButtonLink href={`${PageRoutes.Stories}/${id}`} color="primary">
                        Start
                     </ButtonLink>
                  ) : (
                     <Button color="primary">Start</Button>
                  )}
               </div>
            </div>
         </div>
      </li>
   )
}
