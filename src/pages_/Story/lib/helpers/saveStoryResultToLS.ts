import { Scene } from "@/entities/Scene"
import { StoryResultInLS } from "@/entities/Story"

export function saveStoryResultToLS(scene: Scene): StoryResultInLS {
   const results: StoryResultInLS[] = JSON.parse(
      localStorage.getItem("storyResults") || "[]",
   )

   const result: StoryResultInLS = {
      storyId: scene.storyId,
      scene,
      datetime: new Date().toISOString(),
   }

   const existingResult = results.find(
      (result: StoryResultInLS) => result.storyId === scene.storyId,
   )

   if (existingResult) {
      results.splice(results.indexOf(existingResult), 1)
   }

   results.push(result)

   localStorage.setItem("storyResults", JSON.stringify(results))

   return result
}
