"use client"
import { StoriesSkeleton, useInfiniteStories } from "@/entities/Story"
import styles from "./styles.module.scss"
import { ButtonLink, Loading } from "@/shared/ui"
import { useIntersection } from "@/shared/lib"
import { BaseStoriesList } from "../BaseStoriesList"
import { PageRoutes } from "@/shared/constants"

type Props = {
   userId: string
   hasLabel: boolean
   notFoundMessage?: string
}

export const ProfileStoriesList = ({ userId, hasLabel, notFoundMessage }: Props) => {
   const { data, isError, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
      useInfiniteStories({ byUser: userId, limit: 9 })

   const cursorRef = useIntersection(fetchNextPage)

   if (isError) return <p>Error while fetching stories</p>
   if (isPending) return <StoriesSkeleton limit={8} />

   return (
      <div className={styles.wrap}>
         <BaseStoriesList
            data={data}
            notFoundMessage={<p className={styles.notFoundMessage}>{notFoundMessage}</p>}
         />
         <div ref={cursorRef}>
            {!hasNextPage && hasLabel && (
               <div className={styles.finalBlock}>
                  <p>Have an idea? Turn it into a story!</p>
                  <ButtonLink href={PageRoutes.Create}>Create a story</ButtonLink>
               </div>
            )}
            {isFetchingNextPage && <Loading />}
         </div>
      </div>
   )
}
