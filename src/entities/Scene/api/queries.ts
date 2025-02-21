import { queryOptions } from "@tanstack/react-query"
import { sceneService } from "./service"
import { StoryId } from "@/entities/Story"

export const sceneQueries = {
   baseKey: "scenes",

   getScenesByStoryIdQueryOptions(storyId: StoryId) {
      return queryOptions({
         queryKey: [this.baseKey, "byStoryId", storyId],
         queryFn: () => sceneService.fetchScenesByStoryId(storyId),
      })
   },
}
