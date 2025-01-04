"use client"

import styles from "./StoryList.module.scss"
import { StoriesSkeleton, StoryCard, useStories } from "@/entities/Story"
import { PageBtns } from "@/shared/ui"
import { observer } from "mobx-react"
import { scrollToTop } from "@/shared/lib"
import { STORIES_SEARCH_LIMIT } from "@/entities/Story/model/constants"

export const StoryList = observer(() => {
   const {
      page,
      setPage,
      data: { data, isError, isPending },
   } = useStories()

   const handlePageClick = (page: number) => () => {
      scrollToTop()
      setPage(page - 1)
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
               <StoryCard data={story} key={story.id} />
            ))}
         </div>

         <PageBtns
            currentPage={page}
            pageAmount={pageAmount}
            handleClick={handlePageClick}
         />
      </div>
   )
})
