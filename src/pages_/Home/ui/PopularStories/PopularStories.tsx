import { ButtonLink, LongArrowRightIcon } from "@/src/shared/ui"
import styles from "./PopularStories.module.scss"
import { StoryCard } from "@/src/entities/Story"
import { PageRoutes } from "@/src/shared/constants"
import { getStories } from "../../api/getStories"

export const PopularStories = async () => {
   const {stories, error} = await getStories()
   
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
