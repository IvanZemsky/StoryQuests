import { useQuery } from "@tanstack/react-query"
import { storyFiltersStore } from "../../model/storyFiltersStore"
import { storyService } from "../../services/StoryService"

export const useFetchStoriesQuery = () => {
   const { limit, page, setPage, search, order, length } = storyFiltersStore

   const queryKey = ["stories", page, search, order, length]
   const queryFn = () => storyService.fetchStories({limit, page, search, order, length})

   const data = useQuery({
      queryKey,
      queryFn,
   })

   return [page, setPage, data] as const
}
