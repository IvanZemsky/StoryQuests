import { ButtonLink}  from "@/src/shared/ui"
import LongArrowRightIcon from "@/src/shared/assets/icons/arrow-right-long.svg"
import styles from "./PopularStories.module.scss"
import { StoryCard } from "@/src/entities/Story"
import { PageRoutes } from "@/src/shared/constants"
import { getStories } from "../../api/getStories"

export const PopularStories = async () => {
   const {stories, error} = await getStories(4)
   
   if (error) {
      return <p>Error</p>
   }

   return (
      <>
         <div className={styles.header}>
            <h2>Popular</h2>
            <ButtonLink href={PageRoutes.Stories} rightIcon={<LongArrowRightIcon />}>
               More stories
            </ButtonLink>
         </div>
         <div className={styles.stories}>
            {stories?.map((story) => (
               <StoryCard {...story} key={story.id} />
            ))}
         </div>
      </>
   )
}
