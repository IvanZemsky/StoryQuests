"use client"

import styles from "./styles.module.scss"
import { StoriesSkeleton, StoryCard, useStories } from "@/entities/Story"
import { PageBtns } from "@/shared/ui"
import { STORIES_SEARCH_LIMIT } from "@/entities/Story/model/constants"
import { useStoriesFilterParams } from "../../lib/hooks/useStoriesFilterParams"
import { LikeStoryBtn } from "@/features/story"

export const StoryList = () => {
   const { filters, setParams, parseError } = useStoriesFilterParams()
   const { data, isError, isPending } = useStories(filters)

   if (parseError || !filters) {
      return <p>Error: invalid search params</p>
   }

   const handlePageClick = (page: number) => () => {
      setParams({ ...filters, page })
   }

   if (isError) return <p>Error</p>
   if (isPending) return <StoriesSkeleton limit={STORIES_SEARCH_LIMIT} />
   if (!data || !data.stories.length) return <p>No stories found</p>

   const { stories, totalCount } = data
   const pageAmount = Math.ceil(totalCount / STORIES_SEARCH_LIMIT)

   return (
      <div className={styles.wrap}>
         <div className={styles.list}>
            {stories.map((story) => (
               <StoryCard
                  data={story}
                  key={story.id}
                  likeBtn={
                     <LikeStoryBtn
                        storyId={story.id}
                        likes={story.likes}
                        isLiked={story.isLiked}
                     />
                  }
               />
            ))}
         </div>

         <PageBtns
            currentPage={Number(filters.page)}
            pageAmount={pageAmount}
            handleClick={handlePageClick}
         />
      </div>
   )
}
