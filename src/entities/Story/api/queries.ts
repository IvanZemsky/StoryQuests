import { queryOptions } from "@tanstack/react-query"
import { StorySearchParams } from "../model/types"
import { storyService } from "./service"
import { STORIES_SEARCH_LIMIT } from "../model/constants"

export const storyQueries = {
   baseKey: "stories",

   getStoriesQueryOptions(params: StorySearchParams) {
      return queryOptions({
         queryKey: [this.baseKey, params],
         queryFn: () =>
            storyService.fetchStories({ ...params, limit: STORIES_SEARCH_LIMIT }),
      })
   },
}
