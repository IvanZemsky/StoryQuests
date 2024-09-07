"use client"

import styles from "./StoryList.module.scss"
import { StoryCard, useFetchStoriesQuery } from "@/src/entities/Story/"
import Loading from "@/app/loading"
import { useCallback }  from "react"
import { PageBtns } from "@/src/shared/ui"
import { observer } from "mobx-react"

export const StoryList = observer(() => {
   const limit = 8

   const [page, setPage, { data, isError, isLoading }] =
      useFetchStoriesQuery(limit)

   const handlePageClick = useCallback(
      (page: number) => () => {
         setPage(page - 1)
      },
      [],
   )

   if (isError) return <p>Error</p>
   if (isLoading) return <Loading />
   if (!data) return <p>No stories found</p>

   const { stories, totalCount } = data
   const pageAmount = Math.ceil(totalCount / limit)

   return (
      <div className={styles.wrap}>
         <div className={styles.list}>
            {stories.map((story) => (
               <StoryCard {...story} key={story.id} />
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
