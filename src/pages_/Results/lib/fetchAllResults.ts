import { sceneService } from "@/entities/Scene"
import { StoryId } from "@/entities/Story"

export async function fetchAllResults(storyId: StoryId) {
   try {
      const scenes = await sceneService.fetchEndScenesByStoryId(storyId)
      return scenes
   } catch (error) {
      return null
   }
}
