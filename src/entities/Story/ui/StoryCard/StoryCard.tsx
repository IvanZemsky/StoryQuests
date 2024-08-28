import Link from "next/link"
import styles from "./StoryCard.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import { HTMLAttributes } from "react"
import { ButtonLink, Button } from "@/src/shared/ui"
import { IStory } from "../../model/types"

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
   type = "default",
   className,
}: Props) => {
   return (
      <li className={[styles.wrap, className].join(" ")}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>
               {img && <img src={img} alt=""/>}
            </div>
            <div className={styles.info}>
               <h2 className={styles.title}>{name}</h2>
               <p className={styles.desc}>{description}</p>
               <div className={styles.links}>
                  {type === "default" ? (
                     <ButtonLink href={`${PageRoutes.Stories}/${id}`} color="primary">
                        Start
                     </ButtonLink>
                  ) : (
                     <Button color="primary">Start</Button>
                  )}
                  <Link href={PageRoutes.Profile} className={styles.authorLink}>
                     #{author.login}
                  </Link>
               </div>
            </div>
         </div>
      </li>
   )
}
