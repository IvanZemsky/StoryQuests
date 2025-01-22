"use client"

import styles from "./styles.module.scss"
import { StoriesSkeleton, useStories } from "@/entities/Story"
import { PageBtns } from "@/shared/ui"
import { STORIES_SEARCH_LIMIT } from "@/entities/Story/model/constants"
import { useStoriesFilterParams } from "../../lib/hooks/useStoriesFilterParams"
import { BaseStoriesList } from "@/widgets/StoriesList"

export const StoryList = () => {
   const { filters, setParams, parseError } = useStoriesFilterParams()
   const { data, isError, isPending } = useStories({
      ...filters,
      limit: STORIES_SEARCH_LIMIT,
   })

   if (parseError || !filters) {
      return <p>Error: invalid search params</p>
   }

   const handlePageClick = (page: number) => () => {
      setParams({ ...filters, page })
   }

   if (isError) return <p>Error</p>
   if (isPending) return <StoriesSkeleton limit={STORIES_SEARCH_LIMIT} />
   if (!data?.stories.length) return <p>No stories found</p>

   const { stories, totalCount } = data
   const pageAmount = Math.ceil(totalCount / STORIES_SEARCH_LIMIT)

   return (
      <div className={styles.wrap}>
         <BaseStoriesList data={stories} />
         <PageBtns
            currentPage={Number(filters.page)}
            pageAmount={pageAmount}
            handleClick={handlePageClick}
         />
      </div>
   )
}
