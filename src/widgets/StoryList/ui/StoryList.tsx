'use client'

import { useQuery } from "@tanstack/react-query"
import styles from "./StoryList.module.scss"
import { IStory, StoryCard } from "@/src/entities/Story/"
import { fetchAllStories } from "@/src/entities/Story"
import Loading from "@/app/loading"

export const StoryList = () => {
   const { data: stories, isError, isLoading } = useQuery<IStory[]>({
      queryKey: ['story'],
      queryFn: fetchAllStories,
    });

    if (isError) {
      return <p>Error</p>
    }

    if (isLoading) {
      return <Loading />
    }

   return (
      <div className={styles.list}>
         {stories?.map(story => (
            <StoryCard {...story} key={story.id}/>
         ))}
      </div>
   )
}
