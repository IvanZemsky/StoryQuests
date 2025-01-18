import { useQuery } from "@tanstack/react-query"
import { sceneQueries } from "@/entities/Scene"

export function useScenes(storyId: string, enabled?: boolean) {
   return useQuery({ ...sceneQueries.getScenesByStoryIdQueryOptions(storyId), enabled })
}
