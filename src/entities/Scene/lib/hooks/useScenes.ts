import { useQuery } from "@tanstack/react-query"
import { sceneQueries } from "@/entities/Scene"

export function useScenes(storyId: string) {
   return useQuery(sceneQueries.getScenesByStoryIdQueryOptions(storyId))
}
