import Link from "next/link"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import { ButtonLink, Button } from "@/shared/ui"
import { IStory } from "../../model/types"
import HeartIcon from "@/shared/assets/icons/heart.svg"
import EyeIcon from "@/shared/assets/icons/eye.svg"
import cn from "classnames"
import Image from "next/image"

type Props = {
   data: IStory
   type?: "default" | "preview"
   className?: string
}

export const StoryCard = ({ data, type = "default", className }: Props) => {
   const { id, name, description, author, tags, img, passes, likes } = data

   return (
      <li className={cn(styles.wrap, className)}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>
               {img && type === "default" && (
                  <Image
                     src={img}
                     fill
                     sizes="auto"
                     alt={`Cover of the story "${name}"`}
                  />
               )}

               {img && type === "preview" && (
                  <img src={img} alt={`Cover of the story "${name}"`} />
               )}
            </div>
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
