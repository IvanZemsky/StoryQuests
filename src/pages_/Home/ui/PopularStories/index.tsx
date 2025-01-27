import { ButtonLink } from "@/shared/ui"
import LongArrowRightIcon from "@/shared/assets/icons/arrow-right-long.svg"
import styles from "./styles.module.scss"
import { StoryCard } from "@/entities/Story"
import { PageRoutes } from "@/shared/constants"
import { LikeStoryBtn } from "@/features/story"
import { cookies } from "next/headers"
import { fetchPopularStories } from "../../lib/fetchPopularStories"

export const PopularStories = async () => {
   const accessToken = (await cookies()).get("access-token")

   const popular = await fetchPopularStories(accessToken)

   if (!popular || !popular.stories) {
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
            {popular.stories?.map((story) => (
               <StoryCard
                  data={story}
                  key={story.id}
                  likeBtn={
                     <LikeStoryBtn
                        likes={story.likes}
                        isLiked={story.isLiked}
                        storyId={story.id}
                     />
                  }
               />
            ))}
         </div>
      </section>
   )
}
