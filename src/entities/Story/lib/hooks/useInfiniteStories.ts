import { useInfiniteQuery } from "@tanstack/react-query"
import { StoryFilters } from "../../model/types"
import { storyQueries } from "../../api/queries"

export const useInfiniteStories = (filters: StoryFilters) => {
   return useInfiniteQuery(storyQueries.getStoriesInfiniteQueryOptions(filters))
}
