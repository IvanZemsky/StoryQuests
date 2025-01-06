import { queryOptions } from "@tanstack/react-query"
import { sceneService } from "./service"

export const sceneQueries = {
   baseKey: "scenes",

   getScenesByStoryIdQueryOptions(storyId: string) {
      return queryOptions({
         queryKey: [this.baseKey, "byStoryId", storyId],
         queryFn: () => sceneService.fetchScenesByStoryId(storyId),
      })
   },
}
