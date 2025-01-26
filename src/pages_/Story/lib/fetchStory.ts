import { storyService } from "@/entities/Story"

export async function fetchStory(
   storyId: string,
   accessToken: { name: string; value: string } | undefined,
) {
   try {
      const story = await storyService.fetchStoryById(storyId, {
         cookie: `${accessToken?.name}=${accessToken?.value}`,
      })
      return story
   } catch (error) {
      return null
   }
}
