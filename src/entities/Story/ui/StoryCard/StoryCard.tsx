import Link from "next/link"
import styles from "./StoryCard.module.scss"
import { PageRoutes } from "@/src/shared/constants"
import { HTMLAttributes } from "react"
import { ButtonLink, Button } from "@/src/shared/ui"

interface Props extends HTMLAttributes<HTMLDivElement> {
   id: string
   name: string
   description: string
   login: string
   imgLink: string
   type?: "default" | "preview"
}

export const StoryCard = ({
   id,
   name,
   description,
   login,
   imgLink,
   type = "default",
   className,
}: Props) => {
   return (
      <li className={[styles.wrap, className].join(" ")}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>
               {imgLink && <img src={imgLink} alt=""/>}
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
                     #{login}
                  </Link>
               </div>
            </div>
         </div>
      </li>
   )
}
