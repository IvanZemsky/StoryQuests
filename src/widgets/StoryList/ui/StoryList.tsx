'use client'

import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import styles from "./StoryList.module.scss"
import { IStory, StoryCard } from "@/src/entities/Story/"
import { fetchStories } from "@/src/entities/Story"
import Loading from "@/app/loading"
import { useCallback, useState } from "react"
import { PageBtns } from "@/src/shared/ui"
import { AxiosError } from "axios"

export const StoryList = () => {
   const [currentPage, setCurrentPage] = useState(0);
   const limit = 8;

   const queryOptions: UseQueryOptions<{ stories: IStory[], totalCount: number }, AxiosError> = {
      queryKey: ['story', currentPage],
      queryFn: () => fetchStories(limit, currentPage, "", "", ""),
   };

   const handlePageClick = useCallback((page: number) => () => {
      setCurrentPage(page - 1)
   }, [])

   const { data, isError, isLoading } = useQuery(queryOptions);

   if (isError) return <p>Error</p>;
   if (isLoading) return <Loading />;
   if (!data) return <p>No stories found</p>;

   const { stories, totalCount } = data;
   const pageAmount = Math.ceil(totalCount / limit);

   return (
      <div className={styles.wrap}>
         <div className={styles.list}>
            {stories.map(story => (
               <StoryCard {...story} key={story.id} />
            ))}
         </div>

         <PageBtns
            currentPage={currentPage}
            pageAmount={pageAmount}
            handleClick={handlePageClick}
         />
      </div>
   );
};
