import { useQuery } from "@tanstack/react-query"
import { storyQueries } from "../../api/queries"
import { StoryFiltersParams } from "../../model/types"

export const useStories = (filters: StoryFiltersParams | null) => {
   return useQuery({ ...storyQueries.getStoriesQueryOptions(filters!),
      enabled: !!filters,
   })
}
