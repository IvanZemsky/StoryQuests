import { useQuery } from "@tanstack/react-query"
import { storyFiltersStore } from "../../model/storyFiltersStore"
import { storyQueries } from "../../api/queries"

export const useStories = () => {
   const { filters, setPage } = storyFiltersStore
   const data = useQuery(storyQueries.getStoriesQueryOptions(filters))

   return { page: filters.page, setPage, data }
}
