"use client"

import { ButtonLink, LongArrowRightIcon } from "@/src/shared/ui"
import styles from "./PopularStories.module.scss"
import { fetchAllStories, IStory, StoryCard } from "@/src/entities/Story"
import { PageRoutes } from "@/src/shared/constants"
import Loading from "@/app/loading"
import { useQuery } from "@tanstack/react-query"

type Props = {}
export const PopularStories = ({}: Props) => {
   const {
      data: stories,
      isError,
      isLoading,
   } = useQuery<IStory[]>({
      queryKey: ["story"],
      queryFn: fetchAllStories,
   })

   if (isError) {
      return <p>Error</p>
   }

   if (isLoading) {
      return <Loading />
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
