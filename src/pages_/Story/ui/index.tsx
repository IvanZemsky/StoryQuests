import { cookies } from "next/headers"
import { Page } from "../model/types"
import { StoryWrap } from "./StoryWrap"
import { storyService } from "@/entities/Story"

export const Story = async ({ params }: Page) => {
   const accessToken = cookies().get("access-token")
   const story = await storyService.fetchStoryById(params.id, {
      cookie: `${accessToken?.name}=${accessToken?.value}`,
   })

   if (!story) {
      return <p>Error</p>
   }

   return <StoryWrap story={story} />
}
