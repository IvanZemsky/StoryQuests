"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchStories } from "../../api/queries/fetchStories"
import { storyFiltersStore } from "../../model/storyFiltersStore"

export const useFetchStoriesQuery = () => {
   const { limit, page, setPage, search, order, length } = storyFiltersStore

   const queryKey = ["stories", page, search, order, length]
   const queryFn = () => fetchStories(limit, page, search, order, length)

   const data = useQuery({
      queryKey,
      queryFn,
   })

   return [page, setPage, data] as const
}
