import { ButtonLink}  from "@/src/shared/ui"
import LongArrowRightIcon from "@/src/shared/assets/icons/arrow-right-long.svg"
import styles from "./PopularStories.module.scss"
import { StoryCard, storyService } from "@/src/entities/Story"
import { PageRoutes } from "@/src/shared/constants"

export const PopularStories = async () => {
   const result = await storyService.fetchStories({
      limit: 4,
      order: "popular",
    });
    
    if (!result || !result.stories) {
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
            {result.stories?.map((story) => (
               <StoryCard {...story} key={story.id} />
            ))}
         </div>
      </>
   )
}
