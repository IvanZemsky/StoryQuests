import { ButtonLink } from "@/shared/ui"
import LongArrowRightIcon from "@/shared/assets/icons/arrow-right-long.svg"
import styles from "./styles.module.scss"
import { StoryCard, storyService } from "@/entities/Story"
import { PageRoutes } from "@/shared/constants"

export const PopularStories = async () => {
   const result = await storyService.fetchStories({
      limit: 4,
      order: "popular",
      page: 1,
      search: "",
      length: "",
   })

   if (!result || !result.stories) {
      return <p>Error</p>
   }

   return (
      <section className={styles.content}>
         <div className={styles.header}>
            <h2>Popular</h2>
            <ButtonLink href={PageRoutes.Stories} rightIcon={<LongArrowRightIcon />}>
               More stories
            </ButtonLink>
         </div>
         <div className={styles.stories}>
            {result.stories?.map((story) => (
               <StoryCard data={story} key={story.id} />
            ))}
         </div>
      </section>
   )
}
