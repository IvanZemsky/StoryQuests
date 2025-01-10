import { useQuery } from "@tanstack/react-query"
import { storyQueries } from "../../api/queries"

export const useStories = (filters: any) => {
   return useQuery(
      storyQueries.getStoriesQueryOptions(filters),
   )
}
