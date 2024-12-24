"use client"

import styles from "./StoryList.module.scss"
import { StoriesSkeleton, StoryCard, useFetchStoriesQuery } from "@/entities/Story/"
import { PageBtns } from "@/shared/ui"
import { observer } from "mobx-react"
import { scrollToTop } from "@/shared/lib"

export const StoryList = observer(() => {
   const limit = 8

   const [page, setPage, { data, isError, isLoading }] = useFetchStoriesQuery()

   const handlePageClick = (page: number) => () => {
      scrollToTop()
      setPage(page - 1)
   }

   if (isError) return <p>Error</p>
   if (isLoading) return <StoriesSkeleton limit={8} />
   if (!data || !data.stories.length) return <p>No stories found</p>

   const { stories, totalCount } = data
   const pageAmount = Math.ceil(totalCount / limit)

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
