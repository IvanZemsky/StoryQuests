import { Page } from "../model/types"
import { StoryWrap } from "./StoryWrap"
import { storyService } from "@/entities/Story"

export const Story = async ({ params }: Page) => {
   const story = await storyService.fetchStoryById(params.id)

   if (!story) {
      return <p>Error</p>
   }

   return <StoryWrap story={story} />
}
