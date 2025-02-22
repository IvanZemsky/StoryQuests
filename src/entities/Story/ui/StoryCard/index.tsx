import Link from "next/link"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import { ButtonLink, Button, Tooltip } from "@/shared/ui"
import { Story } from "../../model/types"
import EyeIcon from "@/shared/assets/icons/eye.svg"
import cn from "classnames"
import Image from "next/image"
import { memo, ReactNode } from "react"
import { setPath } from "@/shared/lib"

type Props = {
   data: Story
   type?: "default" | "preview"
   className?: string
   likeBtn: ReactNode
}

export const StoryCard = memo(({ data, type = "default", likeBtn, className }: Props) => {
   const { id, name, description, author, img, passes } = data

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
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img} alt={`Cover of the story "${name}"`} />
               )}
            </div>
            <div className={styles.info}>
               <h2 className={styles.title}>{name}</h2>
               <p className={styles.desc}>{description}</p>

               <div className={styles.controls}>
                  <Link
                     href={setPath(PageRoutes.Users, author.id)}
                     className={styles.authorLink}
                  >
                     #{author.login}
                  </Link>

                  <div className={styles.stats}>
                     <div className={styles.statsItem}>{likeBtn}</div>
                     <Tooltip text="Number of passes">
                        <div className={styles.statsItem}>
                           <EyeIcon />
                           <p>{passes}</p>
                        </div>
                     </Tooltip>
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
})

StoryCard.displayName = "StoryCard"
