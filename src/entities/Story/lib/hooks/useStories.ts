import { useQuery } from "@tanstack/react-query"
import { storyQueries } from "../../api/queries"
import { StoryFilters } from "../../model/types"

export const useStories = (filters: StoryFilters) => {
   return useQuery({ ...storyQueries.getStoriesQueryOptions(filters),
      enabled: !!filters,
   })
}
