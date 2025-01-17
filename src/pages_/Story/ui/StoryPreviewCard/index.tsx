import { IStory } from "@/entities/Story"
import styles from "./styles.module.scss"
import Link from "next/link"
import { PageRoutes } from "@/shared/constants"
import Image from "next/image"
import { Button, Loading, Wrapper } from "@/shared/ui"
import HeartIcon from "@/shared/assets/icons/heart.svg"
import EyeIcon from "@/shared/assets/icons/eye.svg"
import { SetStateFn } from "@/shared/model"
import cn from "classnames"
import ArrowLeftLongIcon from "@/shared/assets/icons/arrow-left-long.svg"
import Diagram from "@/shared/assets/icons/diagram.svg"
import Bookmark from "@/shared/assets/icons/bookmark.svg"

const { Stories } = PageRoutes

type Props = {
   data: IStory
   setIsStoryStarted: SetStateFn<boolean>
   isPending: boolean
}

export const StoryPreviewCard = ({ data, setIsStoryStarted, isPending }: Props) => {
   const { name, img, author, description, sceneCount, passes, likes } = data

   const handleStartBtnClick = () => {
      setIsStoryStarted(true)
   }

   return (
      <Wrapper>
         
            <div className={styles.content}>
               <header className={styles.header}>
                  <Link href={Stories}>
                     <ArrowLeftLongIcon />
                     Go back
                  </Link>
                  <button>
                     <Bookmark />
                  </button>
                  <Link href={Stories}>
                     Statistics
                     <Diagram />
                  </Link>
               </header>

               <div className={styles.wrap}>
                  <div className={styles.card}>
                     <div className={cn(styles.loader, { [styles.pending]: isPending })}>
                        <Loading />
                     </div>

                     <div className={styles.imgWrap}>
                        <Image
                           src={img}
                           fill
                           sizes="auto"
                           alt={`Cover of the story "${name}"`}
                        />
                     </div>
                     <div className={styles.info}>
                        <h2 className={styles.title}>{name}</h2>
                        <p className={styles.sceneCount}>{sceneCount} scenes</p>
                        <p className={styles.desc}>{description}</p>

                        <div className={styles.infoItems}>
                           <div className={styles.infoItem}>
                              <Link
                                 href={PageRoutes.Profile}
                                 className={styles.authorLink}
                              >
                                 #{author.login}
                              </Link>
                           </div>
                           <div className={styles.infoItem}>
                              <button className={styles.likeBtn}>
                                 <HeartIcon />
                              </button>
                              <p>{likes}</p>
                           </div>
                           <div className={styles.infoItem}>
                              <EyeIcon />
                              <p>{passes}</p>
                           </div>
                        </div>

                        <Button
                           color="primary"
                           className={styles.startBtn}
                           onClick={handleStartBtnClick}
                           disabled={isPending}
                        >
                           Let&apos;s go!
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         
      </Wrapper>
   )
}
